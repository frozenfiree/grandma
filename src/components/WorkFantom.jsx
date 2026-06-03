import { motion } from "framer-motion";

export default function WorkFantom() {
  return (
    <section className="podcast-soon">
      <div className="podcast-inner">
        <motion.p className="podcast-eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          (THE PODCAST)
        </motion.p>
        <motion.h1 className="podcast-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          The studio is<br />warming up.
        </motion.h1>
        <motion.p className="podcast-sub" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          We are building a room for the conversations the market actually needs — founders, operators and the people feeding the trends. Launching soon.
        </motion.p>
        <motion.div className="podcast-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}>
          <span className="podcast-dot" />
          COMING SOON
        </motion.div>
      </div>

      <div className="podcast-marquee">
        <div className="podcast-marquee-track">
          <span>Don't Follow Trends. Feed Them.  ✦  Don't Follow Trends. Feed Them.  ✦ </span>
          <span>Don't Follow Trends. Feed Them.  ✦  Don't Follow Trends. Feed Them.  ✦ </span>
        </div>
      </div>

      <style>{`
        .podcast-soon {
          min-height: 100vh;
          margin-top:100px;
          background: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding: 160px 0 0;
        }
        .podcast-inner {
          padding: 0 clamp(24px, 8vw, 140px);
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .podcast-eyebrow {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 4px;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .podcast-title {
          font-size: clamp(48px, 9vw, 150px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -3px;
          margin: 0 0 32px;
          color: #fff;
        }
        .podcast-sub {
          font-size: clamp(18px, 2vw, 28px);
          line-height: 1.5;
          max-width: 700px;
          color: rgba(255,255,255,0.7);
          margin: 0 0 40px;
        }
        .podcast-status {
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 3px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #fff;
        }
        .podcast-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #000000;
          display: inline-block;
          animation: podcastPulse 1.4s ease-in-out infinite;
        }
        @keyframes podcastPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        .podcast-marquee {
          width: 100%;
          overflow: hidden;
          padding: 40px 0;
          border-top: 1px solid rgba(255,255,255,0.12);
          margin-top: 80px;
        }
        .podcast-marquee-track {
          display: inline-flex;
          white-space: nowrap;
          animation: podcastScroll 30s linear infinite;
        }
        .podcast-marquee-track span {
          font-size: clamp(36px, 7vw, 90px);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -2px;
          color: #fff;
          padding-right: 40px;
        }
        @keyframes podcastScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .podcast-soon { padding-top: 120px; }
          .podcast-marquee { margin-top: 50px; }
        }
      `}</style>
    </section>
  );
}
