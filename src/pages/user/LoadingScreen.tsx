import { useEffect, useState } from "react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@600;700&display=swap');`;

const LoadingScreen = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLeaving(true);

          // Триггерим заезд главной страницы ровно в момент старта ухода лоадера
          if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("start-page-enter"));
          }

          setTimeout(() => onComplete?.(), 650);
          return 100;
        }
        const step = prev < 70 ? 4 : 2;
        return Math.min(prev + step, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-[#F0692A] p-6 sm:p-10 ${
        isLeaving ? "animate-slide-out-pause" : "translate-x-0"
      }`}
    >
      <style>{FONT_IMPORT}</style>

      {/* ВЕРХНЯЯ БЕЖЕВАЯ СТРОКА */}
      <div className="relative flex h-12 w-full items-center justify-between bg-[#FDF6DC] px-4 select-none overflow-hidden rounded-sm">
        
        {/* Логотип "M" */}
        <span
          className="relative z-20 text-2xl font-black text-[#1F1F1E] leading-none"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          M
        </span>

        {/* СЧЁТЧИК */}
        <div
          className="absolute inset-y-0 flex items-center z-10 transition-all duration-75 ease-out"
          style={{
            left: `max(50px, calc(100% - ${progress}% - 45px))`,
          }}
        >
          <span
            className="text-sm font-bold text-[#1F1F1E] tabular-nums whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {Math.floor(progress)}%
          </span>
        </div>

        {/* ОРАНЖЕВЫЙ БАР */}
        <div
          className="absolute inset-y-0 right-0 bg-[#F0692A] transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* НИЖНИЙ ЗАГОЛОВОК */}
      <div className="pt-12">
        <h1
          className="text-[#FDF6DC] leading-[0.85] tracking-tight select-none uppercase"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(3.5rem, 13vw, 10rem)",
          }}
        >
          ANIMATION
          <br />
          2D & 3D
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;