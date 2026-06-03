import { useEffect } from "react";
import "../serviceMobile.css";
function Name() {
  useEffect(() => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
  }, []);

  return (
    <div style={{ overflowX: "hidden", position: "relative" }}>
      <style>{`
    .video-section { width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: visible; background: #ffffff; position: relative; z-index: 10; }
    html, body { overflow-x: hidden; scrollbar-width: none; }
    body::-webkit-scrollbar { display: none; }
    .scene { position: relative; min-height: 100vh; width: 100%; overflow: visible; }
    .marquee-wrapper { position: absolute; left: 0; top: 100%; transform: translateY(-50%); width: 100%; z-index: 100; overflow: visible; }
    .marquee-track { display: flex; width: max-content; animation: scroll 10s linear infinite; overflow: visible; }
    .marquee-text { font-size: 8vw; font-weight: 900; white-space: nowrap; padding-right: 5vw; color: black; overflow: visible; position: relative; z-index: 10; }
    @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    .top-section { display: flex; width: 100%; }
    .left { width: 65%; }
    .left h1 { font-size: 40px; font-weight: 900; text-transform: uppercase; line-height: 1.1; color: #000; padding-top: 150px; padding-left: 140px; letter-spacing: -1px; }
    .visit { margin-top:40px; margin-left:90px; font-size: 24px; font-weight: 900; padding-left: 50px; text-transform: uppercase; cursor: pointer; }
    .visit:hover { text-decoration: underline; }
    .right { width: 30%; padding-top: 150px; padding-left: 100px; }
    .block { margin-bottom: 50px; }
    .block h3 { font-size: 20px; font-weight: 900; text-transform: uppercase; margin: 0;color: #000000; }
    .block p { font-size: 22px; color: #000000;font-weight: 900; }
    @media (max-width: 900px) {
      .top-section { flex-direction: column; padding-left: 10px; }
      .left, .right { width: 100%; padding: 0; }
        .left h1 { margin-left:1px;font-size: 32px; padding: 0; line-height: 1.2; }

      .visit { font-size: 18px; padding: 0; margin-top: 20px; }
      .right { margin-top: 30px; padding-left: 0; }
      .block { margin-bottom: 25px; }
      .block h3 { font-size: 16px; }
      .block p { font-size: 14px; }
      .video-section { height: 70vh; }
      .marquee-text { font-size: 12vw; }
    }
      `}</style>

      <div className="scene">
        <div className="video-section">
          <div className="w-[500px] h-[200px] overflow-hidden rounded-xl shadow-lg bg-black relative">
            <video
              src="https://framerusercontent.com/assets/OwOLGrA0k8eGBFJqXhNmfnXm784.mp4"
              autoPlay loop muted playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
            />
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              <div className="marquee-text">REACH THE PEOPLE THAT MATTER REACH THE PEOPLE THAT MATTER REACH THE PEOPLE THAT MATTER REACH THE PEOPLE THAT MATTER </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-section">
        <div className="left">
          <h1>Distribution turns creative work into business results. We help brands connect content, campaigns, and audiences through strategic distribution and performance-focused execution.</h1>
          <div className="visit">lets chat→</div>
        </div>
        <div className="right">
          <div className="block"><h3>Industry</h3><p>Marketing / Growth</p></div>
          <div className="block"><h3>Services</h3><p>Paid Media
Campaign Management
Audience Targeting
Distribution Strategy
Reporting & Analytics
Performance Optimisation</p></div>
          <div className="block"><h3>Year</h3><p>2026</p></div>
        </div>
      </div>
    </div>
  );
}

export default Name;
