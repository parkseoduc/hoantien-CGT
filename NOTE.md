# BẢNG TỔNG HỢP CÁC TÍNH NĂNG & THÀNH PHẦN CẦN BỔ SUNG
*(Tài liệu ghi chú các phần không thể cào trực tiếp qua Web Frontend, thuộc về Native Mobile App & Backend API)*

---

## 📱 1. Các Tính Năng Riêng Biệt Trên Ứng Dụng Di Động (Mobile App)

Trong các ấn phẩm truyền thông và Mockup điện thoại của **hoantien.shop** (như màn hình **Điểm Danh & Quà Tặng** trên iPhone), có những tính năng được thiết kế riêng cho Mobile App (iOS / Android) mà bản Web cơ bản chưa có:

### A. Hệ thống Gamification: Điểm Danh & Xèng Thưởng (Xèng của bạn)
* **Ví Xèng độc lập:**
  - Hiển thị số dư: `4.820 🪙` (Xèng).
  - Tích luỹ: `6.140 🪙` | Đã đổi: `1.320 🪙`.
  - Tính năng `Đổi sang tiền →`: Quy đổi tỷ lệ Xèng sang tiền mặt cộng thẳng vào ví rút tiền Shopee.
* **Chuỗi điểm danh liên hoàn (Streak 7 ngày & Long streak):**
  - Huy hiệu: `🔥 24 ngày chuỗi điểm danh`.
  - Tiến trình 7 ngày nhận thưởng:
    - Ngày 1 đến Ngày 5: `+1 Xèng` mỗi ngày (đã hoàn thành `✓`).
    - Ngày 6 & 7: Rương quà bí mật `+5 Xèng`.
* **Bảng Vàng Điểm Danh (Leaderboard Top Streak):**
  - Thưởng điểm danh sớm trong ngày: Top 3 người điểm danh đầu tiên nhận thêm `+3 Xèng` / `+2 Xèng`.
  - Xếp hạng toàn hệ thống:
    - `#1` Nguyễn Minh Anh (96 ngày).
    - `#2` Trần Quốc Bảo (71 ngày).
    - `#3` Lê Thu Hà (58 ngày).
    - `#4` Ngô Hải Vân *(Vị trí của bạn - 24 ngày)*.
    - `#5` Phạm Gia Hân (19 ngày).
* **Thanh điều hướng Mobile App (Bottom Navigation):**
  - `Dashboard` | `Link` | `Đơn hàng` | `Tài chính` | `Khác`.

---

## ⚙️ 2. Các Dịch Vụ Backend & API Cần Tích Hợp (Phía Máy Chủ)

Các dữ liệu động không thể lấy qua giao diện HTML tĩnh và cần lập trình Backend:

### A. Shopee Affiliate Open API (Tiếp thị liên kết Shopee)
* **Tự động chuyển đổi link:**
  - Nhận link sản phẩm gốc từ người dùng $\rightarrow$ Gọi API Shopee để gắn `sub_id` (ID người dùng) và sinh link affiliate `s.shopee.vn`.
* **Webhook lắng nghe đơn hàng Real-time:**
  - Khi người dùng mua hàng thành công, Shopee gửi Webhook báo trạng thái đơn: `Chờ duyệt` $\rightarrow$ `Đã giao` $\rightarrow$ `Hoàn thành` $\rightarrow$ Tính toán hoa hồng và bắn tiền về ví.

### B. Hệ thống Xác thực Tài khoản (Authentication)
* **Google OAuth 2.0:**
  - Đăng ký `Client ID` & `Client Secret` trên Google Cloud Console để người dùng đăng nhập bằng tài khoản Gmail thật.
* **JWT Session / Cookie an toàn:**
  - Quản lý phiên đăng nhập và bảo mật ví tiền.

### C. Cổng Rút Tiền Ngân Hàng Tự Động (Payout Gateway)
* **VietQR / Napas 247:**
  - Tích hợp API ngân hàng (hoặc qua các cổng trung gian như SePay, Casso, MBBank Open API) để khi người dùng bấm `Rút tiền`, tiền được chuyển thẳng về STK ngân hàng nội địa trong 30 giây.

### D. Cơ Sở Dữ Liệu (Database Schema)
* Bảng `users`: Lưu thông tin thành viên, hạng (Đồng, Bạc, Vàng, Kim Cương), STK ngân hàng.
* Bảng `orders`: Lưu mã đơn Shopee, giá trị đơn, % hoa hồng, số tiền hoàn, trạng thái duyệt.
* Bảng `checkins`: Lưu lịch sử điểm danh hàng ngày, chuỗi ngày liên tiếp, số xèng tích lũy.
* Bảng `withdrawals`: Lịch sử các lệnh rút tiền về tài khoản ngân hàng.

---

## 🎨 3. Mockup & Tài Nguyên Đồ Họa Cần Thiết Kế Thêm

* **Asset bộ icon 3D Coin & Rương Quà:**
  - Icon đồng xu xèng `🪙` màu cam đỏ gradient.
  - Hộp quà điểm danh có nơ đỏ và hiệu ứng mở rương.
* **Hình ảnh đại diện bài đăng Bảng Tin (Săn Deal):**
  - Ảnh đại diện nhân vật `Cú Soi Giá` 🦉, `Heo Thần Tài` 🐶.
  - Ảnh thực tế của các sản phẩm Flash Sale và Deal Sốc.
