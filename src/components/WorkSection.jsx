import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import WorkCard from './WorkCard';
import UIUX2 from "../assets/UIUX2.mp4";
import MortionGrandma from "../assets/3dMortionGrandma.mp4";
import Home1 from "../assets/Home1.mp4";
import podcast from "../assets/podcast.mp4";
import sigEditorial from "../assets/videos/signature-editorial-loop.mp4";
import sigTech from "../assets/videos/signature-tech-loop.mp4";
import { ROUTES } from '../routes';

const workItems = [
  {
  id: 1,
  title: 'Gaandiva OS',
  description: 'A powerful CRM platform that helps businesses manage customer relationships, streamline sales pipelines, automate workflows, and drive growth through actionable insights.',
  category: 'CRM Platform',
  video: UIUX2,
  link: ROUTES.SERVICE_1
},
  {
  id: 2,
  title: 'Simplified Management',
  description: 'A project focused on simplifying management.',
  category: 'Management Platform',
  video: sigTech,
  link: ROUTES.WORK
},

{
  id: 3,
  title: 'GTM Publications',
  description: 'Five vertical newsrooms , MarTech, FinTech, HRTech, CyberTech, SalesTech',
  category: 'Media Network',
  video: sigEditorial,
  link: ROUTES.WORK_WING
},

{
  id: 4,
  title: 'Podcast Studio',
  description: 'Our studio is warming up. Launching soon!',
  category: 'Coming Soon',
  video: podcast,
  link: ROUTES.WORK_SWISHER
}
];

const WorkSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [pos, setPos] = useState({ x: 0, y: 0 });
const [hover, setHover] = useState(false);

const handleEnter = (e) => {
  setHover(true);
  updatePos(e);
};

const handleMove = (e) => {
  updatePos(e);
};

const handleLeave = () => {
  setHover(false);
};

const updatePos = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  setPos({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  });
};

  const handleMouseMove = useCallback((e) => {
    requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'none';
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    };
  }, [isHovered, handleMouseMove]);
const [bounce, setBounce] = useState({ x: 0, y: 0 });

const handleDirectionEnter = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const dx = x - centerX;
  const dy = y - centerY;

  // detect strongest side
  if (Math.abs(dx) > Math.abs(dy)) {
    // entered from left/right
    if (dx < 0) {
      setBounce({ x: 18, y: 0 }); // from left → push right
    } else {
      setBounce({ x: -18, y: 0 }); // from right → push left
    }
  } else {
    // entered from top/bottom
    if (dy < 0) {
      setBounce({ x: 0, y: 18 }); // from top → push down
    } else {
      setBounce({ x: 0, y: -18 }); // from bottom → push up
    }
  }

  // little shake return
  setTimeout(() => {
    setBounce({ x: 0, y: 0 });
  }, 180);
};

const resetPosition = () => {
  setBounce({ x: 0, y: 0 });
};
  return (
    <section id="work" className="py-5">
      <div style={{ width: "100%", padding: "10px", margin: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <p className="text-uppercase mb-3" style={{ fontFamily: "'Lay Grotesk - Trial Black', sans-serif", fontSize: '24px' ,marginLeft: '20px',
            
           }}>
            Selected Work
          </p>
        </motion.div>

       <div className="row g-4">
  {workItems.map((item, index) => (
    <motion.div
      key={item.id}
      className="col-12 col-md-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <WorkCard {...item} />
    </motion.div>
  ))}
</div>


        <div className="row mt-5">
          <div className="col-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="d-flex justify-content-end"
            >
 <motion.div
  className="work-more-wrapper"
  onMouseEnter={(e) => handleDirectionEnter(e)}
  onMouseLeave={() => resetPosition()}
  animate={{
    x: bounce.x,
    y: bounce.y
  }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 12
  }}
>
  <div className="work-more-content">
    <div className="fill-layer" />
    
    <div className="text-block">
     <h3 className="eager-text">
Lets raise the standard.
  <span className="eager-arrow"> &nbsp;&nbsp;&nbsp;&nbsp;   →</span>
</h3>
      <span className="work-link-text">
        the brands moving faster arnt doing it alone
      </span>
    </div>

  
  </div>
  
</motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ CLEAN SCROLLING TEXT (NO BG IMAGE) */}
      <div className="scrolling-text-container-with-bg">
        <div className="scrolling-text-wrapper">
          <div className="scrolling-text">
            Don't Follow Trends. Feed Them. &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;
            Don't Follow Trends. Feed Them. &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;
            Don't Follow Trends. Feed Them. &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;
            Don't Follow Trends. Feed Them. &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;


            
          </div>
          <div className="scrolling-text">
            Don't Follow Trends. Feed Them. &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;
            Don't Follow Trends. Feed Them. &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;
            Don't Follow Trends. Feed Them. &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;
            Don't Follow Trends. Feed Them. &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;

            
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      {isHovered && (
        <div
          style={{
            position: 'fixed',
            top: mousePos.y,
            left: mousePos.x,
            width: '40px',
            height: '40px',
            backgroundColor: '#0066FF',
            border: '2px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 99999,
          }}
        >
          <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold' }}>→</span>
        </div>
      )}

      <style>
        {`
          .work-more-wrapper {
  display: inline-block;
  cursor: pointer;
}
.eager-arrow {
  display: inline-block;
  margin-right: 12px;
  font-size: 36px;
  color: #bfff00; /* 🔥 neon green */
  transition: all 0.3s ease;
}
  .work-more-wrapper:hover .eager-arrow {
  color: #2979ff; /* 🔥 blue */
  transform: translateX(6px); /* small movement = premium feel */
}
  .eager-arrow {
  text-shadow: 0 0 10px rgba(191, 255, 0, 0.7);
}

.work-more-wrapper:hover .eager-arrow {
  text-shadow: 0 0 12px rgba(41, 121, 255, 0.8);
}
.work-more-content {
  position: relative;
  overflow: hidden;
  text-align: left;
  padding: 16px 24px;
}

/* 🔥 BLACK SWEEP EFFECT */
.work-more-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: #000;
  z-index: 0;
  transition: width 0.25s ease;
}

/* 🔥 ON HOVER → EXPAND */
.work-more-wrapper:hover .work-more-content::before {
  width: 100%;
}

/* 🔥 KEEP TEXT ABOVE */
.eager-text,
.work-link-text,
.work-link-arrow {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

/* 🔥 TEXT COLOR CHANGE */
.work-more-wrapper:hover .eager-text,
.work-more-wrapper:hover .work-link-text,
.work-more-wrapper:hover .work-link-arrow {
  color: #ffffff;
}


          .work-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
          }
.eager-text {
  font-size: 42px;
  margin-bottom: 10px;
  color: #111;
  font-family: "Lay Grotesk - Trial", "Archivo", sans-serif;
  font-weight: 400; /* light/regular */
  letter-spacing: -1px;
}

.work-link-text {
  font-size: 28px;
  color: #111;
  font-family: "Lay Grotesk - Trial Black", "Archivo", sans-serif;
  font-weight: 900; /* 🔥 thick bold */
  letter-spacing: -3px;
  text-transform: uppercase;
  line-height: 1.2;
}

          .work-link-arrow {
            font-size: 16px;
            color: #000;
          }

          /* ✅ CLEAN SCROLL SECTION */
          .scrolling-text-container-with-bg {
            width: 100%;
            height: 350px;
            overflow: hidden;
            margin-top: 60px;
            display: flex;
            align-items: center;
            background-color: #ffffff;
          }

          .scrolling-text-wrapper {
            display: flex;
            white-space: nowrap;
            animation: scrollText 40s linear infinite;
          }

          .scrolling-text {
            font-size: clamp(60px, 12vw, 120px);
            font-weight: 900;
            letter-spacing: -2px;
            color: #000000;
            font-family: 'Lay Grotesk - Trial Black', sans-serif;
            text-transform: uppercase;
          }

          @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
            
        `}
      </style>
    </section>
  );
};

export default WorkSection;