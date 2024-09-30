'use client';
import React, { useRef } from 'react';

interface BannerTagData {
  text: string;
  icon: string;
}

interface BannerTagProps {
  tags: BannerTagData[];
}

const BannerTag = ({ tags }: BannerTagProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      isDragging.current = true;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      className="hidden  w-full justify-start overflow-x-auto scrollbar-hide pt-12 no-select z-30 md:flex"
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
      <div className="flex gap-2 pl-40 ml-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="no-select w-[300px] h-[70px] bg-white rounded-lg bg-opacity-50 flex items-center justify-between shadow-lg px-3">
            <div className="flex items-center justify-center w-[45px] h-[45px] bg-white bg-opacity-30 rounded-md">
              <img src={tag.icon} alt="" className="w-6 h-6" />
            </div>
            <p className="text-lg text-white font-semibold flex-grow text-center">{tag.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerTag;
