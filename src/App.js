import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

//Import Component
import Home from "./views/Home";
import Main from "./views/Main";
//Import CSS
import "./App.css";

function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="main" element={<Main />}></Route>

      </Routes>
    </div>
  );
}

export default App;
