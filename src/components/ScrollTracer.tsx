import { useEffect, useState } from 'react';

export const ScrollTracer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-0 top-0 h-full w-1 z-50">
      <div 
        className="bg-gradient-to-b from-crypto-primary to-crypto-secondary h-full transition-transform duration-150"
        style={{ transform: `scaleY(${scrollProgress / 100})` }}
      />
    </div>
  );
};