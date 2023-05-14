import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';


const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);
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
      .post('/file_post', formData, {
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
    {(<iframe src={previewFile} alt="chosen" style={{ height: '100px' }} />)}
      <Button colorScheme='blue' onClick={handleFileSelect}>문서 업로드하기</Button>    
      <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{display:"none"}}/>
    </div>
  );
};

export default FileUploader;