import React, { useState, useEffect } from 'react';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const UploadCircle = () => {
  const [color, setColor] = useState(getRandomColor());
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Load image from local storage on component mount
    const storedImage = localStorage.getItem('uploadedImage');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleCircleClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      // Save uploaded image to local storage
      localStorage.setItem('uploadedImage', reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
          cursor: 'pointer',
        }}
        onClick={handleCircleClick}
      >
        {image ? (
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />
        ) : (
          'Upload Image'
        )}
        <input
          type="file"
          id="fileInput"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default UploadCircle;
