import React, { useState } from "react";
import "../serviceMobile.css";
import svc3v1 from "../../../assets/videos/svc3-1.mp4";
import svc3v2 from "../../../assets/videos/svc3-2.mp4";
import svc3v3 from "../../../assets/videos/svc3-3.mp4";
import svc3v4 from "../../../assets/videos/svc3-4.mp4";
import svc3v5 from "../../../assets/videos/svc3-5.mp4";
import UIUX from "../../../assets/UIUX.mp4";
import service3 from "../../../assets/img/svc3-still.webp";


const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        <h2 className={`accordion-title ${isOpen ? "active" : ""}`}>
          {title}
        </h2>

        <div className="toggle-btn">
          {isOpen ? "−" : "+"}
        </div>
      </div>

      <div className={`accordion-content ${isOpen ? "show" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};
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

      {/* 🔥 TOP CONTENT */}
     

      {/* 🔥 PLANE VIDEO BELOW CONTENT */}
      <div className="info-video-section">
  <div className="media-row">
    
    {/* VIDEO */}
    <div className="media-box">
      <img
  src={service3}
  alt="Service"
  style={{
    width: "100%",
    height: "130%",
    objectFit: "cover",
  }}
/>
    </div>

   

  </div>
  
</div>
      
<div className="accordion-container">
  <AccordionItem
  title="THE CHALLENGE"
  content={`Most businesses know they need content.

What they don't have is the time, production capability, or internal resources to create it consistently. Content becomes reactive, quality varies, and momentum disappears between campaigns.`}
  isOpen={openIndex === 0}
  onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
/>

<AccordionItem
  title="OUR SOLUTION"
  content={`We build production systems, not one-off assets.

From podcast recording and video production to editing, motion, and content repurposing, we help brands create a steady stream of content without managing multiple vendors or freelancers.

One team. One workflow. Consistent output.`}
  isOpen={openIndex === 1}
  onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
/>
</div>
<div className="media-row">

  {/* VIDEO 1 */}

   <div className="media-box">
    <video
      src={svc3v1}
      autoPlay
      loop
      muted
      playsInline
    />
  </div>


  <div className="media-box">
   <img 
   src={service3}
   alt="Service 3"
   style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
   />
  </div>

  {/* VIDEO 2 */}
  <div className="media-box">
   <video
      src={svc3v1}
      autoPlay
      loop
      muted
      playsInline
    />
    
  </div>

 

</div>
<div>
  <div style={{ 
    fontWeight: "900", 
    fontSize: "28px", 
    marginBottom: "20px" ,
    marginTop:"80px",
    padding:"30px"

  }}>
    SOME FACTS
  </div>

  <p style={{ 
    fontWeight: "700", 
    lineHeight: "2.2", 
    fontSize: "21px" ,
    padding:"30px"



  }}>
   Podcast Production

Recording, editing, publishing, and content repurposing.

Video Production

Interviews, branded content, social media, events, and campaigns.

Motion Graphics

Animation and motion content designed for engagement and clarity.

Content Production

Written, visual, and multimedia assets built for distribution.

Creative Direction

Ensuring every asset aligns with the brand and the brief.

Asset Management

Organising, versioning, and delivering content for long-term use.

    <br /><br />

    A reliable content engine that keeps producing long after launch.
  </p>
</div>

<video
  src={svc3v2}
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: "100%",
    height: "100vh",   // 🔥 full screen height
    objectFit: "cover",
    display: "block",
    paddingTop:"80px"
  }}
/>

<video
  src={svc3v3}
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: "100%",
    height: "100vh",   // 🔥 full screen height
    objectFit: "cover",
    display: "block",
    paddingTop:"80px"
  }}
/>

{/* <div className="last-video-row">
  <video
    // src={svc3v4}
    autoPlay
    loop
    muted
    playsInline
    className="video-left"
  />

  <video
    // src={svc3v5}
    autoPlay
    loop
    muted
    playsInline
    className="video-right"
  />
</div> */}

    </div>

    
  );
}