
import React from "react";
import "../styles/products.css"; // Import your card styles here

function ProductData(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt="Card" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <div className="buttonc">
      <button onClick={props.onButtonClick} >Buy Now</button>
      </div>
      
    </div>
  );
}

export default ProductData;
