import {
  formatNumber,
  toNumber
} from '../components/utils/xulynumber';

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);
const shortid = require("shortid");
// Set some defaults
db.defaults({
    donhang: [],
    khachhang: [],
    muahang: []
  })
  .write()

// Utils 


const muahangSampleData = [{
    "nhacungcap": "lam thai son",
    "ngaythangnam": "17/11/2019",
    "congtienhang": "5000000",
    "duno": "-4000000",
    "tratien": "1000000",
    "ghichu": "mang thieu tien",
    "ID": "o8eLmOIfqCYHh732wvYgUZ9oP1xXcf6C"
  },
  {
    "nhacungcap": "le van sinh",
    "ngaythangnam": "16/11/2019",
    "congtienhang": "4000000",
    "duno": "0",
    "tratien": "4000000",
    "ghichu": "test du lieu",
    "ID": "9d5fGc7YmHG77tALk0WYU4klc4Evwb9s"
  }
]
const getAllData = () => {
  return db.read().value();
};


const postLuuDonHang = (donhang) => {
  // Chung: 
  //  -- Xử lý mã số đơn hàng
  //  -- Lưu ngày lập đơn hàng bằng Lib Momentjs
  //  -- Chuyển dữ liệu số về type number

  // TH1: Tồn tại khách hàng 
  //    + Sử dụng lại "khachhangID", "tenkhachhang" trong đơn hàng -> lấy từ 
  //       khachhangData 
  let khachhangData = getKhachHang();
  if (khachhangData === null || khachhangData.length === 0) {
    console.log("chua co khach hang nay")
    addKhachHang({
      tenkhachhang: donhang.tenkhachhang,
      sodienthoai: donhang.sodienthoai,
      khachhangID: donhang.khachhangID
    })
  } else {
    let matched = khachhangData.filter(khachhang => khachhang.khachhangID === donhang.khachhangID);
    if (matched === null || matched.length === 0) {
      addKhachHang({
        tenkhachhang: donhang.tenkhachhang,
        sodienthoai: donhang.sodienthoai,
        khachhangID: donhang.khachhangID
      })
    }
  }

  // TH2: Không tồn tại khách hàng 
  db.get('donhang').push(donhang).write();
  return true;
}

// Khach hang
const getKhachHang = () => {
  let khachhangData = db.get('khachhang').value();

  return khachhangData;
}

const addKhachHang = (khachhangInfo) => {
  db.get('khachhang').push(khachhangInfo).write();
}


export {
  getAllData,
  postLuuDonHang,
  getKhachHang
};