import s4w1 from "../../../assets/videos/service4-webgl-1.mp4";
import s4w2 from "../../../assets/videos/service4-webgl-2.mp4";
import s4w3 from "../../../assets/videos/service4-webgl-3.mp4";
import s4w4 from "../../../assets/videos/service4-webgl-4.mp4";
import s4w5 from "../../../assets/videos/service4-webgl-5.mp4";
import sigAbstract from "../../../assets/videos/signature-abstract-loop.mp4";
import React, { useState } from "react";
import "../serviceMobile.css";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={onClick}>
      <h2 className={`accordion-title ${isOpen ? "active" : ""}`}>{title}</h2>
      <div className="toggle-btn">{isOpen ? "−" : "+"}</div>
    </div>
    <div className={`accordion-content ${isOpen ? "show" : ""}`}>
      <p>{content}</p>
    </div>
  </div>
);

export default function Info() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container">
      <style>{`
        * { margin: 0; box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; }
        .container { width: 100% !important; max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
      .video-section {
  width: 100%;
  margin-top: 0;
  position: relative;
}
        .video-section video { width: 100%; height: 100%; object-fit: cover; }
        .accordion-container { margin-top: 80px; padding-right: 500px; }
        .accordion-item { border-top: 1px solid #999; padding: 40px 0; }
        .accordion-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .accordion-title { font-size: 28px; font-weight: 800; letter-spacing: -1px; padding-left: 20px; margin: 0; transition: color 0.3s ease; }
        .accordion-title.active { color: #000; }
        .toggle-btn { width: 70px; height: 70px; background: #dfff00; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; transition: all 0.3s ease; }
        .accordion-content { display: none; padding-right: 50px; }
        .accordion-content.show { display: block; }
        .accordion-content p { font-size: 24px; line-height: 1.7; font-weight: 700; padding-left: 20px; }
      .media-row {
  width:100%;
  height:100vh;
  overflow:hidden;
}
    .media-box {
  width:100%;
  height:100vh;
  overflow:hidden;
}
       .media-box video,
.media-box img {
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
        .link-box { background: #dbff00; }
        .media-link { font-size: 24px; font-weight: 900; color: #000; text-decoration: none; text-transform: uppercase; transition: all 0.3s ease; }
        .media-link:hover { transform: translateX(10px); }
        .last-video-row { display: flex; gap: 70px; margin: 30px; align-items: flex-start; padding: 30px; }
        .video-left { width: 55%; height: 120vh; object-fit: cover; }
        .video-right { width: 45%; height: 50vh; object-fit: cover; margin-left: -40px; }
        @media (max-width: 900px) {
          .accordion-container { padding: 0 20px; }
          .accordion-title { font-size: 28px; padding-left: 20px; }
          .toggle-btn { width: 50px; height: 50px; font-size: 28px; }
          .accordion-content p { font-size: 24px; line-height: 1.7; font-weight: 400; }
          .media-row { flex-direction: column; height: auto; gap: 15px; padding: 15px; }
          .media-box { height: 300px; }
          .last-video-row { flex-direction: column; gap: 20px; }
          .video-left, .video-right { width: 100%; height: 50vh; margin-left: 0; }
          .video-section { height: 100vh; }
        }
      `}</style>

      <div className="video-section">
        <div className="media-row">
          <div className="media-box">
            <video src={s4w5} autoPlay loop muted playsInline />
          </div>
          {/* <div className="media-box">
            <video src={sigAbstract} autoPlay loop muted playsInline />
          </div> */}
        </div>
      </div>

      <div className="accordion-container">
        <AccordionItem
          title="THE CHALLENGE"
          content="Building immersive 3D experiences on the web requires mastering complex rendering pipelines, shader programming, and performance optimization to ensure smooth experiences across all devices and browsers."
          isOpen={openIndex === 0}
          onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
        />
        <AccordionItem
          title="OUR SOLUTION"
          content="We leverage cutting-edge WebGL technologies including Three.js and Babylon.js to craft visually stunning, high-performance 3D web experiences. Our team optimizes every shader and geometry to deliver buttery-smooth interactions that captivate users and elevate your brand."
          isOpen={openIndex === 1}
          onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
        />
      </div>

      <div className="media-row">
        <div className="media-box">
          <video src={s4w1} autoPlay loop muted playsInline />
        </div>
        <div className="media-box">
          <video src={s4w3} autoPlay loop muted playsInline />
        </div>
        <div className="media-box link-box">
          <a href="/work" className="media-link">VIEW PROJECT →</a>
        </div>
      </div>

      <div>
        <div style={{ fontWeight: "900", fontSize: "28px", marginBottom: "20px", marginTop: "80px", padding: "30px" }}>SOME FACTS</div>
        <p style={{ fontWeight: "700", lineHeight: "2.2", fontSize: "21px", padding: "30px" }}>
          WebGL opens up a new dimension of storytelling on the web. Our team has delivered over 50 immersive 3D web experiences for global brands, from interactive product configurators to full-screen particle systems that respond to user input in real time.
          <br /><br />
          Every project we build is optimized for performance — we ensure 60fps rendering on modern hardware while gracefully degrading for older devices, so your audience always gets the best possible experience.
        </p>
      </div>

      <div className="last-video-row">
        <video src={s4w2} autoPlay loop muted playsInline className="video-left" />
        <video src={s4w4} autoPlay loop muted playsInline className="video-right" />
      </div>
    </div>
  );
}
