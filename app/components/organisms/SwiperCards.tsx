import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  titleFontSize?: string;
  tagsFontSize?: string;
  tags: string[];
  imageSize: string;
  className?: string; // Optional className for custom styles
  imageUrl: string; // New prop for the image URL
  width: string; // New prop for width
  height: string; // New prop for height
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  tags,
  className,
  imageSize,
  titleFontSize,
  tagsFontSize,
  imageUrl,
  width,
  height,
}) => (
  <div
    className={` rounded-lg bg-white shadow-lg flex flex-col transition-transform transform ${className} ${width} ${height}`}>
    <div className="flex justify-center">
      <div className={`${imageSize} mt-4 mb-2 rounded-full overflow-hidden border border-gray-300`}>
        <img src={imageUrl} alt="Profile" className="object-cover w-full h-full" />
      </div>
    </div>
    <div className="flex-1 pb-1 md:pb-4 flex flex-col items-center justify-center">
      <span className={`w-full text-center text-gray-800 font-semibold ${titleFontSize}`}>{title}</span>
      <h4 className="text-blue-600 font-medium text-center">{subtitle}</h4>
    </div>
    <div className="text-center text-gray-800 flex-1 py-2 flex flex-col justify-between">
      <div className={`flex justify-center flex-wrap gap-1 mt-2 ${tagsFontSize}`}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="border border-blue-500 rounded px-2 py-1 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Card;
