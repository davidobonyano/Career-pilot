import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  onDelete?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, onDelete }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200, damping: 12 }}
    className="relative bg-white rounded-xl p-4 shadow-md border border-green-100 hover:shadow-lg cursor-pointer"
  >
    {onDelete && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute top-2 right-2 text-red-400 hover:text-red-600"
      >
        <X size={18} />
      </button>
    )}
    <h3 className="font-semibold text-lg text-[#013237]">{title}</h3>
    <p className="text-sm text-[#013237]/70">{company}</p>
  </motion.div>
);

export default JobCard;
