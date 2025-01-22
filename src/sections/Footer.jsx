import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-transparent backdrop-blur-xl shadow-2xl shadow-white text-gray-300 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Logo or Company Name */}
          <motion.div
            className="mb-4 md:mb-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl font-bold text-white">Oz.dev</h1>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="flex space-x-4 mt-4 md:mt-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/fauzan-asyraf/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/brainsCollide"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="text-center mt-6 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          © 2024 Oz.dev. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
