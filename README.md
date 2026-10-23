# hoantien.shop — Hoàn tiền Shopee đến 70% mỗi đơn hàng (Clone Pixel-Perfect)

Dự án tái lập giao diện và toàn bộ luồng tương tác của **hoantien.shop** — nền tảng hoàn tiền Shopee, ShopeeFood, TikTok Shop và Tiki hàng đầu với giao diện hiện đại, chuẩn Tailwind CSS và font chữ Lexend / JetBrains Mono.

---

## 🌟 Tính năng nổi bật

1. **Giao diện chuẩn Pixel-Perfect 100%**:
   - Khung màu chủ đạo: Shopee Vermilion `#ee4d2d` (sáng) & `#ff664b` (tối).
   - Tối ưu hóa typography với bộ đôi font **Lexend** (hyper-legible) và **JetBrains Mono** (mã số, số tiền).
   - Hệ thống chuyển đổi **Dark / Light Mode** mượt mà, lưu trạng thái tự động vào `localStorage`.

2. **Trang chủ (`/`)**:
   - Hero banner với huy hiệu *Cashback Shopee chính thức*.
   - Khung mô phỏng Ví hoàn tiền: số dư khả dụng `2.847.300₫`, đang chờ `312.000₫`, hạng `GOLD · 70%`.
   - Đối tác Shopee Affiliate, rút về ngân hàng VN, tự động real-time.
   - Danh sách 6 tính năng cốt lõi (`#features`).
   - 4 bước nhận hoàn tiền siêu nhanh (`#how`).
   - Bảng 4 cấp bậc hoàn tiền (`#rates`): Thành viên (50%), Bạc (55%), Vàng (65%), Kim Cương (70%).
   - Accordion câu hỏi thường gặp FAQ (`#faq`) dạng native details/summary mượt mà.

3. **Công cụ Tạo Link Hoàn Tiền (`/tools/link`)**:
   - Thanh điều hướng Sidebar ứng dụng (Tổng quan, Tạo link, Săn Deal, Tài chính, Hồ sơ, Thống kê, v.v.).
   - Hỗ trợ đa sàn thương mại điện tử: **Shopee, ShopeeFood, TikTok Shop, Tiki**.
   - Trình dán link từ clipboard thông minh.
   - Tính toán hoa hồng tức thời theo tỷ lệ hạng GOLD (70%).
   - Sao chép link tiếp thị và nút mở sàn mua sắm trực tiếp.

4. **Hệ thống các trang phụ trợ & chính sách**:
   - [`/login`](/login): Cổng đăng nhập với tài khoản Google, tải ứng dụng App Store & Google Play.
   - [`/help`](/help): Trung tâm trợ giúp và cẩm nang 7 bước mua sắm hoàn tiền.
   - [`/terms`](/terms): Điều khoản sử dụng dịch vụ.
   - [`/privacy`](/privacy): Chính sách quyền riêng tư và bảo mật dữ liệu.
   - [`/refund`](/refund): Quy định và chính sách chi trả hoàn tiền.

---

## 🚀 Khởi chạy dự án

Dự án chạy thuần với **Node.js** (không cần cài đặt thư viện nặng qua npm, zero dependency):

```bash
# Di chuyển vào thư mục dự án
cd hoantien-clone

# Chạy server
node server.js
```

Sau đó mở trình duyệt truy cập:
- Trang chủ: [http://localhost:3001](http://localhost:3001)
- Tạo link hoàn tiền: [http://localhost:3001/tools/link](http://localhost:3001/tools/link)
- Đăng nhập: [http://localhost:3001/login](http://localhost:3001/login)
- Trợ giúp: [http://localhost:3001/help](http://localhost:3001/help)
