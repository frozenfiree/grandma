import sigAbstract from "../../../assets/videos/signature-abstract-loop.mp4";
import sigTech from "../../../assets/videos/signature-tech-loop.mp4";
import sigBrand from "../../../assets/videos/signature-brand-loop.mp4";
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
        html, body { margin: 0; padding: 0; overflow-x: hidden; scrollbar-width: none; }
        body::-webkit-scrollbar { display: none; }
        .container { width: 100% !important; max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
        .video-section { width: 100%; height: 140vh; margin-top: 0; position: relative; }
        .video-section video { width: 100%; height: 100%; object-fit: cover; }
        .accordion-container { margin-top: 80px; padding-right: 500px; }
        .accordion-item { border-top: 1px solid #999; padding: 40px 0; }
        .accordion-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .accordion-title { font-size: 28px; font-weight: 800; letter-spacing: -1px; padding-left: 20px; margin: 0; transition: color 0.3s ease; }
        .accordion-title.active { color: #000; }
        .toggle-btn { width: 70px; height: 70px; background: #dfff00; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; }
        .accordion-content { display: none; padding-right: 50px; }
        .accordion-content.show { display: block; }
        .accordion-content p { font-size: 24px; line-height: 1.7; font-weight: 700; padding-left: 20px; }
        .media-row { display: flex; width: 100%; height: 700px; gap: 20px; padding: 20px; }
        .media-box { flex: 1; height: 100%; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .media-box video, .media-box img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .link-box { background: #dbff00; }
        .media-link { font-size: 24px; font-weight: 900; color: #000; text-decoration: none; text-transform: uppercase; transition: all 0.3s ease; }
        .media-link:hover { transform: translateX(10px); }
        @media (max-width: 900px) {
          .accordion-container { padding: 0 20px; }
          .accordion-title { font-size: 28px; padding-left: 20px; }
          .toggle-btn { width: 50px; height: 50px; font-size: 28px; }
          .accordion-content p { font-size: 24px; line-height: 1.7; font-weight: 400; }
          .media-row { flex-direction: column; height: auto; gap: 15px; padding: 15px; }
          .media-box { height: 300px; }
          .video-section { height: 100vh; }
        }
      `}</style>

      <div className="video-section">
        <div className="media-row">
          <div className="media-box"><video src={sigAbstract} autoPlay loop muted playsInline /></div>
          <div className="media-box"><video src={sigTech} autoPlay loop muted playsInline /></div>
        </div>
      </div>

      <div className="accordion-container">
        <AccordionItem
          title="THE CHALLENGE"
          content="Building mobile apps that feel native on both iOS and Android while maintaining a single codebase is a complex engineering challenge. Users expect fast, fluid, and intuitive experiences that match the platform's design language."
          isOpen={openIndex === 0}
          onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
        />
        <AccordionItem
          title="OUR SOLUTION"
          content="We use React Native and Flutter to build cross-platform apps that deliver native performance without the overhead of maintaining two separate codebases. Our mobile UI/UX specialists ensure every interaction feels natural and every screen is optimized for the device it runs on."
          isOpen={openIndex === 1}
          onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
        />
      </div>

      <div className="media-row">
        <div className="media-box"><video src={sigBrand} autoPlay loop muted playsInline /></div>
        <div className="media-box"><video src={sigAbstract} autoPlay loop muted playsInline /></div>
        <div className="media-box link-box"><a href="/work" className="media-link">VIEW PROJECT →</a></div>
      </div>

      <div>
        <div style={{ fontWeight: "900", fontSize: "28px", marginBottom: "20px", padding: "30px" }}>SOME FACTS</div>
        <p style={{ fontWeight: "700", lineHeight: "2.2", fontSize: "21px", padding: "30px" }}>
          Mobile now accounts for over 60% of global web traffic. Our apps have been downloaded over 500,000 times across the App Store and Google Play, with an average rating of 4.8 stars.
          <br /><br />
          We don't just build apps — we build products that grow with your business. From MVP to enterprise scale, our architecture decisions ensure your app can handle whatever comes next.
        </p>
      </div>

      <video src={sigTech} autoPlay loop muted playsInline
        style={{ width: "100%", height: "100vh", objectFit: "cover", display: "block", paddingTop: "80px" }} />
      <video src={sigBrand} autoPlay loop muted playsInline
        style={{ width: "100%", height: "100vh", objectFit: "cover", display: "block", paddingTop: "80px" }} />
    </div>
  );
}
