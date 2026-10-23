const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const baseDir = __dirname;
const rawDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\hoantien_raw';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  let reqPath = decodeURIComponent(req.url.split('?')[0]);

  // Ignore /cdn-cgi telemetry requests without throwing 404
  if (reqPath.startsWith('/cdn-cgi/')) {
    res.writeHead(204);
    return res.end();
  }

  // API to receive crawled pages from user's Chrome console
  if (req.method === 'POST' && reqPath === '/api/save-page') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const routeName = (data.route || 'page').replace(/^\//, '').replace(/\//g, '_');
        const filename = `${routeName}.html`;
        const outPath = path.join(rawDir, filename);
        fs.writeFileSync(outPath, data.html, 'utf-8');
        console.log(`[API] Saved crawled page: ${filename} (${data.html.length} bytes)`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, saved: filename }));
      } catch (err) {
        console.error('[API] Error saving page:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  if (req.method === 'POST' && reqPath === '/login') {
    res.writeHead(302, { 'Location': '/dashboard' });
    return res.end();
  }

  // Route aliases
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  } else if (reqPath === '/dashboard' || reqPath === '/dashboard/') {
    reqPath = '/dashboard.html';
  } else if (reqPath === '/login') {
    reqPath = '/login.html';
  } else if (reqPath === '/tools/link' || reqPath === '/tools/link/') {
    reqPath = '/tools/link.html';
  } else if (reqPath === '/help') {
    reqPath = '/help.html';
  } else if (reqPath === '/terms') {
    reqPath = '/terms.html';
  } else if (reqPath === '/privacy') {
    reqPath = '/privacy.html';
  } else if (reqPath === '/refund') {
    reqPath = '/refund.html';
  } else if (['/community', '/finance', '/profile', '/notifications', '/analytics', '/check-in', '/flash-sale', '/saved', '/referrals'].includes(reqPath)) {
    const candidate = reqPath.replace('/', '') + '.html';
    if (fs.existsSync(path.join(baseDir, candidate))) {
      reqPath = '/' + candidate;
    }
  }

  let filePath = path.join(baseDir, reqPath);

  // If path doesn't have an extension and exists as .html
  if (!path.extname(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // 404
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 Not Found</h1><p><a href="/">Quay về trang chủ hoantien.shop</a></p>');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Server hoantien.shop Clone đang chạy tại:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`👉 http://localhost:${PORT}/dashboard (Tổng Quan)`);
  console.log(`👉 http://localhost:${PORT}/tools/link (Tạo Link Hoàn Tiền)`);
  console.log(`👉 http://localhost:${PORT}/login (Đăng Nhập)`);
  console.log(`Nhấn Ctrl+C để dừng server.\n`);
});
