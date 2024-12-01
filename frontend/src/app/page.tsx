
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FileUploadForm from '@/components/FileUploadForm';
import FileList from '@/components/FileList';

const Home = () => {
  const [files, setFiles] = useState<any[]>([]);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/files/');
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-8">

         
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Dropbox-like File Manager</h1>
        
        <FileUploadForm onFileUploaded={fetchFiles} />

          
        
        <FileList files={files} />
      </div>
    </div>
  );
};

export default Home;
