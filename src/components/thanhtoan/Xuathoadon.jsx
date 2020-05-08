import React from "react";
import { postLuuDonHang, getAllData } from "../../dataAPI/connectDB";
import { muaHangTrongNgay, removeTempData } from "../utils/localStorage";
import { luuMaSoDonHang, taoMaSoDonHang } from "../utils/masodonhang";

var moment = require("moment");
export default function Xuathoadon(props) {
  const luuDonHang = () => {
    let tongtien = document.querySelector("#thanhtien-render").innerText;
    let thanhtoan = document.querySelector("#thanhtoan-render").value;
    let duno = document.querySelector("#duno-render").innerText;
    let khachhangInfo = JSON.parse(localStorage.getItem("tempKhachHangInfo")); // {ten, khachhangID, sdt}
    // remove sodienthoai, ko can luu sdt vao donhang -> luu vao khachhang

    if (khachhangInfo === null) {
      alert("Thiếu tên khách hàng");
      return;
    }

    let masodonhang = document.querySelector("#don-hang-id").innerText;

    let ngaylapdonhang = moment().format("LLLL");
    let trangthaigiacong = false;
    let tatcadonhang = JSON.parse(localStorage.getItem("tempData"));
    if (tatcadonhang === null) {
      alert("Không thể lưu đơn hàng trống !");
      return;
    }
    let donhang = {
      duno,
      tongtien,
      thanhtoan,
      ...khachhangInfo,
      masodonhang,
      ngaylapdonhang,
      trangthaigiacong,
      thongtindonhang: tatcadonhang,
    };

    // Luu don hang vao database
    postLuuDonHang(donhang);
    // Luu thong tin khach mua hang trong ngay vao localStorage
    muaHangTrongNgay({
      tenkhachhang: khachhangInfo.tenkhachhang,
      khachhangID: khachhangInfo.khachhangID,
      masodonhang,
    });
    // Luu lai masodonhang va tang gia tri masodonhang +1
    luuMaSoDonHang(masodonhang);
    let newMaSoDonhang = taoMaSoDonHang();
    props.setMaSoDonHang(newMaSoDonhang);
    // Delete temp data on localStorage
    removeTempData();
    // Clear tenkhachhhang va sodienthoai sau khi luu du lieu xong
    clearThongTinChung();
  };

  const clearThongTinChung = () => {
    document.getElementById("tenkhachhang").value = "";
    document.getElementById("sodienthoai").value = "";
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="hoa-don">
            <button
              title="Lưu lại đơn hàng và In hóa đơn cho khách hàng"
              className="ui button primary"
              id="print-save"
            >
              Xuất và lưu hóa đơn
            </button>
            <button
              title="Lưu lại đơn hàng"
              className="ui button primary"
              onClick={luuDonHang}
            >
              Lưu đơn hàng
            </button>
            <button
              title="In hóa đơn cho khách hàng"
              className="ui button primary"
              id="print"
            >
              Xuất hóa đơn
            </button>
            <button
              title="Xóa bỏ đơn hàng vừa đặt.
                  Lưu ý: Không thể lấy lại được đơn hàng đã xóa!"
              className="ui button red"
            >
              Hủy đơn hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
