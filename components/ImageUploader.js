import React, { useState } from 'react';
import "../styles/Assignment2.css"

const ImageUploader = () => {
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setImageFile(selectedFile);
    } else {
      alert('Please select a valid image file.');
    }
  };


  return (
    <>
    <div>
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
      </div>
    </>
    
  );
};

export default ImageUploader;
