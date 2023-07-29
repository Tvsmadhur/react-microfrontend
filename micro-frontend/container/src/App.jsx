import React from "react";
import ReactDOM from "react-dom";
import CounterApp from 'counter/Counter'
import ChildApp from 'child/Child'

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: container</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <CounterApp/>
    <ChildApp/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
