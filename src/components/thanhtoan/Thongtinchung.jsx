import React, { useState, useEffect } from "react";
import shortid from "shortid";
import Autosuggest from "react-autosuggest";

import { initialMaSoDonHang } from "../utils/masodonhang";
import { taoNgayLapDonHang } from "../utils/taoNgayLapDonHang";
import { setTempKhachHangInfo } from "../utils/localStorage";

export default function Thongtinchung(props) {
  const [ngaylapdonhang, setNgayLapDonHang] = useState(() =>
    taoNgayLapDonHang()
  );
  const [masodonhang, setMaSoDonHang] = useState(() => props.masodonhang);
  useEffect(() => {
    setValue("");
    setSodienthoai("");
  }, [props.masodonhang]);
  useEffect(() => {
    setMaSoDonHang(props.masodonhang);
  }, [props.masodonhang]);
  const [value, setValue] = useState("");
  const [sdt, setSodienthoai] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [khachhangs, setKhachHangs] = useState(() =>
    localStorage.getItem("khachhangData")
      ? JSON.parse(localStorage.getItem("khachhangData"))
      : []
  );

  const onChange = (event, { newValue, method }) => {
    setValue(newValue);
  };
  const handleTenKhachHang = (tenkhachhang) => {
    if (tenkhachhang === "") {
      setSodienthoai("");
      localStorage.removeItem("tempKhachHangInfo");
      return;
    }
    let matched = khachhangs.filter(
      (khachhang) => khachhang.tenkhachhang === tenkhachhang
    );
    if (matched.length === 0) {
      setSodienthoai("");
      setTempKhachHangInfo({
        tenkhachhang: value,
        sodienthoai: sdt,
        khachhangID: shortid.generate(),
      });
      return;
    }
    // Tim duoc user => set Sodienthoai
    setSodienthoai(matched[0].sodienthoai);
    setTempKhachHangInfo({
      tenkhachhang: matched[0].tenkhachhang,
      sodienthoai: matched[0].sodienthoai,
      khachhangID: matched[0].khachhangID,
    });
  };
  const onHandleTenKhachHangPress = (event) => {
    if (event.key === "Tab" || event.key === "Enter") {
      handleTenKhachHang(value);
    } else if (event.key === "Backspace") {
      handleTenKhachHang("");
    }
  };

  const onHandleTenKhachHangBlur = (event) => {
    handleTenKhachHang(value);
  };
  const inputTenKhachHangProps = {
    id: "tenkhachhang",
    value,
    onChange,
    onKeyDown: onHandleTenKhachHangPress,
    onBlur: onHandleTenKhachHangBlur,
  };
  const handleSodienthoai = (sodienthoai) => {
    let matched = khachhangs.filter(
      (khachhang) => khachhang.sodienthoai === sodienthoai
    );
    if (matched.length === 0) {
      setTempKhachHangInfo({
        tenkhachhang: value,
        sodienthoai: sdt,
        khachhangID: shortid.generate(),
      });
      return;
    } else {
      setValue(matched[0].tenkhachhang);
      setTempKhachHangInfo({
        tenkhachhang: matched[0].tenkhachhang,
        sodienthoai: matched[0].sodienthoai,
        khachhangID: matched[0].khachhangID,
      });
    }
  };

  const onHandleSdtChange = (e) => {
    setSodienthoai(e.target.value);
  };
  const onHandleSdtPress = (e) => {
    if (e.key === "Tab" || e.key === "Enter") {
      handleSodienthoai(sdt);
    }
    return;
  };
  const onHandleSdtBlur = (e) => {
    handleSodienthoai(sdt);
  };
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    return khachhangs.filter((khachhang) =>
      khachhang.tenkhachhang.includes(value)
    );
  }

  function getSuggestionValue(suggestion) {
    return suggestion.tenkhachhang;
  }

  function renderSuggestion(suggestion) {
    return <span>{suggestion.tenkhachhang}</span>;
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

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
              <p id="new-date">{ngaylapdonhang}</p>
            </div>
            <div className="title-info-row">
              <p>Mã số đơn hàng:</p>
              <p id="don-hang-id">{masodonhang}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Khach hang */}
        <div className="col-lg-6 col-md-6">
          <div className="ten-khach-hang">
            <label>Khách hàng:</label>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputTenKhachHangProps}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="so-dien-thoai">
            <div className="autocomplete">
              <label>Điện thoại:</label>
              <input
                id="sodienthoai"
                type="text"
                value={sdt}
                onChange={onHandleSdtChange}
                onKeyDown={onHandleSdtPress}
                onBlur={onHandleSdtBlur}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
