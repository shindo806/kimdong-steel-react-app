import React, { Component } from "react";
import "./global.css";
import loadingApp from "./components/utils/loadingApp";

import Thanhtoan from "./components/thanhtoan/thanhtoan";

class App extends Component {
  render() {
    loadingApp();
    return (
      <div className="App">
        <Thanhtoan />
      </div>
    );
  }
}

export default App;
