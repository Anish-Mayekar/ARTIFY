// Cards.js

import React from "react";
import Navbar from "../components/Navbar"
import CardsData from "../components/CardsData"; // Import your CardsData component here
import c1 from "../assets/a2.jpg";
import c2 from "../assets/a1.jpg";
import c3 from "../assets/simg1.jpeg";
import c4 from "../assets/simg2.jpeg";
import "../styles/CardStyles.css"; // Import your card styles here
import { Link } from "react-router-dom";



function Cards() {
  // Function to handle button click
  const handleButtonClick = () => {
    // Handle the button click event here
    alert("Button Clicked!");
  };

  return (
    <>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="cards">
      <h1>Painting Courses</h1>
      <h3>Learn Painting the way you like</h3>
      <div className="card-container">
        {/* Card 1 */}
        <CardsData
          image={c1}
          heading="Course1"
          text="Celebrate special birthdays with our beautiful cards."
          url="/des"
          
        />

        {/* Card 2 */}
        <CardsData
          image={c2}
          heading="Course2"
          text="Mark milestones with our lovely anniversary cards."
          onButtonClick={handleButtonClick} // Pass the function to handle button click
        />

        {/* Card 3 */}
        <CardsData
          image={c3}
          heading="Course3"
          text="Express gratitude with our heartfelt thank you cards."
          onButtonClick={handleButtonClick} // Pass the function to handle button click
          />
          
        {/* Card 4*/}
        <CardsData
        image={c4}
        heading="Course4"
        text="Express gratitude with our heartfelt thank you cards."
        onButtonClick={handleButtonClick} // Pass the function to handle button click

        />

        <CardsData
        image={c4}
        heading="Course5"
        text="Express gratitude with our heartfelt thank you cards."
        onButtonClick={handleButtonClick} // Pass the function to handle button click

        />

        
        <CardsData
        image={c4}
        heading="Course6"
        text="Express gratitude with our heartfelt thank you cards."
        onButtonClick={handleButtonClick} // Pass the function to handle button click

        />


        {/* Card 4*/}
        <CardsData
        image={c4}
        heading="Course7"
        text="Express gratitude with our heartfelt thank you cards."
        onButtonClick={handleButtonClick} // Pass the function to handle button click

        />

        <CardsData
        image={c4}
        heading="Course8"
        text="Express gratitude with our heartfelt thank you cards."
        onButtonClick={handleButtonClick} // Pass the function to handle button click

        />

        
        <CardsData
        image={c4}
        heading="Course9"
        text="Express gratitude with our heartfelt thank you cards."
        onButtonClick={handleButtonClick} // Pass the function to handle button click

        />

        {/* Add more CardsData components as needed */}
      </div>
    </div>
    </>
  );
}

export default Cards;
