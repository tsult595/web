import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedHeading = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const handler = () => setPlay(true);
    window.addEventListener("start-page-enter", handler);
    return () => window.removeEventListener("start-page-enter", handler);
  }, []);

  const lines = ["ANIMATION", "2D & 3D" , "MOTION DESIGN"];

  return (
    <header className="pt-12">
      <h1
        className="select-none uppercase leading-[0.85] tracking-tight text-[#FDF6DC]"
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(3.5rem, 13vw, 10rem)",
        }}
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="overflow-hidden">
            <div className="flex flex-wrap">
              {line.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={play ? { y: "0%" } : { y: "110%" }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: lineIndex * 0.15 + i * 0.02,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </h1>
    </header>
  );
};

export default AnimatedHeading;