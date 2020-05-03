function luuDuLieuTamThoi(donhang) {
  // thongso: Object {a, b, c, a1, m, }
  // tinhtien: Object {dongia, soluong, thanhtien}
  let initialData = localStorage.getItem('tempData') ? JSON.parse(localStorage.getItem('tempData')) : [];

  initialData.push(donhang);
  localStorage.setItem('tempData', JSON.stringify(initialData));
  return true;
}

export default luuDuLieuTamThoi;