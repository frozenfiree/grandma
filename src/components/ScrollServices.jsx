import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextCounter from "./TextCounter";
import { ROUTES } from '../routes';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

const SERVICE_ROUTES_BY_ID = {
  1: ROUTES.SERVICE_1, 2: ROUTES.SERVICE_2, 3: ROUTES.SERVICE_3,
  4: ROUTES.SERVICE_4, 5: ROUTES.SERVICE_5, 6: ROUTES.SERVICE_6,
  7: ROUTES.SERVICE_7, 8: ROUTES.SERVICE_8, 9: ROUTES.SERVICE_9,
  10: ROUTES.SERVICE_10,
};

export default function ScrollServices({ services }) {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 18,
  });

  const angle = useTransform(smoothProgress, [0, 1], [0, Math.PI * 2]);

  const r1 = 80, r2 = 100, r3 = 60;
  const [hovered, setHovered] = useState(false);

  const cx1 = useTransform(angle, (a) => Math.cos(a) * r1);
  const cy1 = useTransform(angle, (a) => Math.sin(a) * r1);
  const cx2 = useTransform(angle, (a) => Math.cos(a + 1) * r2);
  const cy2 = useTransform(angle, (a) => Math.sin(a + 1) * r2);
  const cx3 = useTransform(angle, (a) => Math.cos(a + 2) * r3);
  const cy3 = useTransform(angle, (a) => Math.sin(a + 2) * r3);

  // Directly derive index from scroll position — works correctly both up and down
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const i = Math.min(
      services.length - 1,
      Math.floor(latest * services.length)
    );
    setActiveIndex(i);
  });

  return (
    <section
      ref={sectionRef}
      style={{
        height: `${services.length * 100}vh`,
        background: "#000",
        position: "relative",
      }}
    >
      {/* Sticky */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* 🔷 HEXAGON 1 */}
        <motion.div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: "#fff",
            opacity: 0.4,
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            top: "10%",
            left: "5%",
            x: cx1,
            y: cy1,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />

        {/* 🔷 HEXAGON 2 */}
        <motion.div
          style={{
            position: "absolute",
            width: "250px",
            height: "250px",
            background: "#fff",
            opacity: 0.4,
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            bottom: "10%",
            right: "10%",
            x: cx2,
            y: cy2,
          }}
          animate={{ rotate: [360, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />

        {/* 🔷 HEXAGON 3 */}
        <motion.div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            background: "#fff",
            opacity: 0.35,
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            bottom: "5%",
            left: "40%",
            x: cx3,
            y: cy3,
          }}
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        />

        {/* 🔥 CONTENT */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            padding: "20px",
            zIndex: 2,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                style={{
                  fontSize: "70px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                <TextCounter key={activeIndex} text={services[activeIndex].title} runOnceKey={services[activeIndex].title} />
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  color: "#ccc",
                  marginBottom: "20px",
                }}
              >
                {services[activeIndex].shortDesc}
              </p>

              <motion.button
  onClick={() => navigate(SERVICE_ROUTES_BY_ID[services[activeIndex].id] || ROUTES.SERVICES)}
  whileTap={{ scale: 0.95 }}
  style={{
    position: "relative",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "12px 32px",
    fontSize: "16px",
    marginTop: "10px",
    overflow: "visible",
  }}
>
  <svg
    viewBox="0 0 200 50"
    preserveAspectRatio="none"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      overflow: "visible",
    }}
  >
    <rect x="1" y="1" width="198" height="48"
      fill="transparent"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1"
    />
    <motion.rect
      x="1" y="1" width="198" height="48"
      fill="transparent"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="40 460"
      style={{ filter: "drop-shadow(0 0 4px #fff)" }}
      animate={{ strokeDashoffset: [0, -500] }}
      transition={{ duration: 4, ease: "linear", repeat: Infinity }}
    />
  </svg>
  Learn More →
</motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
