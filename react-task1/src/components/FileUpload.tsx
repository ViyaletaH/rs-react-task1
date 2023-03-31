import React from 'react';

interface FileUploadProps {
  onFileChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FileUpload = ({ onFileChange }: FileUploadProps) => {
  return (
    <div className="file-form">
      <label htmlFor="cover-upload" className="cover-upload">
        Choose an album/single cover:{' '}
      </label>
      <input
        type="file"
        id="cover-upload"
        name="cover"
        accept="image/*"
        onChange={onFileChange}
        required
      />
    </div>
  );
};

export default FileUpload;
