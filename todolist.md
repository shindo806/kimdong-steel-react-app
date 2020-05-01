### Todo list in this project

Thanh Toan page

- Viet function render loai hang (select)
  -- Phần render component Thông số
  => sử dụng const [thongso, setThongSo] = useState('default')
  => useEffect (instead of componentDidMout or componentDidUpdate) -> setThongSo
  => Create a function to handle className for every field
  in thongso fields
- Tach navbar thanh component rieng

### Kinh nghiệm của bản thân khi làm việc với React functional component

- Truyền dữ liệu từ parent-fc sang children sử dụng props
- Children có thể setState cho parent thông qua function setState ở parent component
  => Ở parent truyền function setState sang Children. ex: setLoaiHangRender = {setLoaiHangRender}
  => setLoaiHangRender là tên của props, {setLoaiHangRender} chính là function setState mà chúng ta sử dụng
