### Todo list in this project

Thanh Toan page

- Tach navbar thanh component rieng

- Validate input value:
  -- Empty, string, number
  -- Handle việc user nhập 205,5 -> 205.500

-- Add checkbox for VAT -> default: false

-- Tạo một localStorage key="muaHangTrongNgay" để lưu tenkhachhang, khachhangid, masodonhang trong ngày
++ Sửa, xoá, update
++ Tạo mới cùng tên khách hàng -> mua 2 đơn hàng khác nhau trong ngày

### Fix bug

-- mã số đơn hàng render chưa đúng

### Production stage

- Remove react dev tools in public/electron.js
- Turn off auto open devtools

### Kinh nghiệm của bản thân khi làm việc với React functional component

- Truyền dữ liệu từ parent-fc sang children sử dụng props
- Children có thể setState cho parent thông qua function setState ở parent component
  => Ở parent truyền function setState sang Children. ex: setLoaiHangRender = {setLoaiHangRender}
  => setLoaiHangRender là tên của props, {setLoaiHangRender} chính là function setState mà chúng ta sử dụng
