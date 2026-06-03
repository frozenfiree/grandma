import React, { useState } from "react";
import planevideo from "../../../assets/planevideo.mp4";
import "../serviceMobile.css";
import gaandiva from "../../../assets/gaandiva.png";

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

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

   
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
  gap:10px;
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
  background: #ffffff;
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
          height: 100vh;
          margin-top: 10px;
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

.accordion-container {
  width: 100%;
   padding-right:350px;
  margin-top: 90px;
  
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
  padding-left:40px;
  
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
.accordion-content {
  max-height: 0;
  overflow: hidden;
  padding: 0 20px;
  transition: max-height 0.25s ease;
}
  .accordion-content p {
  font-size: 24px;
  line-height: 1.7;
  font-weight: 700;
  padding-left:20px;
}


.accordion-content.show {
  max-height: 500px; /* increase if content is long */
}
.media-section {
  width: 100%;
  height: 500px;;
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
  background: #fffdfd;
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

body::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

/* mobile */
/* ================= MOBILE VIEW ================= */
@media (max-width: 900px) {

  /* KEEP top video unchanged */
  .video-section {
    height: auto;
    margin-top: 0;
    margin-bottom: 0;
    padding: 10px;
    line-height: 0;
    gap:10px;
  }

  .video-section video {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    gap:10px;

  }

  /* Accordion */
  .accordion-container {
    width: 100%;
    padding: 0 20px;
    margin-top: 0;
    gap:10px;

  }

  .accordion-title {
    font-size: 22px;
    padding-left: 10px;
    gap:10px;

  }

  .toggle-btn {
    width: 45px;
    height: 45px;
    font-size: 24px;
    gap:10px;

  }

  .accordion-content p {
    font-size: 15px;
    line-height: 1.5;
    padding-left: 10px;
    gap:10px;

  }

  /* Stack media vertically */
  .media-section,
  .grid-row,
  .second-row {
    display: flex;
    flex-direction: column;
    gap: 0;
    gap:10px;

    padding: 0;
    margin: 0;
  }

  /* remove gaps only for media */
  .box,
  .grid-item,
  .grid-item.tall,
  .drop-down-video {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    gap:10px;

    overflow: hidden;
  }

  .box img,
  .box video,
  .grid-item img,
  .grid-item video,
  .drop-down-video video {
    width: 100%;
    height: auto;
    gap:10px;

    display: block;
    object-fit: contain;
    gap:10px;

  }

  .grid-section {
    padding: 0;
    

    margin: 0;
  }
}
      `}</style>

      {/* 🔥 TOP CONTENT */}
     

      {/* 🔥 PLANE VIDEO BELOW CONTENT */}
      <div className="video-section">
        <video
          src={planevideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
       <div className="accordion-container">
  <AccordionItem
    title="THE CHALLENGE"
    content={`Many growing businesses struggle to manage customer interactions, sales pipelines, and operational workflows across multiple tools. Disconnected data, manual processes, and limited visibility into customer relationships often lead to inefficiencies, missed opportunities, and slower business growth. The challenge was to create a centralized platform that simplifies customer management while enabling teams to work more effectively.`}
    isOpen={openIndex === 0}
    onClick={() => toggle(0)}
  />

  <AccordionItem
    title="OUR SOLUTION"
    content={`We developed Gaandiva, an intelligent CRM platform designed to unify customer data, streamline sales operations, and automate repetitive tasks. By providing a centralized dashboard, real-time insights, workflow automation, and seamless team collaboration, the platform empowers businesses to strengthen customer relationships, improve productivity, and drive sustainable growth. The result is a scalable solution that helps organizations make data-driven decisions and deliver exceptional customer experiences.`}
    isOpen={openIndex === 1}
    onClick={() => toggle(1)}
  />
</div>

    <div className="media-section">

  <div className="box">
    <video src="https://framerusercontent.com/assets/k60IZX99Pe2iroCU32yogDsEM.mp4" autoPlay loop muted playsInline />
  </div>

  <div className="box">
    <img src={gaandiva} alt="media" />
  </div>

  <div className="box">
    <video src="https://framerusercontent.com/assets/SUoJA8Gjv1613evzDrJ7EsvLk8.mp4" autoPlay loop muted playsInline />
  </div>

</div>
<div className="drop-down-video">
  {/* <video
    src="https://framerusercontent.com/assets/qdP7cDMQa3ZhXnMeV51Y3RDf8xg.mp4"
    autoPlay
    loop
    muted
    playsInline
    style={{
      cursor: "auto",
      width: "100%",
      height: "100%",
      borderRadius: "0px",
      display: "block",
      objectFit: "contain",
      backgroundColor: "rgba(0, 0, 0, 0)",
      objectPosition: "50% 50%"
    }}
  /> */}
  {/* <img src={gaandiva} alt="gaandiva" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} /> */}
</div>

<div className="drop-down-video">
  <video
    src="https://framerusercontent.com/assets/KA17Rw9QTm5F8ykEZHUUL4d6k.mp4"
    autoPlay
    loop
    muted
    playsInline
    style={{
      cursor: "auto",
      width: "100%",
      height: "100%",
      borderRadius: "0px",
      display: "block",
      objectFit: "contain",
      backgroundColor: "rgba(0, 0, 0, 0)",
      objectPosition: "50% 50%",
      marginTop:"80px"
    }}
  />
</div>
<div className="grid-section">
  {/* Row 1 */}
  <div className="grid-row">
    <div className="grid-item">
      <img src="https://framerusercontent.com/images/WPnN1bXlI8hOpc96IKRxQZk9U.png?scale-down-to=2048" alt="img1" />
    </div>

    <div className="grid-item tall">
      <video
        src="https://framerusercontent.com/assets/yw1VI4C31PtHswWOP8taEWP1rE.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  </div>

  {/* Row 2 */}
  <div className="grid-row second-row">
    <div className="grid-item tall">
      <video
        src="https://framerusercontent.com/assets/fEZgoE7CH3y5pqm4S1TT9LaFiw.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

    <div className="grid-item">
      <img src="https://framerusercontent.com/images/PBThWAzr9w5Ow1UuyZcdyzv2Xdg.png?scale-down-to=2048" alt="img2" />
    </div>
  </div>
</div>
    </div>

    
  );
}