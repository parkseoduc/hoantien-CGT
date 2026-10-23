const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const baseDir = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  
  if (req.method === 'POST' && reqPath === '/login') {
    res.writeHead(302, { 'Location': '/tools/link' });
    return res.end();
  }

  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
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
  console.log(`👉 http://localhost:${PORT}/tools/link (Tạo Link Hoàn Tiền)`);
  console.log(`👉 http://localhost:${PORT}/login (Đăng Nhập)`);
  console.log(`👉 http://localhost:${PORT}/help (Trợ Giúp)`);
  console.log(`Nhấn Ctrl+C để dừng server.\n`);
});
