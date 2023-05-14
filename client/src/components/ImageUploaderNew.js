import React, { useState, useEffect } from 'react';


const ImageUploaderNew = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  // Add the rest of the code here
  
const handleImageUpload = (event) => {
    const file = event.target.files[0];
    
    // Store the selected file in state
    setSelectedImage(file);
  
    // Create an object URL for the selected image file
    const objectUrl = URL.createObjectURL(file);
  
    // Store the object URL in state
    setImageUrl(objectUrl);
  }
  useEffect(() => {
    return () => {
      // Revoke the object URL when the component unmounts
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  return (
    <div>
      {/* Display the uploaded image */}
      {imageUrl && <img src={imageUrl} alt="Uploaded" width='240px' />}
      
      {/* Input field for selecting a file */}
      <input type="file" onChange={handleImageUpload} />
    </div>
  );

}

  export default ImageUploaderNew;