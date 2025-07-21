import { Button } from "../components/ui/Button"; 
import hero from "../assets/hero.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const [slideUp, setSlideUp] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setSlideUp(true);
    setTimeout(() => {
      navigate("/board");
    }, 800);
  };

  return (
    <AnimatePresence>
      {!slideUp && (
        <motion.div
          className="h-screen bg-[#EAF9E7] text-[#013237] font-sans flex flex-col items-center justify-between text-center px-6 py-6"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          exit={{ y: -100, transition: { duration: 0.8 } }}
        >
          {/* Top Section - Welcome text */}
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0, transition: { delay: 0.2 } }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome to <span className="text-[#4CA771]">CareerPilot</span>
            </h1>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="w-full max-w-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1, transition: { delay: 0.4 } }}
          >
            <img
              src={hero}
              alt="Hero illustration"
              className="w-full max-h-[40vh] object-contain mx-auto"
            />
          </motion.div>

          {/* Text + Button */}
          <motion.div
            className="max-w-lg"
            initial={{ y: 20 }}
            animate={{ y: 0, transition: { delay: 0.6 } }}
          >
            <p className="text-lg md:text-xl text-[#013237]/80 mb-6">
              Organize your job applications, contacts, and tasks in one place.
              Your career journey just got simpler.
            </p>
            <Button size="lg" onClick={handleGetStarted}>
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
