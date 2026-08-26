import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../Header";

const HeroSection = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handler = () => setRevealed(true);
    window.addEventListener("loading-screen-closing", handler);
    return () => window.removeEventListener("loading-screen-closing", handler);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 1. СЛОЙ С ФОНОМ (Подложка с анимацией) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg.jpg')",
            width: "110%", // Запас для анимации
          }}
          initial={{ x: -20 }}
          animate={{ x: revealed ? 0 : -20 }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      
        {/* <div className="absolute inset-0 bg-black/30" /> */}
      </div>

      {/* 2. СЛОЙ С КОНТЕНТОМ (Обычный Flex-поток поверх фона) */}
      <div className="relative z-10 flex flex-col justify-between w-full h-full p-6 sm:p-10">
        {/* Хедер идет первой строкой в обычном потоке */}
        <Header />
      </div>
    </div>
  );
};

export default HeroSection;