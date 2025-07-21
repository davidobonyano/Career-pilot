import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 min-h-[70vh]">
      {/* SVG Illustration */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-32 h-32 text-[#4CA771]"
          fill="currentColor"
        >
          <circle cx="32" cy="32" r="30" fill="#C0E6BA" />
          <polygon points="32,12 24,40 40,40" fill="#4CA771" />
          <circle cx="32" cy="32" r="4" fill="#013237" />
        </svg>
      </motion.div>

      {/* 404 Title */}
      <motion.h1
        className="text-8xl font-extrabold text-[#4CA771] mb-4"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        className="text-lg text-[#013237] mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oops! Looks like you’re off course. Let’s navigate back home.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-[#4CA771] text-white text-lg rounded-lg shadow-lg hover:scale-105 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
