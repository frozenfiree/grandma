import insE1 from "../assets/videos/insight-editorial-1.mp4";
import insE2 from "../assets/videos/insight-editorial-2.mp4";
import sigEditorial from "../assets/videos/signature-editorial-loop.mp4";
import { useEffect, useState } from "react";
import InsightPageScroll from "./InsightPageScroll";

const processes = [
  {
    step: "2021",
    title: "RESEARCH PHASE",
    desc: "Explored emerging 3D web technologies and interactive digital systems.",
    color: "#dbff00"
  },
  {
    step: "2022",
    title: "PROTOTYPE DEVELOPMENT",
    desc: "Built first WebGL prototypes and tested immersive UI experiences.",
    color: "#0066FF"
  },
  {
    step: "2023",
    title: "BETA LAUNCH",
    desc: "Released platform to early adopters and gathered real-world feedback.",
    color: "#ff3366"
  },
  {
    step: "2024",
    title: "GLOBAL EXPANSION",
    desc: "Scaled system for enterprise clients and global deployment.",
    color: "#00ffcc"
  },
  {
    step: "2025",
    title: "AI INTEGRATION",
    desc: "Integrated AI systems for predictive and adaptive user experiences.",
    color: "#ffaa00"
  }
];

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <h2>{count}{suffix}</h2>;
}

export default function InsightPage() {

    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerSection = document.querySelector(".video-row");

      if (!triggerSection) return;

      const rect = triggerSection.getBoundingClientRect();

      // when section enters screen
      if (rect.top <= window.innerHeight * 0.4) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return ( <div>
    <div className={`main-page ${darkMode ? "dark-mode" : ""}`}>

      {/* HERO SECTION */}
      <div className="hero-content">
        <div className="hero-title">
          <h1>
            Insights That <br />
            <span>Shape Tomorrow</span>
          </h1>
        </div>

        <div className="hero-text">
          <p>
            Explore cutting-edge research, industry trends, and expert
            perspectives on the future of digital interaction.
          </p>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="stats-section">
        <div className="stat-box">
          <Counter end={150} suffix="+" />
          <p>Research Papers</p>
        </div>

        <div className="stat-box">
          <Counter end={50} suffix="K+" />
          <p>Active Readers</p>
        </div>

        <div className="stat-box">
          <Counter end={24} suffix="+" />
          <p>Industry Reports</p>
        </div>

        <div className="stat-box">
          <Counter end={15} />
          <p>Expert Contributors</p>
        </div>
      </div>

      <style>{`
       * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-page {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  color: #000;
  transition: background 0.6s ease, color 0.6s ease;
}

/* DARK MODE */
.main-page.dark-mode {
  background: #000;
  color: #fff;
}

/* HERO TEXT */
.main-page.dark-mode .hero-title h1,
.main-page.dark-mode .hero-title span,
.main-page.dark-mode .hero-text p,
.main-page.dark-mode .marquee-text,
.main-page.dark-mode .stat-box h2,
.main-page.dark-mode .stat-box p {
  color: #fff !important;
}

/* STATS BORDER */
.main-page.dark-mode .stat-box {
  border-right: 1px solid rgba(255,255,255,0.15);
}

/* VIDEO TEXT SIDE */
.main-page.dark-mode .video-info {
  background: #111;
}

.main-page.dark-mode .video-info h3 {
  color: #fff;
}

.main-page.dark-mode .video-info p {
  color: #bbb;
}

/* MARQUEE BG */
.main-page.dark-mode .marquee-wrapper {
  background: #000;
}
html, body {
  width: 100%;
  overflow-x: hidden;
  background: #fff;
}
        #root {
          background: #ffffff;
          min-height: 100vh;
        }

        .main-page {
  width: 100%;
  min-height: 90vh;
  background: #fff;
}

        /* HERO */
        .hero-content {
          width: 100%;
          margin-top: 300px;
          padding: 0 210px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
        }

        .hero-title h1 {
          font-size: 80px;
          font-weight: 900;
          color: #000;
          margin: 0;
        }

        .hero-title span {
          color: #000;
        }

        .hero-text p {
          font-size: 34px;
          line-height: 1.7;
          color: #333;
          max-width: 650px;
          text-align: right;
          margin: 0;
        }

        /* STATS */
        .stats-section {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 80px 60px;
          margin-top: 100px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .stat-box {
          flex: 1;
          min-width: 200px;
          text-align: center;
          border-right: 1px solid #eee;
        }

        .stat-box:last-child {
          border-right: none;
        }

        .stat-box h2 {
          font-size: 72px;
          font-weight: 900;
          color: #000;
          margin: 0 0 12px 0;
        }

        .stat-box p {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            padding: 0 24px;
            margin-top: 180px;
          }

          .hero-title h1 {
            font-size: 52px;
          }

          .hero-text p {
            font-size: 18px;
            text-align: left;
          }

          .stats-section {
            padding: 50px 20px;
            gap: 40px;
          }

          .stat-box {
            border-right: none;
            border-bottom: 1px solid #eee;
            padding-bottom: 30px;
          }

          .stat-box:last-child {
            border-bottom: none;
          }

          .stat-box h2 {
            font-size: 48px;
          }
        }
      `}</style>
<div className="marquee-wrapper">
  <div className="marquee-track">
    <span className="marquee-item">
      Insights • Innovation • Future of Web • AI Driven Design • Immersive Experiences • Digital Transformation • Real-time Systems • Next Gen UI •
    </span>
    <span className="marquee-item">
      Insights • Innovation • Future of Web • AI Driven Design • Immersive Experiences • Digital Transformation • Real-time Systems • Next Gen UI •
    </span>
  </div>
</div>
<style>{
`
.marquee-wrapper {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
  display: flex;
  align-items: center;
}

.marquee-track {
  display: inline-flex;
  white-space: nowrap;
  min-width: max-content;
  will-change: transform;
  animation: marquee 25s linear infinite;
}

.marquee-item {
  flex-shrink: 0;
  white-space: nowrap;
  padding-right: 50px;
  font-size: clamp(32px, 6vw, 84px);
  font-weight: 900;
  line-height: 1;
  color: #000;
}

/* smooth scroll */
@keyframes marquee {
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(-50%,0,0);
  }
}

/* mobile */
@media (max-width: 768px) {
  .marquee-wrapper {
    padding: 12px 0;
  }

  .marquee-item {
    font-size: 26px;
    padding-right: 30px;
  }

  .marquee-track {
    animation-duration: 18s;
  }
}
`}</style>

<div className="video-row">

  {/* VIDEO 1 */}
  <div className="video-card card1">
    <video autoPlay muted loop playsInline>
      <source src={insE1} />
    </video>

    <div className="video-info">
      <h3>Immersive Web</h3>
      <p>Next-generation interactive web experiences powered by 3D and motion design.</p>
    </div>
  </div>

  {/* VIDEO 2 */}
  <div className="video-card card2">
    <video autoPlay muted loop playsInline>
      <source src={sigEditorial} />
    </video>

    <div className="video-info">
      <h3>Future of AI</h3>
      <p>Exploring how artificial intelligence is shaping modern digital experiences.</p>
    </div>
  </div>

  {/* VIDEO 3 */}
  <div className="video-card card3">
    <video autoPlay muted loop playsInline>
      <source src={insE2} />
    </video>

    <div className="video-info">
      <h3>Digital Innovation</h3>
      <p>How modern design systems are redefining user engagement and storytelling.</p>
    </div>
  </div>

</div>

<style>{`.video-row {
  width: 100%;
  padding: 140px 80px;
  display: flex;
  flex-direction: column;
  gap: 160px;
}

/* BASE CARD */
.video-card {
  width: 80%;
  display: flex;
  background: #000;
  overflow: hidden;
}

/* VIDEO */
.video-card video {
  width: 65%;
  height: 800px;
  object-fit: cover;
}

/* TEXT */
.video-info {
  width: 35%;
  background: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 🔥 VIDEO 1 (LEFT) */
.card1 {
  align-self: flex-start;
}

/* 🔥 VIDEO 2 (SHIFT RIGHT + REVERSE) */
.card2 {
  align-self: flex-end;
  flex-direction: row-reverse;
}

/* 🔥 VIDEO 3 (CENTER) */
.card3 {
  align-self: center;
  width: 90%;
  flex-direction: row;
}

/* BIGGER 3RD VIDEO */
.card3 video {
  height: 950px;
}

/* TEXT STYLE */
.video-info h3 {
  font-size: 68px;
  font-weight: 900;
  margin-bottom: 20px;
  color: #000;
 
}

.video-info p {
  font-size: 38px;
  line-height: 1.8;
  color: #555;
}

/* MOBILE */
@media (max-width: 768px) {

  .video-card {
    width: 100%;
    flex-direction: column !important;
    align-self: stretch !important;
  }

  .video-card video {
    width: 100%;
    height: 360px;
  }

  .video-info {
    width: 100%;
    padding: 24px;
  }
}`}</style>



 </div>
<section className={`newsletter-section main-page ${darkMode ? "dark-mode" : "light-mode"}`}>

  <div className="newsletter-box">

    <div className="newsletter-text">

      <div>
        <h2>
          Stay <span>Insightful</span>
        </h2>
      </div>

      <div>
        <p>
          Get weekly insights delivered to your inbox
        </p>
      </div>

    </div>

    <div className="newsletter-form">

      <input
        type="email"
        placeholder="Enter your email"
      />

      <button>
        Subscribe →
      </button>

    </div>

  </div>

  <style>{`

    .newsletter-section{
      width:100%;
      padding:140px 80px;
      background:#000;
      display:flex;
      justify-content:center;
      align-items:center;
    }

    .newsletter-box{
      width:100%;
      max-width:1400px;

      display:flex;
      justify-content:space-between;
     margin-top:-20px;

      gap:120px;
    }

    /* LEFT SIDE */
    .newsletter-text{
      flex:1;

      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      align-items:flex-start;
    }

    .newsletter-box h2{
      font-size:88px;
      line-height:0.95;
      font-weight:900;
      color:#fff;
      letter-spacing:-4px;
      margin:0 0 30px 0;
    }

    .newsletter-box h2 span{
      color:#fff;
    }

    .newsletter-box p{
      font-size:30px;
      line-height:1.6;
      color:rgba(255,255,255,0.7);
      margin:0;
      max-width:420px;
    }

    /* RIGHT SIDE */
 .newsletter-form{
  flex:1;

  display:flex;
  align-items:center;

  border-bottom:1px solid rgba(255,255,255,0.2);

  padding-bottom:1px;

  margin-right:-60px;

  position: relative;
  top: -60px;
}
    .newsletter-form input{
      flex:1;

      background:transparent;
      border:none;
      outline:none;

      color:#fff;

      font-size:25px;
      font-weight:500;

      height:60px;
    }

    .newsletter-form input::placeholder{
      color:rgba(255,255,255,0.45);
      
    }

    .newsletter-form button{
      background:transparent;
      border:none;
      outline:none;
      
      

      color:#fff;

      font-size:18px;
      font-weight:700;

      cursor:pointer;

      transition:0.3s ease;
      white-space:nowrap;
    }

    .newsletter-form button:hover{
      opacity:0.7;
    }

    /* MOBILE */
    @media (max-width:768px){

      .newsletter-section{
        padding:100px 24px;
      }

      .newsletter-box{
        flex-direction:column;
        align-items:flex-start;
        margin-top:0px;
        gap:60px;
      }

      .newsletter-box h2{
        font-size:52px;
        letter-spacing:-2px;
      }

      .newsletter-box p{
        font-size:16px;
      }

      
  .newsletter-form{
    width:100%;
    display:flex;
    flex-direction:column;   /* makes input + button vertical */
    align-items:flex-start;
    gap:20px;
    margin-right:0;
    top:0;
    border-bottom:none;
  }

     .newsletter-form input{
    width:100%;
    font-size:16px;
    height:55px;
    border-bottom:1px solid rgba(255,255,255,0.2);
  }

     
  .newsletter-form button{
    font-size:16px;
    width:auto;
    border:2px solid rgba(255, 255, 255, 0.2);
    padding: 8px 20px;
  }

    }

    @media (max-width: 768px) {

  .hero-content {
    flex-direction: column;
    padding: 0 20px;
    margin-top: 140px;
    gap: 30px;
  }

  .hero-title h1 {
    font-size: 42px;
    line-height: 1.1;
  }

  .hero-text p {
    font-size: 18px;
    text-align: left;
    max-width: 100%;
    line-height: 1.6;
  }

  .stats-section {
    flex-direction: column;
    padding: 40px 20px;
    gap: 30px;
    margin-top: 60px;
  }

  .stat-box {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
    padding-bottom: 25px;
  }

  .stat-box:last-child {
    border-bottom: none;
  }

  .stat-box h2 {
    font-size: 42px;
  }

  .stat-box p {
    font-size: 12px;
  }
}

@media (max-width: 768px) {

  .video-row {
    padding: 60px 20px;
    gap: 50px;
  }

  .video-card {
    width: 100%;
    flex-direction: column !important;
    align-self: stretch !important;
  }

  .video-card video {
    width: 100%;
    height: 260px;
  }

  .video-info {
    width: 100%;
    padding: 20px;
  }

  .video-info h3 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .video-info p {
    font-size: 16px;
    line-height: 1.6;
  }

  .card3 video {
    height: 260px;
  }
}

  `}</style>

</section>
  </div>
  
       );
}