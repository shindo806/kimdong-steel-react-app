import React, { Component } from "react";

import * as dataAPI from "./dataAPI/connectDB";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <button onClick={dataAPI.getAllData}>getAllData</button>
        <button onClick={dataAPI.saveDonHangData}>add don hang</button>
        <button>add khach hang</button>
      </div>
    );
  }
}

export default App;
