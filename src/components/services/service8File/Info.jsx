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

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="container">
      <style>{`
        * { margin: 0; box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; scrollbar-width: none; }
        body::-webkit-scrollbar { display: none; }
        .container { width: 100% !important; max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
        .video-section { width: 100%; height: 100vh; margin-top: 80px; position: relative; }
        .video-section video { width: 100%; height: 100%; object-fit: cover; }
        .accordion-container { width: 100%; padding-right: 350px; margin-top: 90px; }
        .accordion-item { border-top: 1px solid #999; padding: 40px 0; }
        .accordion-item:last-child { border-bottom: 1px solid #e5e5e5; }
        .accordion-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .accordion-title { font-size: 28px; font-weight: 800; letter-spacing: -1px; padding-left: 40px; margin: 0; transition: color 0.3s ease; }
        .accordion-title.active { color: #000; }
        .toggle-btn { width: 70px; height: 70px; background: #dfff00; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; }
        .accordion-content { max-height: 0; overflow: hidden; padding: 0 20px; transition: max-height 0.25s ease; }
        .accordion-content.show { max-height: 500px; }
        .accordion-content p { font-size: 24px; line-height: 1.7; font-weight: 700; padding-left: 20px; }
        .media-section { width: 100%; display: flex; gap: 20px; padding: 20px; margin-top: 80px; box-sizing: border-box; }
        .box { flex: 1; height: 350px; border-radius: 1px; overflow: hidden; background: #000; }
        .box video, .box img { width: 100%; height: 100%; object-fit: cover; }
        .grid-section { width: 100%; padding: 80px 20px; box-sizing: border-box; }
        .grid-row { display: flex; gap: 20px; margin-bottom: 20px; }
        .grid-item { flex: 1; height: 450px; overflow: hidden; background: #000; display: flex; }
        .grid-item img, .grid-item video { width: 100%; height: 100%; object-fit: cover; display: block; }
        .griditem1{
        height: 850px;
        margin-bottom: 70px;
        }
        .gridrow2{
        height:550px;
        }
        @media (max-width: 900px) {
          .accordion-container { padding: 0 20px; }
          .accordion-title { font-size: 28px; padding-left: 20px; }
          .toggle-btn { width: 50px; height: 50px; font-size: 28px; }
          .accordion-content p { font-size: 16px; line-height: 1.4; }
          .media-section { flex-direction: column; gap: 15px; padding: 15px; }
          .box { width: 100%; height: 250px; }
          .grid-row { flex-direction: column; gap: 15px; padding: 40px 15px; }
          .grid-item { height: 400px; }
          .video-section { height: 60vh; }
        }
      `}</style>

      <div className="video-section">
        <video  src="https://cdn.coverr.co/videos/coverr-temp-examplemain-mp4-9501/1080p.mp4" autoPlay loop muted playsInline />
      </div>

      <div className="accordion-container">
        <AccordionItem
          title="THE CHALLENGE"
          content="They fail because teams move into production before the fundamentals are clear. Unclear positioning, fragmented user journeys, weak content structures, and untested assumptions create expensive problems later."
          isOpen={openIndex === 0}
          onClick={() => toggle(0)}
        />
        <AccordionItem
          title="OUR SOLUTION"
          content="From audience definition and information architecture to user journeys and product validation, we create the frameworks that guide design, development, content, and marketing decisions."
          isOpen={openIndex === 1}
          onClick={() => toggle(1)}
        />
      </div>



      <div className="grid-section">
        <div className="grid-row">
          <div className="grid-item griditem1"><video src="https://framerusercontent.com/assets/WQzI7vwv2bso1fYCNF49C4CmZuk.mp4" autoPlay loop muted playsInline /></div>
          <div className="grid-item"><video src={sigTech} autoPlay loop muted playsInline /></div>
        </div>
        <div className="grid-row gridrow2">
          <div className="grid-item"><video src={sigBrand} autoPlay loop muted playsInline /></div>
          <div className="grid-item"><video src={sigAbstract} autoPlay loop muted playsInline /></div>
        </div>
      </div>
    </div>
  );
}
