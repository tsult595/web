import React, { useState } from 'react';
import LoadingScreen from '../../pages/user/LoadingScreen';


// Исправляем: Нам нужно, чтобы Astro-контент передавался как HTML
export const IndexPageClient = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      
      <div >
        {children}
      </div>
    </>
  );
};