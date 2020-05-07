import React, { useState } from "react";
import shortid from "shortid";
import Autosuggest from "react-autosuggest";

export default function Thongtinchung(props) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [khachhangs, setKhachHangs] = useState(() =>
    localStorage.getItem("khachhangData")
      ? JSON.parse(localStorage.getItem("khachhangData"))
      : []
  );
  const onChange = (event, { newValue, method }) => {
    setValue(newValue);
  };

  const onHandleKeyPress = (event) => {
    if (
      event.key === "Backspace" &&
      document.querySelector("#tenkhachhang").value.trim() === ""
    ) {
      document.querySelector("#sodienthoai").value = "";
      localStorage.removeItem("tempKhachHangData");
      return;
    }
    if (event.key === "Tab" || event.key === "Enter") {
      // Set tenkhachhang, khachhangID, sodienthoai -> tempKhachHangData (localStorage)
      let tempKhachHangData = {};
      let khachhangData = localStorage.getItem("khachhangData")
        ? JSON.parse(localStorage.getItem("khachhangData"))
        : [];
      let tenkhachhang = document.querySelector("#tenkhachhang").value.trim();
      let sodienthoai = document.querySelector("#sodienthoai").value;
      if (tenkhachhang === "") {
        localStorage.removeItem("tempKhachHangData");
        document.querySelector("#sodienthoai").value = "";
        return;
      }
      if (khachhangData.length === 0) {
        tempKhachHangData.tenkhachhang = tenkhachhang;
        tempKhachHangData.khachhangID = shortid.generate();
        tempKhachHangData.sodienthoai = sodienthoai;
        localStorage.setItem(
          "tempKhachHangData",
          JSON.stringify(tempKhachHangData)
        );
      } else {
        let matched = khachhangs.filter((khachhang) =>
          khachhang.tenkhachhang.includes(tenkhachhang)
        );
        if (matched.length === 0) {
          tempKhachHangData.tenkhachhang = tenkhachhang;
          tempKhachHangData.khachhangID = shortid.generate();
          tempKhachHangData.sodienthoai = sodienthoai;
          console.log(tempKhachHangData);
          localStorage.setItem(
            "tempKhachHangData",
            JSON.stringify(tempKhachHangData)
          );
        } else {
          document.querySelector("#sodienthoai").value = matched[0].sodienthoai;
          tempKhachHangData.tenkhachhang = matched[0].tenkhachhang;
          tempKhachHangData.khachhangID = matched[0].khachhangID;
          tempKhachHangData.sodienthoai = matched[0].sodienthoai;
          localStorage.setItem(
            "tempKhachHangData",
            JSON.stringify(tempKhachHangData)
          );
        }
      }
    }
  };

  const onHandleOnBlur = (event) => {
    let tenkhachhang = document.querySelector("#tenkhachhang").value.trim();
    console.log(tenkhachhang);
    let sodienthoai = document.querySelector("#sodienthoai").value;

    // Set tenkhachhang, khachhangID, sodienthoai -> tempKhachHangData (localStorage)
    let tempKhachHangData = {};
    let khachhangData = localStorage.getItem("khachhangData")
      ? JSON.parse(localStorage.getItem("khachhangData"))
      : [];

    if (tenkhachhang === "") {
      localStorage.removeItem("tempKhachHangData");
      document.querySelector("#sodienthoai").value = "";
      return;
    }
    if (khachhangData.length === 0) {
      tempKhachHangData.tenkhachhang = tenkhachhang;
      tempKhachHangData.khachhangID = shortid.generate();
      tempKhachHangData.sodienthoai = sodienthoai;
      localStorage.setItem(
        "tempKhachHangData",
        JSON.stringify(tempKhachHangData)
      );
    } else {
      let matched = khachhangs.filter(
        (khachhang) => khachhang.tenkhachhang === tenkhachhang
      );
      if (matched.length === 0) {
        tempKhachHangData.tenkhachhang = tenkhachhang;
        tempKhachHangData.khachhangID = shortid.generate();
        tempKhachHangData.sodienthoai = sodienthoai;
        console.log(tempKhachHangData);
        localStorage.setItem(
          "tempKhachHangData",
          JSON.stringify(tempKhachHangData)
        );
      } else {
        console.log("set item");
        document.querySelector("#sodienthoai").value = matched[0].sodienthoai;
        tempKhachHangData.tenkhachhang = matched[0].tenkhachhang;
        tempKhachHangData.khachhangID = matched[0].khachhangID;
        tempKhachHangData.sodienthoai = matched[0].sodienthoai;
        localStorage.setItem(
          "tempKhachHangData",
          JSON.stringify(tempKhachHangData)
        );
      }
    }
  };
  const inputTenKhachHangProps = {
    id: "tenkhachhang",
    value,
    onChange,
    onKeyDown: onHandleKeyPress,
    onBlur: onHandleOnBlur,
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
                onKeyDown={(e) => onHandleKeyPress(e)}
                onBlur={(e) => onHandleOnBlur(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
