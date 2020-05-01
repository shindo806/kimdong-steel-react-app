function xuLyTieuDeLoaiThep(loaihang, thongso) {
  // loaihang: Tấm - m ly: a * b
  // thongso: Object {a: ..., b: ..., m : ...}
  // => render vao ID: thong-so-title
  // dai: "",    day: "",    donvitinh: "",    a: "",    b: "",    c: "",    a1: "",    cong1: 0,    cong2: 0, cong3: 0,
  const loaihangObj = {
    "T1": "Tấm - m ly: a*b",
    "T2": "Tấm - m ly: a*b-cØ",
    "T3": "Tấm - m ly: (a-c)*b-Vuông",
    "T4": "Tấm - m ly: (a-c)*b-Cân",
    "T5": "Tấm - m ly: Øa",
    "T6": "Tấm - m ly: Øa/Øb-Lấy ruột",
    "T7": "Tấm - m ly: Øa/Øb-Trừ ruột",
    "T8": "Tấm - m ly: Mẫu",
    "C1": "Chấn - m ly: U/a*b*c",
    "C2": "Chấn - m ly: U/a*b*a",
    "C3": "Chấn - m ly: L/a*b",
    "C4": "Chấn - m ly: C/a*a1*b*a1*a",
    "C5": "Chấn - m ly: Z/a*b*c",
    "C6": "Chấn - m ly: Khay 4 cạnh/a*b*c",
    "C7": "Chấn - m ly: Mẫu chấn",
    "Cu1": "Cuốn - m ly: Ống Øa",
    "Cu2": "Cuốn - m ly: Nón Ø(a-b)",
    "Cu3": "Cuốn - m ly: Vít tải Øa*a1*b*c",
    "CNC1": "CNC - m ly: Laser/a*b",
    "CNC2": "CNC - m ly: Plasma/a*b",
    "CNC3": "CNC - m ly: Oxy-gas/a*b",
  };

  let m = thongso.day === "" ? 0 : thongso.day;
  let a = thongso.a === "" ? 0 : thongso.a;
  let b = thongso.b === "" ? 0 : thongso.b;
  let c = thongso.c === "" ? 0 : thongso.c;
  let a1 = thongso.a1 === "" ? 0 : thongso.a1;

  let result = '';
  // Regex replace m - a - b ...
  switch (loaihang) {
    case "T1":
      let loaiHangString = loaihangObj[loaihang];
      result += loaiHangString.replace(/( m )/g, ` ${m} `).replace(/(a)/g, a).replace(/(b)/g, b);
      break;

    default:
      break;
  }
  let renderEl = document.getElementById('thong-so-title');
  // reset before each render time
  renderEl.innerHTML = '';
  renderEl.innerHTML = `<span>Thông số loại hàng:   ${result}</span>`;

}

export default xuLyTieuDeLoaiThep;