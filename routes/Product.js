// Cards.js

import React from "react";
import ProductData from "../components/ProductData"; // Import your CardsData component here
import c1 from "../assets/a2.jpg";
import c2 from "../assets/a1.jpg";
import c3 from "../assets/simg1.jpeg";
import c4 from "../assets/simg2.jpeg";
import "../styles/products.css"; // Import your card styles here
import Sidebar from "./Sidebar";



function Product() {
  // Function to handle button click
  const handleButtonClick = () => {
    // Handle the button click event here
    alert("Button Clicked!");
  };

  return (
    <>
    <Sidebar/>
    
    <div className="cards">
      <h1>My Paintings</h1>
      <h3>If you love my courses you can also buy my painting</h3>
      <div className="card-container">

        <ProductData
          image={c1}
          heading="Painting1"
          text="Celebrate special birthdays with our beautiful cards."
          onButtonClick={handleButtonClick} // Pass the function to handle button click
        />

        <ProductData
          image={c2}
          heading="Painting2"
          text="Mark milestones with our lovely anniversary cards."
          onButtonClick={handleButtonClick} // Pass the function to handle button click
        />

        <ProductData
          image={c3}
          heading="Painting3"
          text="Express gratitude with our heartfelt thank you cards."
          onButtonClick={handleButtonClick} // Pass the function to handle button click
          />
          
        <ProductData
        image={c4}
        heading="Painting4"
        text="Express gratitude with our heartfelt thank you cards."
        onButtonClick={handleButtonClick} // Pass the function to handle button click

        />
      </div>
    </div>
    </>
  );
}

export default Product;
