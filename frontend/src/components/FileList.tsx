// components/FileList.tsx
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface FileListProps {
  files: any[];
}

const FileList: React.FC<FileListProps> = ({ files }) => {
  const router = useRouter();
 
//

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Uploaded Files</h2>
      <ul className="space-y-6">
        {files.map((file) => (
          <li key={file.id} className="flex items-center justify-between p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm transition transform hover:scale-105 hover:shadow-xl">
            <span className="text-lg font-medium text-gray-700">{file.filename}</span>
            <div className="flex space-x-4">
              <a
                href={`http://localhost:3001/api/files/${file.filename}`}
                download
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
              >
                Download
              </a>
              <a
                onClick={() => { router.push(`view-file/${file.filename}`); }}
                className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
              >
                View


              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
