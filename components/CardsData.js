
import React from "react";
import "../styles/CardStyles.css"; // Import your card styles here
import { Link } from "react-router-dom";

function CardsData(props) {
  return (
    <div className="card">
      
      <div className="card-image">
        <img src={props.image} alt="Card" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <Link to={props.url}>VIEW</Link>
      
    </div>
  );
}

export default CardsData;



