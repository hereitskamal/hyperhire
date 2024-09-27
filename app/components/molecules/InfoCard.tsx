"use client";

import { motion } from 'framer-motion';

interface InfoCardProps {
  content: string;
  sub: string;
  delay: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ content, delay, sub }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-transparent pt-6 rounded-lg text-white max-w-[161px]"
    >
      <hr className='mr-6' />
      <h3 className="text font-bold py-2">{content}</h3>
      <p className="text-sm">{sub}</p>
    </motion.div>
  );
};

export default InfoCard;
