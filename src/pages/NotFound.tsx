import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 min-h-[70vh]">
      <motion.h1
        className="text-8xl font-extrabold text-[#4CA771] mb-4"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-lg text-[#013237] mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

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
