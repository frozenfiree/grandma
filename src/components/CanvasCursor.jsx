// components/CanvasCursor.jsx
import React, { useEffect, useRef, useState } from 'react';

const CanvasCursor = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  useEffect(() => {
    // Don't render cursor on mobile
    if (isMobile) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    
    const animate = () => {
      if (!ctxRef.current) return;
      
      ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw cursor circle
      ctxRef.current.beginPath();
      ctxRef.current.arc(mousePosition.current.x, mousePosition.current.y, 20, 0, 2 * Math.PI);
      ctxRef.current.fillStyle = 'rgba(219, 255, 0, 0.3)';
      ctxRef.current.fill();
      ctxRef.current.strokeStyle = 'rgba(219, 255, 0, 0.8)';
      ctxRef.current.lineWidth = 2;
      ctxRef.current.stroke();
      
      // Draw inner dot
      ctxRef.current.beginPath();
      ctxRef.current.arc(mousePosition.current.x, mousePosition.current.y, 4, 0, 2 * Math.PI);
      ctxRef.current.fillStyle = 'rgba(219, 255, 0, 0.8)';
      ctxRef.current.fill();
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile]);
  
  // Don't render on mobile
  if (isMobile) return null;
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CanvasCursor;