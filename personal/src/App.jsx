import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage.jsx"

class App extends React.Component {
  render() { 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />}/> 

      </Routes>
    </Router>
  )

  }
}

export default App;
