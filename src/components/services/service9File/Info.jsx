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
.info-video-section {
  width: 100%;
  height: fit-content;
  position: relative;
}

        .container {background-color:#ffffff; width: 100% !important; max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
        .video-section { width: 100%; height: 100vh; margin-top: 0; position: relative; }
        .video-section video { width: 100%; height: 100%; object-fit: cover; }
        .accordion-container {background-color:#ffffff; margin-top: 80px; padding-right: 500px; }
        .accordion-item { border-top: 1px solid #999; padding: 40px 0; }
        .accordion-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .accordion-title { font-size: 28px; font-weight: 800; letter-spacing: -1px; padding-left: 20px; margin: 0; transition: color 0.3s ease; }
        .accordion-title.active { color: #000; }
        .toggle-btn { width: 70px; height: 70px; background: #dfff00; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; transition: all 0.3s ease; }
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

      <div className="info-video-section">
        <div className="media-row" style={{ marginTop: 0 }}>
          <div className="media-box"><video src={sigBrand} autoPlay loop muted playsInline /></div>
          <div className="media-box"><video src={sigAbstract} autoPlay loop muted playsInline /></div>
        </div>
      </div>

      <div className="accordion-container">
        <AccordionItem
          title="THE CHALLENGE"
          content="Great work often goes unseen.

Many businesses invest heavily in strategy, design, and content but struggle to consistently reach the right audience. Without a clear distribution plan, campaigns lose momentum, budgets are wasted, and performance becomes difficult to measure."
          isOpen={openIndex === 0}
          onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
        />
        <AccordionItem
          title="OUR SOLUTION"
          content="We make sure the work gets where it needs to go.

From media planning and campaign execution to audience targeting and reporting, we build distribution systems that connect marketing activity to measurable business outcomes.

Every campaign is tracked, analysed, and improved over time."
          isOpen={openIndex === 1}
          onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
        />
      </div>

      <div className="media-row">
        <div className="media-box"><video src={sigTech} autoPlay loop muted playsInline /></div>
        <div className="media-box"><video src={sigBrand} autoPlay loop muted playsInline /></div>
        <div className="media-box link-box"><a href="/work" className="media-link">VIEW PROJECT →</a></div>
      </div>

      <div>
        <div style={{ fontWeight: "900", fontSize: "28px", marginBottom: "20px", marginTop: "80px", padding: "30px" }}>SOME FACTS</div>
        <p style={{ fontWeight: "700", lineHeight: "2.2", fontSize: "21px", padding: "30px" }}>
        Paid Media

Campaign planning and execution across digital channels.

Campaign Management

Launch, monitoring, optimisation, and reporting.

Audience Targeting

Reaching the right people at the right stage of the journey.

Distribution Strategy

Channel selection, content sequencing, and campaign planning.

Reporting & Analytics

Performance tracking tied to meaningful business metrics.

Performance Optimisation

Continuous improvement based on data and outcomes.
          <br /><br />
        The work reaches the people it was built for — and keeps improving over time.
        </p>
      </div>

      <div className="last-video-row">
        <video src={sigAbstract} autoPlay loop muted playsInline className="video-left" />
        <video src={sigTech} autoPlay loop muted playsInline className="video-right" />
      </div>
    </div>
  );
}
