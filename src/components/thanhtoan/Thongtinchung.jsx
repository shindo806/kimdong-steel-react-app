import React from "react";

export default function Thongtinchung() {
  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <div className="title-col-1">
            <p>phiếu giao hàng</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="title-col-2">
            <div className="title-info-row">
              <p>Ngày:</p>
              <span id="new-date" />
            </div>
            <div className="title-info-row">
              <p>Mã số đơn hàng:</p>
              <span id="don-hang-id" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Khach hang */}
        <div className="col-lg-6 col-md-6">
          <div className="ten-khach-hang">
            <form autoComplete="off">
              <div className="autocomplete">
                <label>Khách hàng:</label>
                <input id="tenkhachhang" type="text" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="so-dien-thoai">
            <div className="autocomplete">
              <label>Điện thoại:</label>
              <input id="phone-number" type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
