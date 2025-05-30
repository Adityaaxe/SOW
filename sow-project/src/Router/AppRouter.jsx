import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "../Pages/Terms";
import PriceListPage from "../Pages/Pricelist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Terms />} />
        <Route path="/pricelist" element={<PriceListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
