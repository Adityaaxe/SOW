import React from "react";
import "../assets/CSS/PriceList.css";

const PriceList = () => {
  return (
    <div className="pricelist">
      <div className="search-section">
        <input placeholder="Search Article No." className="search-input" />
        <input placeholder="Search Product" className="search-input" />
        <button className="search-button">🔍</button>
      </div>

      <div className="action-buttons">
        <button className="action-button">New Product 🟢</button>
        <button className="action-button">Print List</button>
        <button className="action-button">Advanced mode ⚙️</button>
      </div>

      <div className="table-header">
        <div></div>
        <div>Article No.</div>
        <div>Product/Service</div>
        <div>In Price</div>
        <div>Price</div>
        <div>Unit</div>
        <div>In Stock</div>
        <div>Description</div>
      </div>

      <div className="table-row">
        <div>→</div>
        <div>1234567890</div>
        <div>This is a test product with fifty characters this!</div>
        <div>900500</div>
        <div>1500800</div>
        <div>kilometers/hour</div>
        <div>2500600</div>
        <div>This is the description with fifty characters this</div>
      </div>
    </div>
  );
};

export default PriceList;
