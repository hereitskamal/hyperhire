// components/molecules/SnackbarLoader.tsx
import React from 'react';

interface SnackbarLoaderProps {
  message: string;
  isLoading: boolean;
}

const SnackbarLoader: React.FC<SnackbarLoaderProps> = ({ message, isLoading }) => {
  return (
    <div
      className={`fixed bottom-4 w-1/2 left-1/2 transform -translate-x-1/2 p-4 bg-gray-200 rounded shadow-lg transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className="bg-cyan-600 h-2 rounded"
        style={{ width: isLoading ? '100%' : '0%', transition: 'width 0.5s ease-in-out' }}
      />
    </div>
  );
};

export default SnackbarLoader;
