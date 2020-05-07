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


const donhangSampleData = [{
    "duno": -1004800,
    "tenkhachhang": "lam thai son",
    "khachhangID": "1",
    "masodonhang": "010611",
    "ngaylapdonhang": "06/11/2019",
    "vat": true,
    "tongtien": 1004800,
    "thanhtoan": 0,
    "ngaygiao": "",
    "trangthaigiacong": false,
    "thongtindonhang": [{
      "masoloaithep": "T1",
      "loaihang": "Tấm - 8 ly : 500*1000",
      "dai": "",
      "day": "8",
      "donvitinh": "cai",
      "soluong": "2",
      "a": "500",
      "b": "1000",
      "c": "",
      "a1": "",
      "cong1": 16000,
      "cong2": 0,
      "cong3": 0,
      "dongia": 502400,
      "thanhtien": 1004800
    }]
  },
  {
    "duno": -30144,
    "tenkhachhang": "le van sinh",
    "khachhangID": "2",
    "masodonhang": "011311",
    "ngaylapdonhang": "13/11/2019",
    "tongtien": 30144,
    "thanhtoan": 0,
    "ngaygiao": "",
    "trangthaigiacong": false,
    "vat": false,
    "thongtindonhang": [{
        "masoloaithep": "T1",
        "loaihang": "Tấm - 8 ly : 80*100",
        "dai": "",
        "day": "8",
        "donvitinh": "cai",
        "soluong": "2",
        "a": "80",
        "b": "100",
        "c": "",
        "a1": "",
        "cong1": 15000,
        "cong2": null,
        "cong3": null,
        "dongia": 7536,
        "thanhtien": 15072
      },
      {
        "masoloaithep": "T1",
        "loaihang": "Tấm - 8 ly : 80*100",
        "dai": "",
        "day": "8",
        "donvitinh": "cai",
        "soluong": "2",
        "a": "80",
        "b": "100",
        "c": "",
        "a1": "",
        "cong1": 15000,
        "cong2": null,
        "cong3": null,
        "dongia": 7536,
        "thanhtien": 15072
      }
    ]
  },
  {
    "duno": -1004800,
    "tenkhachhang": "lam thai son",
    "khachhangID": "1",
    "masodonhang": "020711",
    "ngaylapdonhang": "07/11/2019",
    "vat": true,
    "tongtien": 1004800,
    "thanhtoan": 0,
    "ngaygiao": "",
    "trangthaigiacong": false,
    "thongtindonhang": [{
      "masoloaithep": "T1",
      "loaihang": "Tấm - 8 ly : 500*1000",
      "dai": "",
      "day": "8",
      "donvitinh": "cai",
      "soluong": "2",
      "a": "500",
      "b": "1000",
      "c": "",
      "a1": "",
      "cong1": 16000,
      "cong2": 0,
      "cong3": 0,
      "dongia": 502400,
      "thanhtien": 1004800
    }]
  }
]

const khachhangSampleData = [{
    "khachhangID": "1",
    "tenkhachhang": "lam thai son",
    "sodienthoai": "0938752570"
  },
  {
    "khachhangID": "2",
    "tenkhachhang": "le van sinh",
    "sodienthoai": "09123456"
  }
]

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

  // TH2: Không tồn tại khách hàng 
  db.get('donhang').push(donhang).write();
  return true;
}

// Khach hang
const getKhachHang = () => {
  let khachhangData = db.get('khachhang').value();
  return khachhangData;
}


export {
  getAllData,
  postLuuDonHang,
  getKhachHang
};