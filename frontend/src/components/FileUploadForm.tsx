// components/FileUploadForm.tsx
"use client";

import React, { useState } from 'react';
import axios from 'axios';

interface FileUploadFormProps {
  onFileUploaded: () => void;
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({ onFileUploaded }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const allowedFileTypes = ['text/plain', 'image/jpeg', 'image/png', 'application/json', 'application/pdf'];


  
  const handleFileUpload = async () => {
    if (!selectedFile) return;

    if (!allowedFileTypes.includes(selectedFile.type)) {
      alert('Unsupported file format');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:3001/api/files/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      onFileUploaded();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="file-upload" className="block text-lg font-medium text-gray-700 mb-2">Select a file to upload</label>
        <input
          id="file-upload"
          type="file"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 py-3 px-4"
        />
      </div>

      <button
        onClick={handleFileUpload}
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUploadForm;
