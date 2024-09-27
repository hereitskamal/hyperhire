import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: React.ReactNode; // Change type to ReactNode
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => (
  <>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
      {title}
    </motion.h1>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-sm lg:text-lg text-white mb-8">
      {subtitle}
    </motion.div>
  </>
);

export default HeroSection;
