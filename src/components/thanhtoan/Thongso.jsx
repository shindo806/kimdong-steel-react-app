import React, { useEffect, useState } from "react";

import * as congthuc from "../utils/tinhtien";

import * as getDomIDElement from "../utils/getDomElement";
import xuLyTieuDeLoaiThep from "../utils/xulytieudeloaithep";

export default function Thongso(props) {
  // props.loaihangRender - initial = []
  const [thongso, setThongSo] = useState([]);
  const [state, setState] = useState({
    dai: "",
    day: "",
    donvitinh: "",
    a: "",
    b: "",
    c: "",
    a1: "",
    cong1: 0,
    cong2: 0,
    cong3: 0,
  });
  const [tinhtien, setTinhTien] = useState({
    dongia: 0,
    soluong: 0,
    thanhtien: 0,
  });

  let loaithep = [];
  const handleLoaiHangChange = (loaihang) => {
    switch (loaihang) {
      case "T1":
        loaithep = ["a", "b"];
        break;
      case "T2":
        loaithep = ["a", "b", "c"];
        break;
      case "T3":
        loaithep = ["a", "b", "c"];
        break;
      case "T4":
        loaithep = ["a", "b", "c"];
        break;
      case "T5":
        loaithep = ["a"];
        break;
      case "T6":
        loaithep = ["a", "b"];
        break;
      case "T7":
        loaithep = ["a", "b"];
        break;
      case "T8":
        loaithep = ["a", "b", "c", "q", "a1"];
        break;
      case "C1":
        loaithep = ["a", "b", "c", "q"];
        break;
      case "C2":
        loaithep = ["a", "b", "q"];
        break;
      case "C3":
        loaithep = ["a", "b", "q"];
        break;
      case "C4":
        loaithep = ["a", "b", "q", "a1"];
        break;
      case "C5":
        loaithep = ["a", "b", "q", "c"];
        break;
      case "C6":
        loaithep = ["a", "b", "q", "c"];
        break;
      case "C7":
        loaithep = ["a", "b", "q", "c", "a1"];
        break;
      case "Cu1":
        loaithep = ["a", "q"];
        break;
      case "Cu2":
        loaithep = ["a", "b", "q"];
        break;
      case "Cu3":
        loaithep = ["a", "b", "q", "a1", "c"];
        break;
      case "CNC1":
        loaithep = ["a", "b"];
        break;
      case "CNC2":
        loaithep = ["a", "b"];
        break;
      case "CNC3":
        loaithep = ["a", "b"];
        break;
      default:
        loaithep = [];
        break;
    }
    return loaithep;
  };

  // Set UI sau moi lan user doi loai thep
  useEffect(() => {
    // Set tựa đề cho thanh Thông số loại hàng id: thong-so-title

    let newThongSo = handleLoaiHangChange(props.loaihangRender);
    setThongSo(newThongSo);
    // Reset input field ve default
    setState({
      dai: "",
      day: "",
      donvitinh: "",
      a: "",
      b: "",
      c: "",
      a1: "",
      cong1: "",
      cong2: "",
      cong3: "",
    });
    setTinhTien({
      dongia: 0,
      soluong: 0,
      thanhtien: 0,
    });
  }, [props.loaihangRender]);

  // Handle input value change
  const handleInputChange = (elementID) => {
    let domElementValue = document.querySelector(`#${elementID}`).value;
    // Make a copy of prev state
    let newState = { ...state };
    newState[`${elementID}`] = domElementValue;
    // Kiểm tra công 1 - 2 - 3 value === '' => set về 0
    let cong1 = getDomIDElement.getDomIdElement("cong1").value;
    let cong2 = getDomIDElement.getDomIdElement("cong2").value;
    let cong3 = getDomIDElement.getDomIdElement("cong3").value;
    if (cong1 === "") cong1 = 0;
    if (cong2 === "") cong2 = 0;
    if (cong3 === "") cong3 = 0;
    // Update with newState and exact key - value
    setState({
      ...newState,
      cong1,
      cong2,
      cong3,
    });
    // Truyền state vào cho function xử lý tiêu đề
    xuLyTieuDeLoaiThep(props.loaihangRender, state);

    // Tinh tien
    let dongia = congthuc.tinhdongia(props.loaihangRender, state);
    if (isNaN(dongia)) {
      setTinhTien((prev) => ({
        ...prev,
        dongia: 0,
      }));
      return;
    }
    // Set state cho tính tiền: đơn giá, thành tiền, số lượng
    let thanhtien = congthuc.tinhthanhtien(dongia, tinhtien.soluong);
    setTinhTien((prev) => ({
      ...prev,
      dongia,
      thanhtien,
    }));
  };

  const handleTinhTien = (inputType) => {
    let inputValue = getDomIDElement.getDomIdElement(inputType).value;

    if (inputType === "thanhtien") return;
    if (inputType === "dongia") {
      if ((inputValue === "") | (inputValue === 0)) {
        setTinhTien((prev) => ({
          ...prev,
          dongia: 0,
          thanhtien: 0,
        }));
        return;
      } else {
        let thanhtien = congthuc.tinhthanhtien(inputValue, tinhtien.soluong);
        setTinhTien((prev) => ({
          ...prev,
          dongia: parseInt(inputValue),
          thanhtien: thanhtien,
        }));
        return;
      }
    }
    if (inputType === "soluong") {
      if (inputValue === "") {
        setTinhTien((prev) => ({
          ...prev,
          soluong: 0,
          thanhtien: 0,
        }));
        return;
      } else {
        let thanhtien = congthuc.tinhthanhtien(tinhtien.dongia, inputValue);
        setTinhTien((prev) => ({
          ...prev,
          soluong: parseInt(inputValue),
          thanhtien: thanhtien,
        }));
      }
    }
  };

  const handleFocus = (event) => {
    event.target.select();
  };

  return (
    <>
      <div
        id="thong-so"
        className={thongso.length === 0 ? "close" : "thong-so"}
      >
        <div id="thong-so-title" className="thong-so-title">
          Thông số loại hàng:
        </div>
        <div className="ui form thong-so-1">
          <div className="fields">
            <div
              className={thongso.includes("q") ? "field chieu-dai" : "close"}
            >
              <label>Chiều dài - q</label>
              <input
                value={state.dai}
                id="dai"
                type="text"
                placeholder="Chiều dài"
                onChange={() => handleInputChange("dai")}
                onKeyUp={() => handleInputChange("dai")}
                onFocus={handleFocus}
              />
            </div>
            <div className="field">
              <label>Độ dày - m</label>
              <input
                value={state.day}
                id="day"
                type="text"
                placeholder="Độ dày"
                onChange={() => handleInputChange("day")}
                onKeyUp={() => handleInputChange("day")}
                onFocus={handleFocus}
              />
            </div>
            <div className="field">
              <label>Đơn vị tính</label>
              <input
                value={state.donvitinh}
                id="donvitinh"
                type="text"
                placeholder="Đơn vị tính"
                onChange={() => handleInputChange("donvitinh")}
                onFocus={handleFocus}
              />
            </div>
          </div>
        </div>
        <div className="ui form thong-so-2">
          <div className="fields">
            <div className="field a">
              <label>a</label>
              <input
                value={state.a}
                id="a"
                type="text"
                placeholder="Cạnh a"
                onChange={() => handleInputChange("a")}
                onKeyUp={() => handleInputChange("a")}
                onFocus={handleFocus}
              />
            </div>
            <div className={thongso.includes("b") ? "field b" : "close"}>
              <label>b</label>
              <input
                value={state.b}
                id="b"
                type="text"
                placeholder="Cạnh b"
                onChange={() => handleInputChange("b")}
                onKeyUp={() => handleInputChange("b")}
              />
            </div>
            <div className={thongso.includes("c") ? "field c" : "close"}>
              <label>c</label>
              <input
                value={state.c}
                id="c"
                type="text"
                placeholder="Cạnh c"
                onChange={() => handleInputChange("c")}
                onKeyUp={() => handleInputChange("c")}
                onFocus={handleFocus}
              />
            </div>
            <div className={thongso.includes("a1") ? "field a1" : "close"}>
              <label>a1</label>
              <input
                value={state.a1}
                id="a1"
                type="text"
                placeholder="Cạnh a1"
                onChange={() => handleInputChange("a1")}
                onKeyUp={() => handleInputChange("a1")}
                onFocus={handleFocus}
              />
            </div>
          </div>
        </div>
        <div className="ui form thong-so-4">
          <div className="fields">
            <div className="field">
              <label>Công 1</label>
              <input
                value={state.cong1}
                onChange={() => handleInputChange("cong1")}
                onFocus={handleFocus}
                id="cong1"
                type="text"
                placeholder="Công 1"
              />
            </div>
            <div className="field">
              <label>Công 2</label>
              <input
                value={state.cong2}
                onChange={() => handleInputChange("cong2")}
                onFocus={handleFocus}
                id="cong2"
                type="text"
                placeholder="Công 2"
              />
            </div>
            <div className="field">
              <label>Công 3</label>
              <input
                value={state.cong3}
                onChange={() => handleInputChange("cong3")}
                onFocus={handleFocus}
                id="cong3"
                type="text"
                placeholder="Công 3"
              />
            </div>
          </div>
        </div>
        <div className="ui form thong-so-5">
          <div className="fields">
            <div className="field">
              <label>Đơn giá</label>
              <input
                value={tinhtien.dongia}
                onChange={() => handleTinhTien("dongia")}
                onFocus={handleFocus}
                id="dongia"
                type="text"
                placeholder="Đơn giá"
              />
            </div>
            <div className="field">
              <label>Số lượng</label>
              <input
                value={tinhtien.soluong}
                onChange={() => handleTinhTien("soluong")}
                onKeyUp={() => handleTinhTien("soluong")}
                onFocus={handleFocus}
                id="soluong"
                type="text"
                placeholder="Số lượng"
              />
            </div>
            <div className="field">
              <label>Thành tiền</label>
              <input
                value={tinhtien.thanhtien}
                onChange={() => handleTinhTien("thanhtien")}
                id="thanhtien"
                type="text"
                placeholder="Thành tiền"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
