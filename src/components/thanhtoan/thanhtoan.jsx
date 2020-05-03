import React, { useState, useEffect } from "react";

import logo from "../../assets/images/logo.svg";
import Thongtinchung from "./Thongtinchung";
import Thongtinchitiet from "./Thongtinchitiet";
import Xuathoadon from "./Xuathoadon";
import Loaihang from "./Loaihang";
import Thongso from "./Thongso";

require("./thanhtoan.css");

export default function thanhtoan(props) {
  const [loaihangRender, setLoaiHangRender] = useState("default"); // State quản lý việc user chọn loaị hàng => render component thông số
  const [isAddItem, setIsAddItem] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <section className="top-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="nav-bar">
              <div className="col-lg-4 col-md-4">
                <a href="#" className="logo">
                  <img src={logo} alt="logo" />
                </a>
                <a href="#" className="logo-title">
                  THEP KIM DONG
                </a>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="nav-links">
                  <ul>
                    <li>
                      <a href="#" className="active">
                        <svg
                          className="svg-inline--fa fa-home fa-w-18"
                          viewBox="0 0 576 512"
                        >
                          <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                        </svg>
                        <span>Thanh toán</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          className="svg-inline--fa fa-archive fa-w-16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
                        </svg>
                        <span>Quản lý đơn hàng</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="fas fa-wallet" viewBox="0 0 512 512">
                          <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
                        </svg>
                        <span>Công nợ</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          className="fas fa-cart-arrow-down"
                          viewBox="0 0 576 512"
                        >
                          <path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z" />
                        </svg>
                        <span>Mua hàng</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* header*/}
      <div className="main-panel" style={{ padding: "20px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              {/* left-panel*/}
              <div className="left-panel" id="left-panel">
                <div className="main-content">
                  {/* Thông tin chung của khách mua hàng: Tên, sdt, mã số đơn hàng trong ngày, ngày mua hàng */}
                  <Thongtinchung />
                  {/* Thông tin chi tiết của đơn hàng theo khách hàng xác định */}
                  <Thongtinchitiet
                    isAddItem={isAddItem}
                    setIsAddItem={setIsAddItem}
                  />
                </div>
                {/* Xuất hoá đơn - Lưu đơn hàng */}
                <Xuathoadon />
              </div>
            </div>
            {/* Right panel */}
            <div className="col-lg-4 col-md-4">
              <div className="right-panel">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <span
                      style={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "1.2rem",
                      }}
                    >
                      Nhập đơn hàng
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="nhap-don-hang">
                      {/* Select loại hàng */}
                      <Loaihang
                        loaihangRender={loaihangRender}
                        setLoaiHangRender={setLoaiHangRender}
                      />
                      {/* Nhập thông số loại hàng */}
                      <Thongso
                        loaihangRender={loaihangRender}
                        setLoaiHangRender={setLoaiHangRender}
                        setIsAddItem={setIsAddItem}
                      />
                      {/* Thêm - Sửa */}

                      <div
                        id="saveEditItem"
                        className="save-edit-item visible"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of right-panel*/}
        </div>
      </div>
    </div>
  );
}
