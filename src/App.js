import React, { Component } from "react";
import "./global.css";
import * as dataAPI from "./dataAPI/connectDB";
import Thanhtoan from "./components/thanhtoan/thanhtoan";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Thanhtoan />
      </div>
    );
  }
}

export default App;
