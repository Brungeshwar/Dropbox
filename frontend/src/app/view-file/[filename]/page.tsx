"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams,useParams } from 'next/navigation';

const ViewFile = () => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const  {filename}  = useParams()
  console.log(filename)
  const fileNameString = typeof filename === 'string' ? filename : (Array.isArray(filename) ? filename[0] : null);
  console.log(fileNameString)

  useEffect(() => {
    const fetchFileContent = async () => {
      if (fileNameString) {
        try {
          const response = await axios.get(`http://localhost:3001/api/files/file-content/${fileNameString}/`, {
            responseType: 'text', // or 'blob' for binary content
          });
          //const fileUrl = URL.createObjectURL(response.data);
          setFileContent(response.data);
         // setFileContent(response.data);
        } catch (error) {
          console.error('Error fetching file content:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchFileContent();
  }, [fileNameString]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">File Content</h1>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          {fileContent ? (
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{fileContent}</pre>
          ) : (
            <div>No content available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewFile;
