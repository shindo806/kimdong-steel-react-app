export default function Thongtinchitiet(props) {
  // const [data, setData] = useState(() => {
  //   return localStorage.getItem("tempData")
  //     ? JSON.parse(localStorage.getItem("tempData"))
  //     : [];
  // });
  // useEffect(() => {
  //   let dataFromLocalStorage = JSON.parse(localStorage.getItem("tempData"));
  //   if (props.isAddItem) {
  //     setData(dataFromLocalStorage);
  //     // send back false status for isAddItem
  //     props.setIsAddItem(false);
  //   }
  // }, [props.isAddItem]);
  // const Rows =
  //   data.length === 0 ? (
  //     <tr className="table-row">
  //       <td className="table-cell align-center">1</td>
  //       <td></td>
  //       <td></td>
  //       <td></td>
  //       <td></td>
  //       <td></td>
  //       <td></td>
  //     </tr>
  //   ) : (
  //     data.map((item, index) => {
  //       return <Row item={item} index={index} key={index} />;
  //     })
  //   );
  // const tongThanhTien =
  //   data.length === 0
  //     ? ""
  //     : data.length === 1
  //     ? data[0].thanhtien
  //     : formatNumber(
  //         data.reduce(
  //           (arr, curr) => toNumber(arr.thanhtien) + toNumber(curr.thanhtien)
  //         )
  //       );
  const data = [
    {
      stt: "1",
      a: "1000",
      a1: "",
      b: "700",
      c: "",
      cong1: "15.000",
      cong2: "",
      cong3: "",
      dai: "",
      day: "8",
      dongia: "659.400",
      donvitinh: "cai",
      loaihang: "Tấm - 8 ly: 1000*700",
      soluong: "20",
      thanhtien: "13.188.000",
    },
    {
      stt: "2",
      a: "1000",
      a1: "",
      b: "700",
      c: "",
      cong1: "15.000",
      cong2: "",
      cong3: "",
      dai: "",
      day: "8",
      dongia: "659.400",
      donvitinh: "cai",
      loaihang: "Tấm - 8 ly: 1000*700",
      soluong: "20",
      thanhtien: "14.188.000",
    },
  ];
  const [rows, setRows] = useState(data);
  console.log(rows);
  const columns = [
    { key: "stt", name: "STT", editable: false },
    { key: "loaihang", name: "Loại hàng", editable: true },
    { key: "doday", name: "Complete", editable: true },
    { key: "donvitinh", name: "Đơn vị tính", editable: true },
    { key: "soluong", name: "Số lượng", editable: true },
    { key: "dongia", name: "Đơn giá", editable: true },
    { key: "thanhtien", name: "Thành tiền", editable: false },
  ];
  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    const newRows = rows.slice();
    for (let i = fromRow; i <= toRow; i++) {
      newRows[i] = { ...newRows[i], ...updated };
      return newRows;
    }
    setRows(newRows);
  };
  return (
    <>
      <h1>Test new table</h1>
      <ReactDataGrid
        columns={columns}
        rowGetter={(i) => rows[i]}
        rowsCount={2}
        onGridRowsUpdated={onGridRowsUpdated}
        enableCellSelect={true}
      />
    </>
  );
}



{
  /* <div className="row">
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
                    <th className="table-cell align-center th-donvitinh">ĐVT</th>
                    <th className="table-cell align-center th-soluong">SL</th>
                    <th className="table-cell align-center th-dongia">Đơn giá</th>
                    <th className="table-cell align-center th-thanhtien">
                      Thành tiền
                    </th>
                  </tr>
                </thead>
                {/* Render data here */
} <
tbody > {
    /* Data loop */ } {
    Rows
  } {
    /* Tổng thành tiền, thanh toán */ } <
  tr className = "table-row" >
  <
  td colSpan = {
    6
  }
className = "table-cell align-center" >
  Tổng <
  /td> <
  td
colSpan = {
  1
}
className = "table-cell align-right"
id = "thanhtien-render" >
  {
    tongThanhTien
  } <
  /td> <
  /tr> <
  tr className = "table=row" >
  <
  td colSpan = {
    6
  }
className = "table-cell align-center" >
  Thanh toán <
  /td> <
  td className = "table-cell"
colSpan = {
    1
  } >
  <
  input id = "thanhtoan-render"
type = "text" / >
  <
  /td> <
  /tr> <
  tr >
  <
  td colSpan = {
    6
  }
className = "table-cell align-center" >
  Dư nợ <
  /td> <
  td className = "table-cell"
colSpan = {
    1
  } >
  <
  input
defaultValue = "1.000.000"
id = "duno-render"
type = "text"
disabled
  /
  >
  <
  /td> <
  /tr> <
  /tbody> <
  /table> <
  /div> <
  /div> <
  /div> <
  div className = "row" > * /} <
  div className = "col-lg-6 col-md-6" >
  <
  div className = "ngay-giao autocomplete" >
  <
  label > Ngày giao: < /label> <
  input
id = "delivery-date"
type = "text"
placeholder = "Nhập ngày giao" /
  >
  <
  /div> <
  /div> <
  div className = "col-lg-6 col-md-6" >
  <
  div className = "cong-no" >
  <
  p > Công nợ: < /p> <
  span id = "cong-no" > 1.000 .000 .000 < /span> <
  /div> <
  /div> <
  /div>