import React from "react";
import { motion } from "framer-motion";

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = "No jobs here yet." }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-4 text-center text-[#013237]/70"
    >
      <p className="text-sm font-medium italic">{message}</p>
    </motion.div>
  );
};

export default EmptyState;
