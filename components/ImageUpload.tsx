import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';

interface ImageUploadProps {
  setImage: (image: string) => void;
  setImageFile: (imagefile: File) => void;
  handleMessageSend: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setImage, setImageFile, handleMessageSend}) => {
  
  const [selectedFile, setSelectedFile] = useState<File>();

  console.log("here")
  useEffect(() => {
    const uploadbtn = document.getElementById('fileUploadbtn') as HTMLButtonElement | null;
  const generatebtn = document.getElementById('fileGeneratebtn') as HTMLButtonElement | null;
  uploadbtn?.setAttribute('disabled', '');
  generatebtn?.setAttribute('disabled', '');
  console.log(uploadbtn)
  },[]);

  const  handleFileInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files)
    const uploadbtn = document.getElementById('fileUploadbtn') as HTMLButtonElement | null;
    const generatebtn = document.getElementById('fileGeneratebtn') as HTMLButtonElement | null;
    uploadbtn?.removeAttribute('disabled');
    generatebtn?.removeAttribute('disabled');
    console.log(uploadbtn)
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0])
      await setImageFile(event.target.files[0])
      await setSelectedFile(event.target.files[0]);
    }
  };

  const handleClick = () => {
    handleMessageSend();
  };

  const  handleUpload =  () => {
    const reader = new FileReader();
    
    reader.onload =  (e) => {
       setImage(e.target.result as string);
    };
    reader.readAsDataURL(selectedFile as File);
  };

  return (
    <div>
      <label htmlFor="images" className="drop-container">
        <span className="drop-title">Drop files here</span>
        or
        <input type="file" name="fileUpload" id="fileUpload" onChange={handleFileInput} accept="image/*" />
        <div>
          <button id="fileUploadbtn" onClick={handleUpload}>Upload</button>
          <button id="fileGeneratebtn" onClick={handleClick}>Generate</button>
        </div>
        
      </label>
    </div>
  );
};

export default ImageUpload;
