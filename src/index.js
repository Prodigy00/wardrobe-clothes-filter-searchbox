import React from "react";
import ReactDOM from "react-dom";
import WardRobe from "./WardRobe";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <WardRobe />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
