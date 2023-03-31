import React from 'react';

interface FileUploadProps {
  onFileChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FileUpload = ({ onFileChange }: FileUploadProps) => {
  return (
    <div>
      <label htmlFor="cover-upload">Choose an album/single cover:</label>
      <input type="file" id="cover-upload" name="cover" accept="image/*" onChange={onFileChange} />
    </div>
  );
};

export default FileUpload;
