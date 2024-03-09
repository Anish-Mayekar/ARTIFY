import React from 'react';
import Sidebar from './Sidebar';
import "../styles/videos.css";


function Video1() {
  return (
    <div>

      <Sidebar/>
      <div className='textforvideo'>
      <h1>Introduction</h1>
      <br></br>
        <p>"Welcome to the  my course passport to the enchanting world of art and painting!
           In this course, we invite you to immerse yourself in the vibrant colors, captivating strokes,
            and boundless creativity that painting offers. Whether you're a complete novice eager to dip your 
            brushes into a world of new possibilities or a seasoned artist aiming to hone your craft, our course 
            is designed to inspire and empower you. Together, we'll explore a spectrum of techniques, from classic 
            to contemporary, unlocking your artistic potential and allowing your creativity to flourish. Join us 
            on this artistic voyage, where self-expression knows no bounds, and you'll discover the joy of bringing your imagination to life on canvas. 
            Let's embark on this exhilarating journey of self-discovery, one brushstroke at a time."
</p>
      </div>
      <div className='videoe'>
      <video width="800px" height="450px" controls>
        <source src="record1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      
    </div>
  );
}



export default Video1;
