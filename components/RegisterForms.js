import React, { useState } from "react";
import "../styles/Register2.css";
import paintingImage from "../assets/a1.jpg"; // Import your image files
import origamiImage from "../assets/a2.jpg";
import sculptureImage from "../assets/a3.jpg";
import potteryImage from "../assets/h1.png";

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    Art: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const getImageForArt = (art) => {
    switch (art) {
      case "Painting":
        return paintingImage;
      case "Origami":
        return origamiImage;
      case "Sculpture":
        return sculptureImage;
      case "Pottery":
        return potteryImage;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h1>Register Now !!</h1>
      <form method="POST">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control"
          value={userData.name}
          onChange={handleInputChange}
        />
        <select
          id="Art"
          name="Art"
          value={userData.Art}
          className="form-control"
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select Art field
          </option>
          <option value="Painting">Painting</option>
          <option value="Origami">Origami</option>
          <option value="Sculpture">Sculpture</option>
          <option value="Pottery">Pottery</option>
        </select>

        {userData.Art && (
          <img
            src={getImageForArt(userData.Art)}
            alt={userData.Art}
            className="selected-image"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-control"
          value={userData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
