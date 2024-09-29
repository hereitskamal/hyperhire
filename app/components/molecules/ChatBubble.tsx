'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ChatBubbleProps {
  content: string;
  delay?: number;
  trianglePosition?: 'center-bottom' | 'left-bottom' | 'right-bottom';
  icon?: string;
  style?: React.CSSProperties;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  content,
  delay = 0,
  trianglePosition = 'center-bottom',
  icon,
  style,
}) => {
  let triangleStyles = '';

  switch (trianglePosition) {
    case 'left-bottom':
      triangleStyles = 'left-5 top-full';
      break;
    case 'right-bottom':
      triangleStyles = 'right-5 top-full';
      break;
    case 'center-bottom':
    default:
      triangleStyles = 'left-1/2 transform -translate-x-1/2 top-full';
      break;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      style={style}
      className="inline-flex relative bg-white text-cyan-500 rounded-lg p-2 mb-6 shadow-lg font-bold">
      <div
        className={`absolute mb-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white ${triangleStyles}`}
      />
      {icon && (
        <div className="w-6 h-6 rounded-full bg-cyan-100 flex justify-center items-center">
          <img src={icon} alt="" />
        </div>
      )}
      <p className="px-2">{content}</p>
    </motion.div>
  );
};

export default ChatBubble;
