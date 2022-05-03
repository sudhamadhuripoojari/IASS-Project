import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  { StartPage } from "./components/StartPage";
import "./index.css";
import { ResultPage } from "./components/ResultPage";

export const Routing = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/Advice" element={<ResultPage />} />
     </Routes>
    </Router>
  );
}
 