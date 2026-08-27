import { useEffect, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";

const LoadingScreen = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let animationFrame = 0;
    let pauseTimeout = 0;
    let isMounted = true;
    let currentProgress = 0;

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        pauseTimeout = window.setTimeout(resolve, duration);
      });

    const animateTo = (target: number, duration: number) =>
      new Promise<void>((resolve) => {
        const start = performance.now();
        const initial = currentProgress;

        const tick = (now: number) => {
          if (!isMounted) return resolve();

          const elapsed = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - elapsed, 3);
          currentProgress = initial + (target - initial) * eased;
          setProgress(currentProgress);

          if (elapsed < 1) {
            animationFrame = requestAnimationFrame(tick);
          } else {
            currentProgress = target;
            setProgress(target);
            resolve();
          }
        };

        animationFrame = requestAnimationFrame(tick);
      });

const runLoading = async () => {
  window.dispatchEvent(new Event("start-page-enter"));

  await animateTo(34, 460);
  await wait(240);

  await animateTo(67, 460);
  await wait(240);

  await animateTo(100, 500);   // почти такая же скорость, как предыдущие

  if (!isMounted) return;
  setIsLeaving(true);

  window.dispatchEvent(new Event("loading-screen-closing"));

  pauseTimeout = window.setTimeout(() => onComplete?.(), 720);
};

    runLoading();

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(pauseTimeout);
    };
  }, [onComplete]);

  return (
    <aside
      aria-label="Загрузка страницы"
      className={`fixed inset-0 z-100 flex flex-col justify-between overflow-hidden bg-[#F88C0A] p-6 sm:p-10 ${
        isLeaving ? "animate-slide-out-pause" : "translate-x-0"
      }`}
    >
      {/* ВЕРХНЯЯ БЕЖЕВАЯ СТРОКА */}
      <div 
        role="progressbar" 
        aria-valuenow={Math.round(progress)} 
        aria-valuemin={0} 
        aria-valuemax={100}
        className="relative flex h-12 w-full items-center justify-between overflow-hidden bg-[#FDFABB] px-1 select-none"
      >
        {/* Логотип "M" */}
 
      <img 
      src="/tanitim_logo.png" 
      alt="Tanitim Logo" 
      className="relative z-30 h-7 w-auto object-contain select-none" 
      />

        {/* СЧЁТЧИК */}
      
    <div
     className="absolute inset-y-0 z-20 flex items-center will-change-transform"
     style={{
     right: `min(calc(100% - 170px), ${progress}%)`,
    transform: "translateZ(0)",
    }}
   >
  <span
    className="whitespace-nowrap pr-3 text-[15px] font-bold tabular-nums text-[#1F1F1E]"
    style={{ fontFamily: "'Inter', sans-serif" }}
  >
    {Math.round(progress)}%
  </span>
  </div>

        {/* ОРАНЖЕВЫЙ БАР */}
        <div
          className="absolute inset-y-0 right-0 z-10 bg-[#F88C0A]"
          style={{
            width: `min(calc(100% - 160px), ${progress}%)`,
          }}
        />  
      </div>

      {/* НИЖНИЙ ЗАГОЛОВОК */}
      <header className="pt-12">
        <AnimatedHeading />
      </header>
    </aside>
  );
};

export default LoadingScreen;