import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
  className="bg-[#0B1215] text-gray-300 py-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="container mx-auto px-4">
    <motion.div
      className="text-center mt-6 text-sm text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      © 2024 CodeNext. All rights reserved.
    </motion.div>
  </div>
</motion.footer>
  );
};

export default Footer;
