import React from "react";
import Desc from "../components/Desc"
import "../styles/Desc.css"

function DescData() {
  const Descdata = {
    title: "Description",
    paragraphs: [
      "Acrylic Painting From Beginner to Master is designed to teach anyone, from beginner to moderate skill levels, all of the fundamentals of acrylics you’ll ever need to create colorful, photo realistic paintings.",
      "You’ll learn time honored painting techniques combined with contemporary approaches, delivered to you in guided lectures, carefully crafted and edited to match anyones pace perfectly! Including access to me 7 days a week for any questions or even coaching you need along the way!",
      "We'll do 6 paintings and projects together from start to finish, each one designed to teach you different aspects of painting, like textures, color mixing and theory, brush handling, painting in layers, using mediums, glazing and isolation coats, underpainting, painting with planes, mixing and painting skin tone, color compositions from still lives to portraiture, and painting detail.",
      "You’ll watch me demonstrate every lesson, step by step, as I go into incredible detail of every aspect of creating a painting from start to finish. I’ll explain exactly how to use mediums, choose and handle brushes and mix every color, down to the percentage of paint. By the end of this course, you’ll be able to mix or match any color imaginable from it’s brightest vibrance to its most neutral tone!",
    ],
    buttonText: "Enroll Now!",
  };

  return (
    <div className="Desc">
      <Desc {...Descdata} />
    </div>
  );
}

export default DescData;
