import React, { useState } from 'react';
import "../styles/Assignment2.css"
import Sidebar from './Sidebar';

const FileUpload = () => {
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setImageFile(selectedFile);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleUpload = () => {

    if (imageFile) {
      alert('Image submitted: ' + imageFile.name);
    } else {
      alert('No image to submit.');
    }
  };

  return (
    <>
    <Sidebar/>
    <div>
    <h1>Assignment 2</h1>
    <h3>Paint a scenary where a farmer is farming on the farmland </h3>
    </div>
    <div className='ass2'>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageFile && (
        <div className='ass2img'>
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Uploaded Image"
            style={{ maxWidth: '40%', height: 'auto' }} // Adjust maxWidth here
          />
        </div>
      )}

      <div className='assbutton'>
      <button onClick={handleUpload}>Submit</button>
      </div>
      </div>
    </>
    
  );
};

export default FileUpload;
