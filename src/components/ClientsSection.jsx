import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import courageVid from "../assets/videos/clients-courage.mp4";
import curiosityVid from "../assets/videos/clients-curiosity.mp4";
import attentionVid from "../assets/videos/clients-attention.mp4";

const clients = [
  { name: "CRAFT" },
  { name: "WONDER" },
  { name: "COURAGE", media: courageVid },
  { name: "CURIOSITY", media: curiosityVid },
  { name: "ATTENTION", media: attentionVid },
];

const ClientsSection = () => {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const activeMedia = hovered != null && !!clients[hovered].media;

  return (
    <section className="clients-section" ref={ref} onMouseMove={onMove}>
      <p className="clients-label"></p>

      {/* Floating media that follows the cursor (behind the type) */}
      <motion.div
        className="hover-media"
        initial={false}
        animate={{
          x: pos.x,
          y: pos.y,
          opacity: activeMedia ? 0.95 : 0,
          scale: activeMedia ? 1 : 0.92,
        }}
        transition={{
          x: { type: "spring", stiffness: 150, damping: 18 },
          y: { type: "spring", stiffness: 150, damping: 18 },
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 },
        }}
      >
        {clients.map((c, i) =>
          c.media ? (
            <video
              key={i}
              src={c.media}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ opacity: hovered === i ? 1 : 0 }}
            />
          ) : null
        )}
      </motion.div>

      <div className="clients-list">
        {clients.map((client, index) => (
          <div
            key={index}
            className="client-item"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered((h) => (h === index ? null : h))}
          >
            <h1 className={`client-text ${hovered === index ? "active" : ""}`}>
              {client.name}
            </h1>
          </div>
        ))}
      </div>

      <style>{`
        .clients-section {
          background: #fff;
          padding: 120px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .clients-list { position: relative; z-index: 3; }
        .client-item { position: relative; z-index: 3; }
        .clients-label { font-size: 30px; margin-bottom: 40px; }

        .client-text {
          font-size: clamp(30px, 5vw, 100px);
          font-weight: 900;
          margin: 0;
          color: #000;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        /* 🔥 Gradient text on hover */
        .client-text.active {
          background: linear-gradient(90deg, #cbee1d 0%, #cbee1d 70%, #2f00ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        /* 🔥 Floating media — follows cursor, sits behind the type */
        .hover-media {
          position: absolute;
          top: 0;
          left: 0;
          width: 420px;
          height: 280px;
          margin-left: -210px;   /* center on cursor */
          margin-top: -140px;
          border-radius: 18px;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
          will-change: transform, opacity;
        }
        .hover-media video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
        }

        /* hover is a desktop interaction */
        @media (max-width: 768px) {
          .hover-media { display: none; }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
