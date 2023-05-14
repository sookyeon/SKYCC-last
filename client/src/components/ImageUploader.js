import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import Man from '../img/memoji-man.png';


const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(Man);
  const [previewFile, setPreviewFile] = useState(Man);
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    if (selectedFile){
        uploadFile(selectedFile)
    }

  };

  const uploadFile = (selectedFile) => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    axios
      .post('/image_post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // Handle successful upload
        console.log(response.data);
      })
      .catch((error) => {
        // Handle upload error
        console.error(error);
      });
      setPreviewFile(selectedFile)
  };

  return (
    <div>
      {previewFile&& (
        <img src={previewFile} alt='profile' width='240'/> 
      )}
       
      <Button colorScheme='blue' onClick={handleFileSelect}>나만의 프로필 만들기</Button>    
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{display:"none"}}/>
    
    </div>
  );
};

export default ImageUploader;