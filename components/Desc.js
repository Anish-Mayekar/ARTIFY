import React from "react";
import "../styles/Desc.css"
import { Link } from "react-router-dom";

const Desc = (props) => {
  return (
    <div className="des">
      <h1>{props.title}</h1>
      {props.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <Link to = "/sidebar">Enroll Now!!!</Link>
    </div>
  );
};

export default Desc;