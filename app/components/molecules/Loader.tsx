import React from 'react';

interface SnackbarLoaderProps {
  message: string;
  isLoading: boolean;
}

const SnackbarLoader: React.FC<SnackbarLoaderProps> = ({ message, isLoading }) => {
  return (
    <div
      style={{ zIndex: '1000' }}
      className={`fixed inset-0 p-4 bg-gray-800 rounded shadow-lg transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`flex justify-center items-center h-full ${isLoading ? 'flex' : 'hidden'}`}>
        <div className="loader border-t-4 border-b-4 border-cyan-600 rounded-full w-56 h-56 animate-spin"></div>
      </div>
      {message && <p className="text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default SnackbarLoader;
