import React from "react";
import { motion } from "framer-motion";

interface JobCardProps {
  title: string;
  company: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200, damping: 12 }}
    className="bg-white rounded-xl p-4 shadow-md border border-green-100 hover:shadow-lg cursor-pointer"
  >
    <h3 className="font-semibold text-lg text-[#013237]">{title}</h3>
    <p className="text-sm text-[#013237]/70">{company}</p>
  </motion.div>
);

export default JobCard;
