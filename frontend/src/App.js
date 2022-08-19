import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Sidebar />} />
      </Routes>
    </div>
  );
};

export default App;
