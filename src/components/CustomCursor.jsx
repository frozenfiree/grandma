import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [hoveredElementRect, setHoveredElementRect] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLinkHover, setIsLinkHover] = useState(false);
  const [linkPos, setLinkPos] = useState({ x: 0, y: 0 });
  
  // Mouse position with spring animation for smooth following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // Size animation
  const cursorSize = useSpring(20, springConfig);
  const cursorRadius = useSpring(4, springConfig);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = 'auto';
      return;
    }
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (isLinkHover) setLinkPos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => { cursorSize.set(20); cursorRadius.set(4); };
    const handleMouseLeave = () => { cursorSize.set(16); cursorRadius.set(2); };
    
    const isClickable = (el) => {
      if (!el) return false;
      const tag = el.tagName;
      if (tag === 'A' || tag === 'BUTTON') return true;
      if (el.getAttribute('role') === 'button') return true;
      if (el.hasAttribute('data-cursor') || el.hasAttribute('data-blobity')) return true;
      return false;
    };

    const isLink = (el) => {
      if (!el) return false;
      return !!el.closest('a');
    };

    const handleElementMouseEnter = (e) => {
      const target = e.composedPath().find(isClickable);
      if (target) {
        const rect = target.getBoundingClientRect();
        setHoveredElementRect(rect);
        setIsHovering(true);
        setHoveredElement(target);
        const customSize = target.getAttribute('data-cursor-size');
        const customRadius = target.getAttribute('data-cursor-radius');
        cursorSize.set(customSize ? parseInt(customSize) : 20);
        cursorRadius.set(customRadius ? parseInt(customRadius) : 12);
      }
      // blue box only on <a> links
      if (isLink(e.target)) {
        setIsLinkHover(true);
        setLinkPos({ x: e.clientX, y: e.clientY });
      }
    };
    
    const handleElementMouseLeave = (e) => {
      setIsHovering(false);
      setHoveredElement(null);
      setHoveredElementRect(null);
      cursorSize.set(16);
      cursorRadius.set(4);
      if (!e.relatedTarget || !e.relatedTarget.closest('a')) {
        setIsLinkHover(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementMouseEnter);
    document.addEventListener('mouseout', handleElementMouseLeave);
    document.body.style.cursor = 'none';
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementMouseEnter);
      document.removeEventListener('mouseout', handleElementMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [mouseX, mouseY, cursorSize, cursorRadius, isMobile, isLinkHover]);
  
  // For morphing effect when hovering over elements
  const morphX = useSpring(isHovering && hoveredElementRect ? hoveredElementRect.left + hoveredElementRect.width / 2 : 0, springConfig);
  const morphY = useSpring(isHovering && hoveredElementRect ? hoveredElementRect.top + hoveredElementRect.height / 2 : 0, springConfig);
  const morphWidth = useSpring(isHovering && hoveredElementRect ? hoveredElementRect.width : 16, springConfig);
  const morphHeight = useSpring(isHovering && hoveredElementRect ? hoveredElementRect.height : 16, springConfig);
  
  useEffect(() => {
    if (isHovering && hoveredElementRect) {
      morphX.set(hoveredElementRect.left + hoveredElementRect.width / 2);
      morphY.set(hoveredElementRect.top + hoveredElementRect.height / 2);
      morphWidth.set(hoveredElementRect.width + 20);
      morphHeight.set(hoveredElementRect.height + 20);
    } else {
      morphX.set(0);
      morphY.set(0);
      morphWidth.set(16);
      morphHeight.set(16);
    }
  }, [isHovering, hoveredElementRect, morphX, morphY, morphWidth, morphHeight]);
  
  // Don't render on mobile
  if (isMobile) return null;
  
  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          width: cursorSize,
          height: cursorSize,
          borderRadius: cursorRadius,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Morphing element for hover effects */}
      {isHovering && hoveredElementRect && (
        <motion.div
          className="custom-cursor-morph"
          style={{
            x: morphX,
            y: morphY,
            width: morphWidth,
            height: morphHeight,
            translateX: '-50%',
            translateY: '-50%',
            borderRadius: 12,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Blue arrow box — shows on any <a> link */}
      {isLinkHover && (
        <motion.div
          initial={{ scale: 0, x: linkPos.x, y: linkPos.y }}
          animate={{ scale: 1, x: linkPos.x, y: linkPos.y }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '50px',
            height: '50px',
            backgroundColor: '#0066FF',
            border: '2px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 99999,
            transform: 'translate(-50%, -50%)',
            willChange: 'transform',
          }}
        >
          <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold' }}>→</span>
        </motion.div>
      )}
      
      <style>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          background: radial-gradient(circle, rgba(219,255,0,0.8) 0%, rgba(219,255,0,0.3) 100%);
          backdrop-filter: blur(2px);
          mix-blend-mode: difference;
          transition: width 0.2s ease, height 0.2s ease, border-radius 0.2s ease;
        }
        
        .custom-cursor-morph {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9998;
          background: rgba(219, 255, 0, 0.15);
          border: 1px solid rgba(219, 255, 0, 0.5);
          transition: width 0.2s ease, height 0.2s ease;
        }
        
        /* Hide cursor on all interactive elements - desktop only */
        @media (min-width: 901px) {
          a, button, [data-cursor], [data-blobity], [role="button"],
          [class*="card"], [class*="item"], [class*="btn"], [class*="link"] {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;