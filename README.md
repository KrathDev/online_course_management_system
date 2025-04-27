
# 📚 Hệ Thống Quản Lý Khóa Học Trực Tuyến

Một hệ thống backend để quản lý khóa học trực tuyến, được xây dựng bằng Node.js, Express, MongoDB (Mongoose), xác thực JWT và hỗ trợ thông báo theo thời gian thực.

---

## 🚀 Các Tính Năng

- **Xác thực & Phân quyền**
  - Đăng ký / Đăng nhập với JWT.
  - Quản lý quyền truy cập theo vai trò (Người dùng / Quản trị viên).

- **Quản lý Khóa Học**
  - Tạo, Đọc, Cập nhật, Xóa khóa học.
  - Tải lên hình ảnh đại diện cho khóa học.

- **Hệ Thống Đăng Ký Khóa Học**
  - Người dùng có thể đăng ký khóa học.
  - Ngăn chặn việc đăng ký trùng lặp.

- **Bình luận & Đánh giá**
  - Hệ thống bình luận cho mỗi khóa học.

- **Hệ Thống Thông Báo**
  - Nhận thông báo khi đăng ký khóa học thành công.

- **Bảng điều khiển Admin**
  - Xem thống kê (số lượng người dùng, khóa học, đăng ký).

- **Bảo mật & Tối ưu hóa**
  - Giới hạn tần suất, Helmet, bảo vệ chống XSS.
  - Xử lý lỗi và kiểm tra tính hợp lệ.

- **Kiểm tra & Triển khai**
  - Kiểm tra đơn vị và kiểm tra tích hợp.
  - Sẵn sàng cho triển khai với Docker.

---

## 🛠️ Công Nghệ Sử Dụng

- **Backend:** Node.js, Express.js
- **Cơ sở dữ liệu:** MongoDB với Mongoose
- **Xác thực:** JWT, Bcrypt
- **Realtime:** Socket.IO (cho thông báo)
- **Caching:** Redis (tùy chọn, cho tăng tốc độ)
- **Kiểm tra:** Jest, Supertest
- **Triển khai:** Docker, Render / Heroku / VPS

---

## 📂 Cấu Trúc Dự Án

```bash
src/
  ├── config/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middlewares/
  ├── services/
  ├── sockets/
  ├── utils/
      app.js
public/
tests/
.env
package.json
README.md
```

---

## ⚙️ Biến Môi Trường

Tạo file `.env` với các khóa sau:

```env
PORT=5000
MONGODB_URI=chuoi_ket_noi_mongodb_cua_ban
JWT_SECRET=ma_bao_mat_cua_ban
REDIS_URL=dia_chi_redis_cua_ban (tùy chọn)
```

---

## 🛠️ Cài Đặt

```bash
# Clone repository
git clone https://github.com/yourusername/online-course-management.git

# Di chuyển vào thư mục dự án
cd online-course-management

# Cài đặt các phụ thuộc
npm install

# Chạy server phát triển
npm run dev
```

---

## 📈 Tài Liệu API

### 1. 🧩 Các API Xác Thực

| Phương thức | Endpoint | Mô tả | Quyền truy cập |
|:---|:---|:---|:---|
| `POST` | `/api/auth/register` | Đăng ký người dùng mới | Công cộng |
| `POST` | `/api/auth/login` | Đăng nhập và nhận JWT token | Công cộng |
| `GET` | `/api/auth/me` | Lấy thông tin người dùng hiện tại | Người dùng / Quản trị viên |

---

### 2. 📦 Các API Quản Lý Khóa Học

| Phương thức | Endpoint | Mô tả | Quyền truy cập |
|:---|:---|:---|:---|
| `POST` | `/api/courses` | Tạo khóa học mới | Quản trị viên |
| `GET` | `/api/courses` | Lấy danh sách các khóa học (phân trang, tìm kiếm) | Công cộng |
| `GET` | `/api/courses/:id` | Lấy thông tin chi tiết của một khóa học | Công cộng |
| `PUT` | `/api/courses/:id` | Cập nhật thông tin khóa học | Quản trị viên |
| `DELETE` | `/api/courses/:id` | Xóa khóa học | Quản trị viên |

---

### 3. 🎓 Các API Đăng Ký Khóa Học

| Phương thức | Endpoint | Mô tả | Quyền truy cập |
|:---|:---|:---|:---|
| `POST` | `/api/enrollments` | Đăng ký tham gia khóa học (Body: courseId) | Người dùng |
| `GET` | `/api/enrollments/my-courses` | Xem danh sách khóa học đã đăng ký | Người dùng |
| `GET` | `/api/enrollments/course/:courseId` | Xem danh sách người dùng đã đăng ký khóa học | Quản trị viên |

---

### 4. 💬 Các API Bình Luận

| Phương thức | Endpoint | Mô tả | Quyền truy cập |
|:---|:---|:---|:---|
| `POST` | `/api/comments` | Viết bình luận cho khóa học (Body: courseId, content) | Người dùng |
| `GET` | `/api/comments/:courseId` | Lấy danh sách bình luận của một khóa học | Công cộng |
| `DELETE` | `/api/comments/:id` | Xóa bình luận (chỉ có tác giả hoặc quản trị viên mới xóa được) | Người dùng / Quản trị viên |

---

### 5. 🔔 Các API Thông Báo

| Phương thức | Endpoint | Mô tả | Quyền truy cập |
|:---|:---|:---|:---|
| `GET` | `/api/notifications` | Lấy danh sách thông báo của người dùng | Người dùng |
| `PUT` | `/api/notifications/:id/read` | Đánh dấu thông báo là đã đọc | Người dùng |

---

### 6. 📊 Các API Bảng Điều Khiển Admin

| Phương thức | Endpoint | Mô tả | Quyền truy cập |
|:---|:---|:---|:---|
| `GET` | `/api/admin/statistics` | Lấy thống kê về người dùng, khóa học, đăng ký | Quản trị viên |
| `GET` | `/api/admin/users` | Lấy danh sách người dùng (phân trang) | Quản trị viên |

---

### 📌 Lưu Ý Thêm:
- Các API `POST/PUT/DELETE` yêu cầu **JWT Authentication** (Header: `Authorization: Bearer <token>`).
- Các API của Quản trị viên yêu cầu middleware kiểm tra `role === admin`.
- Các API công cộng (ví dụ: `GET /api/courses`) không yêu cầu đăng nhập.

---

### 🔥 Ví Dụ Yêu Cầu (Đăng Ký Khóa Học)

**Yêu cầu:**
```http
POST /api/enrollments
Headers:
  Authorization: Bearer <jwt_token>

Body:
{
  "courseId": "6618b5cfa3434c9ef0a71c23"
}
```

**Phản hồi:**
```json
{
  "message": "Đã đăng ký khóa học thành công!",
  "enrollmentId": "6618b987a3434c9ef0a71d98"
}
```

---

## 📈 Các Việc Cần Làm

- [ ] Xây dựng các API RESTful cho khóa học và đăng ký
- [ ] Triển khai hệ thống bình luận & thông báo
- [ ] Thêm thông báo theo thời gian thực với Socket.IO
- [ ] Viết các bài kiểm tra đơn vị và kiểm tra tích hợp
- [ ] Triển khai ứng dụng với Docker

---

## 📬 Liên Hệ

Dự án được tạo bởi [Tên của bạn] — vui lòng liên hệ với tôi nếu cần thêm thông tin!

---

> 🔥 Dự án này là một cách tuyệt vời để làm chủ phát triển backend với Node.js bằng cách xây dựng một ứng dụng thực tế!
