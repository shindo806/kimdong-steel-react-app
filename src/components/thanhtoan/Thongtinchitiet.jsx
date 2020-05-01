import React from "react";

export default function Thongtinchitiet() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="table-wrapper don-hang">
            <table className="table" id="table">
              <thead>
                <tr className="table-head">
                  <th className="table-cell align-center th-stt">STT</th>
                  <th className="table-cell align-center th-loaihang">
                    Loại hàng
                  </th>
                  <th className="table-cell align-center th-doday">Độ dày</th>
                  <th className="table-cell align-center th-doday">ĐVT</th>
                  <th className="table-cell align-center th-soluong">SL</th>
                  <th className="table-cell align-center th-dongia">Đơn giá</th>
                  <th className="table-cell align-center th-thanhtien">
                    Thành tiền
                  </th>
                </tr>
              </thead>
              {/* Render data here */}
              <tbody>
                <tr className="table-row" data-key={1}>
                  <td className="table-cell align-center">1</td>
                  <td className="table-cell align-left">
                    Tấm - 8 ly : 500*1000
                  </td>
                  <td className="table-cell align-center">8</td>
                  <td className="table-cell align-center">Cái</td>
                  <td className="table-cell align-center">10</td>
                  <td className="table-cell align-right">100.000</td>
                  <td className="table-cell align-right">1.000.000</td>
                </tr>
                <tr className="table-row">
                  <td colSpan={6} className="table-cell align-center">
                    Tổng
                  </td>
                  <td
                    colSpan={1}
                    className="table-cell align-right"
                    id="thanhtien-render"
                  >
                    1.000.000.000
                  </td>
                </tr>
                <tr className="table=row">
                  <td colSpan={6} className="table-cell align-center">
                    Thanh toán
                  </td>
                  <td className="table-cell" colSpan={1}>
                    <input id="thanhtoan-render" type="text" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={6} className="table-cell align-center">
                    Dư nợ
                  </td>
                  <td className="table-cell" colSpan={1}>
                    <input
                      defaultValue="1.000.000"
                      id="duno-render"
                      type="text"
                      disabled
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="ngay-giao autocomplete">
            <label>Ngày giao:</label>
            <input
              id="delivery-date"
              type="text"
              placeholder="Nhập ngày giao"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="cong-no">
            <p>Công nợ:</p>
            <span id="cong-no">1.000.000.000</span>
          </div>
        </div>
      </div>
    </>
  );
}
