import React, { useState } from "react";
import "../serviceMobile.css";


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

       *{
         margin:0;
         box-sizing:border-box;
         }

         html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
  /* 🔥 DESKTOP GRID (FIX THIS) */
.grid-section {
  width: 100%;
  padding: 80px 20px;
  box-sizing: border-box;
}

.grid-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
}

.grid-item {
  flex: 1;
  height: 450px;
  overflow: hidden;
  background: #000;
  display: flex;
}

/* Make media behave perfectly */
.grid-item img,
.grid-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
        
        /* 🔥 VIDEO SECTION BELOW CONTENT */
        .video-section {
  width: 100%;
  height: 140vh;
  margin-top: 0;   /* remove gap */
  position: relative;
}

        .video-section video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

     
          body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
}

.container {
  width: 100% !important;
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

.accordion-content {
  display: none;
  padding-right:50px;
}

/* Divider line */
.accordion-item {
  border-top: 1px solid #999;
  padding: 40px 0;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

/* Title */
.accordion-title {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -1px;
  padding-left:20px;
  
  margin: 0;
  transition: color 0.3s ease;
}

.accordion-title.active {
  color: #000;
}

/* Toggle Button */
.toggle-btn {
  width: 70px;
  height: 70px;
  background: #dfff00; /* neon yellow */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.toggle-btn.open {
  transform: rotate(0deg);
}

/* Content */
.accordion-content p {
  font-size: 24px;
  line-height: 1.7;
  font-weight: 700;
  padding-left:20px;
}

.media-section {
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
  margin-top: 80px;
  box-sizing: border-box;
}

.box {
  flex: 1;
  height: 350px;
  border-radius: 1px;
  overflow: hidden;
  background: #000;
}

.box video,
.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;  /* remove horizontal scroll */
  scrollbar-width: none; /* Firefox */
}
  .accordion-container{
  margin-top:80px;
  padding-right:500px;}

body::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
.media-row {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0;              /* ❌ remove gap */
  padding: 0;          /* ❌ remove padding */
}

.accordion-content.show {
  display: block;
}
.media-box {
  flex: 1;
  height: 100%;
  overflow: hidden;
  border-radius: 0;
  padding: 10px;

  background: #fff;   /* ✅ change from black to white */
}

/* Perfect scaling */
.media-box video,
.media-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
  .media-row {
  display: flex;
  width: 100%;
  height: 700px;   /* 🔥 increase row height */
  gap: 20px;
  padding: 20px;
}

.media-box {
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 🔥 LINK BOX STYLE */
.link-box {
  background: #dbff00;   /* neon */
}

.media-link {
  font-size: 24px;
  font-weight: 900;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.media-link:hover {
  transform: translateX(10px);
}
/* mobile */
@media (max-width: 900px) {

  /* 🔥 Accordion fix */
  .accordion-container {
    padding: 0 20px;   /* remove that 350px push */
    
  }



 .accordion-title {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -1px;
  padding-left:20px;
  
  margin: 0;
  transition: color 0.3s ease;
}
  


  .toggle-btn {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }

  .accordion-content p {
  font-size: 24px;
  line-height: 1.7;
  font-weight: 400;
}

.grid-item {
  flex: 1;
  height: 400px;
  overflow: hidden;
  background: #000;
  display: flex;          /* 🔥 FIX */
}

/* 🔥 Force both image & video to behave same */
.grid-item img,
.grid-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

  /* 🔥 Media section (3 boxes → vertical) */
  .media-section {
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }
    
    
  .top-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
padding: 20px;
  }


  .box {
    width: 100%;
    height: 250px;
  }

  /* 🔥 Drop-down videos */
  .drop-down-video {
    width: 100%;
    padding: 15px;
  }

  .drop-down-video video {
    height: 250px !important;
  }

  /* 🔥 Grid section (MOST IMPORTANT) */
  .grid-row {
    flex-direction: column;   /* stack vertically */
    gap: 15px;
    padding: 40px 15px;
  }

 .grid-item {
  flex: 1;
  height: 400px;   /* same height for all */
  overflow: hidden;
  background: #000;
}

/* remove tall effect on desktop */
.grid-item.tall {
  height: 400px;
}
  /* 🔥 Video section */
  .video-section {
    height: 100vh;
  }

}
      `}</style>

      {/* 🔥 TOP CONTENT */}
     

      {/* 🔥 PLANE VIDEO BELOW CONTENT */}
      <div className="video-section">
  <div className="media-row">
    
    {/* VIDEO */}
    <div className="media-box">
      <video
        src="https://framerusercontent.com/assets/I3QAFdiFvpCZIRT761DWGikU.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

    {/* IMAGE */}
    <div className="media-box">
      <video
        src="https://framerusercontent.com/assets/1kHQVfdOfa1VzDXWR5ppPXdVM.mp4"
         autoPlay
        loop
        muted
        playsInline
      />
    </div>

  </div>
</div>
      <div className="accordion-container">
  <AccordionItem
  title="THE CHALLENGE"
  content={`Most digital products don't fail because of design.They fail because design, development, and infrastructure are treated as separate projects. The result is inconsistent user experiences, technical debt, slow releases, and products that struggle to scale.`}
  isOpen={openIndex === 0}
  onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
/>

<AccordionItem
  title="OUR SOLUTION"
  content={`From UX flows and design systems to product architecture and deployment infrastructure, we build digital products that are fast, maintainable, and ready for growth.
    Every component is designed to work in production, not just in presentation decks.
    `}
  isOpen={openIndex === 1}
  onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
/>
</div>
<div className="video-below-accordion">
    <video src="https://framerusercontent.com/assets/e5re8wT569qx0aav1YT5ufmbAvY.mp4" autoPlay loop muted playsInline />
</div>
<div className="media-row">

  {/* VIDEO 1 */}
  <div className="media-box">
    <video
      src="https://framerusercontent.com/assets/SoKbr2mByivnmqFMOma1W6qtxC8.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>

  {/* VIDEO 2 */}
  <div className="media-box">
    <video
      src="https://framerusercontent.com/assets/4cHnr0HuaWd1N9bPSJqq0H3tnU.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>

  {/* 🔥 LINK BOX */}
  <div className="media-box link-box">
    <a href="/work" className="media-link">
      VIEW PROJECT →
    </a>
  </div>

</div>
<div>
  <div style={{ 
    fontWeight: "900", 
    fontSize: "28px", 
    marginBottom: "20px" ,
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
   Digital Design

Interfaces built around usability, clarity, and business objectives.

UX Flows

User experiences that reduce friction and improve engagement.

Design Toolkits

Reusable assets and frameworks that create consistency.

Web & App Design

Responsive digital products designed for real-world use.

Motion & Interaction

Purposeful movement that improves usability and reinforces brand identity.

Design Systems

Scalable component libraries that support future development.

Product Architecture

Technical foundations built for performance and long-term growth.

Front-End & Back-End Development

Modern development across websites, applications, and digital platforms.

Development Infrastructure

Hosting, environments, deployment processes, and operational foundations.

CI/CD Pipelines

Automated workflows that improve reliability and release speed.

QA Automation & Visual Testing

Testing systems that maintain quality across every release.

    <br /><br />

  </p>
</div>

<video
  src="https://framerusercontent.com/assets/sQsYtaGSzjqDpzo7JvKe4PDKWkc.mp4"
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
  src="https://framerusercontent.com/assets/DSSQjLRT3QGFesgKHp1Z7M93g1k.mp4"
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
  src="https://framerusercontent.com/assets/T6O00Du2BcrXsLOXN0rLE0ICJo.mp4"
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: "100%",
    height: "260vh",   // 🔥 full screen height
    objectFit: "cover",
    display: "block",
    paddingTop:"80px"
  }}
/>


    </div>

    
  );
}