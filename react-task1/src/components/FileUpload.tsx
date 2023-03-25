import React, { Component } from 'react';

interface FileUploadProps {
  onFileChange: React.ChangeEventHandler<HTMLInputElement>;
}

class FileUpload extends Component<FileUploadProps> {
  render() {
    return (
      <div>
        <label htmlFor="cover-upload">Choose a file:</label>
        <input
          type="file"
          id="cover-upload"
          name="cover"
          accept="image/*"
          onChange={this.props.onFileChange}
        />
      </div>
    );
  }
}

export default FileUpload;
