import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Applied", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#20476e";
      showAlert("Dark Mode Applied", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* NEW SYNTAX FOR RRD */}

          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to Analyze"
                  mode={mode}
                />
              }
            />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>

          {/* OLD SYNTAX FOR RRD */}
          {/* <Router>
          <Switch>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to Analyze"
                mode={mode}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router> */}
        </div>
      </Router>
    </>
  );
}

export default App;
