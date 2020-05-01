import React from "react";

export default function Xuathoadon() {
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
            <button title="Lưu lại đơn hàng" className="ui button primary">
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
              title="Xóa bỏ đơn hàng vừa đặt
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
