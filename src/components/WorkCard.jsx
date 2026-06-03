import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import useLazyVideo from './useLazyVideo';

const WorkCard = ({ title, description, category, video, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const videoRef = useLazyVideo();

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <style>{`
      *{
      scrollbar-width: none; /* Firefox */
        }
  .hide-cursor, .hide-cursor * {
    cursor: none !important;
  }

  .perspective-container {
    perspective: 1200px;
  }

  .wc-wrap {
    padding: 12px;
    cursor: none;
    will-change: transform;
  }

  .wc-video-box {
    position: relative;
    aspect-ratio: 16/11;
    overflow: hidden;
    border-radius: 18px;
    background-color: #e5e5e5;
    transition: border-radius 0.35s ease;
    will-change: transform;
  }

  .wc-wrap:hover .wc-video-box {
    border-radius: 38px;
  }

  .wc-video-box video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
  }
`}</style>

      <div
  ref={cardRef}
  className="perspective-container"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={handleMouseLeave}
  onMouseMove={handleMouseMove}
  onClick={() => window.location.href = link}
  style={{ zIndex: isHovered ? 10 : 1, position: 'relative' }}
>
  <div className="wc-wrap">
    <div className="wc-video-box">
      <motion.video
        ref={videoRef}
        data-src={video}
        loop
        muted
        playsInline
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
    </div>

    <div
      style={{
        padding: '24px 12px 12px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <h3
        style={{
          fontSize: '26px',
          fontWeight: '900',
          color: '#000',
          margin: 0,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '16px',
          color: '#444',
          margin: '8px 0 12px',
          lineHeight: '1.4',
        }}
      >
        {description}
      </p>

      <div
        style={{
          fontSize: '12px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: '#999',
        }}
      >
        {category}
      </div>
    </div>
  </div>
</div>

{isHovered && (
  <motion.div
    initial={{ scale: 0, x: mousePos.x, y: mousePos.y }}
    animate={{ scale: 1, x: mousePos.x, y: mousePos.y }}
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
    </>
  );
};

export default WorkCard;
