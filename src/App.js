import React, { useState } from "react";
import "./App.css";
import About from "./mycomponent/About";
import Navbar from "./mycomponent/Navbar";
import Textstate from "./mycomponent/Textstate";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#050110";
      document.title = "TextUtiles-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtiles-Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} /> 
        <div className="container">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Textstate mode={mode} />
            </Route>
          </Switch> */}
          <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Textstate mode={mode} />} />
      </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
