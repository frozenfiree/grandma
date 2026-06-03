import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Counter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const wrapperRef = useRef(null);
  const hasRunRef = useRef(false);
  const rafRef = useRef(null);
  const location = useLocation();

  // Reset on route change so each service page re-animates
  useEffect(() => {
    hasRunRef.current = false;
    setCount(0);
  }, [location.pathname]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const startCounting = () => {
      if (hasRunRef.current) return;
      hasRunRef.current = true;

      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setCount(Math.floor(eased * end));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    };

    // Use root: null with rootMargin to handle overflow:hidden parents
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, location.pathname]);

  return <span ref={wrapperRef}>{count}{suffix}</span>;
}
