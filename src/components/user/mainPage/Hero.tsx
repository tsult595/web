import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../Header";
import AboutSection from "./AboutSection";

const HeroSection = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handler = () => setRevealed(true);
    window.addEventListener("loading-screen-closing", handler);
    return () => window.removeEventListener("loading-screen-closing", handler);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* 1. ФИКСИРОВАННЫЙ ХЕДЕР (Не зависит от сдвига +70px) */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 p-6 sm:p-10 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <Header />
      </motion.div>

      {/* 2. ФОН HERO */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/test.avif')",
            width: "120%",
          }}
          initial={{ x: -20 }}
          animate={{ x: revealed ? 0 : -20 }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>

      {/* 3. КОНТЕНТ HERO */}
      <div className="relative z-10 flex flex-col justify-between w-full h-full p-6 pt-28 sm:p-10 sm:pt-36">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-white">Tanitim.azzzzzzzzzzzzz</h1>
        </div>
        <AboutSection />
      </div>

    </div>
  );
};

export default HeroSection;