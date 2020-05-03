### Todo list in this project

Thanh Toan page

- Tach navbar thanh component rieng

- Validate input value:
  -- Empty, string, number
  -- Handle việc user nhập 205,5 -> 205.500

### Production stage

- Remove react dev tools in public/electron.js
- Turn off auto open devtools

### Kinh nghiệm của bản thân khi làm việc với React functional component

- Truyền dữ liệu từ parent-fc sang children sử dụng props
- Children có thể setState cho parent thông qua function setState ở parent component
  => Ở parent truyền function setState sang Children. ex: setLoaiHangRender = {setLoaiHangRender}
  => setLoaiHangRender là tên của props, {setLoaiHangRender} chính là function setState mà chúng ta sử dụng
