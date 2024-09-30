import React from 'react';

interface BannerTagProps {
  text: string;
  icon: string;
}

const BannerTag = ({ text, icon }: BannerTagProps) => {
  return (
    <div className="no-select w-[300px] h-[70px] bg-white rounded-lg bg-opacity-50 flex items-center justify-between shadow-lg px-3">
      <div className="flex items-center justify-center w-[45px] h-[45px] bg-white bg-opacity-30 rounded-md">
        <img src={icon} alt="" className="w-6 h-6" />
      </div>
      <p className="text-lg text-white font-semibold flex-grow text-center">{text}</p>
    </div>
  );
};

export default BannerTag;
