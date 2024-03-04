
import '../App.css';
import React from "react";
import Home from "./Home";
import Stores from "./Stores";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stores" element={<Stores/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
