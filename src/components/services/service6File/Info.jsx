import React, { useState } from "react";
import "../serviceMobile.css";
import svc6type1 from "../../../assets/videos/svc6-type1.mp4";
import svc6type2 from "../../../assets/videos/svc6-type2.mp4";
import svc6type3 from "../../../assets/videos/svc6-type3.mp4";
import svc6craft from "../../../assets/videos/svc-brand.mp4";
import svc6still1 from "../../../assets/img/svc6-still-1.webp";
import svc6still2 from "../../../assets/img/svc6-still-2.webp";
import svc6still3 from "../../../assets/img/svc6-still-3.webp";
import svc6still4 from "../../../assets/img/svc6-still-4.webp";

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
        .video-section { width: 100%; height: 100vh; margin-top: 80px; position: relative; }
        .video-section video { width: 100%; height: 100%; object-fit: cover; }
        .accordion-container { width: 100%; padding-right: 350px; margin-top: 90px; }
        .accordion-item { border-top: 1px solid #999; padding: 40px 0; }
        .accordion-item:last-child { border-bottom: 1px solid #e5e5e5; }
        .accordion-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .accordion-title { font-size: 28px; font-weight: 800; letter-spacing: -1px; padding-left: 40px; margin: 0; transition: color 0.3s ease; }
        .accordion-title.active { color: #000; }
        .toggle-btn { width: 70px; height: 70px; background: #dfff00; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; transition: all 0.3s ease; }
        .accordion-content { max-height: 0; overflow: hidden; padding: 0 20px; transition: max-height 0.25s ease; }
        .accordion-content.show { max-height: 500px; }
        .accordion-content p { font-size: 24px; line-height: 1.7; font-weight: 700; padding-left: 20px; }
        .media-section { width: 100%; display: flex; gap: 20px; padding: 20px; margin-top: 80px; box-sizing: border-box; }
        
        .box { flex: 1; height: 350px; border-radius: 1px; overflow: hidden; background: #000; }
        .box1 { flex: 1; height: 850px; border-radius: 1px; overflow: hidden; background: #000; }
        .box video, .box img { width: 100%; height: 100%; object-fit: cover; }
        .grid-section { width: 100%; padding: 80px 20px; box-sizing: border-box; }
        .grid-row { display: flex; gap: 20px; margin-bottom: 20px; }
        .grid-item { flex: 1; height: 950px; overflow: hidden; background: #000; display: flex; }
        .grid-item img, .grid-item video { width: 100%; height: 100%; object-fit: cover; display: block; }
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
        <video src={svc6type1} autoPlay loop muted playsInline />
      </div>

      <div className="accordion-container">
        <AccordionItem
          title="THE CHALLENGE"
          content="Many businesses struggle with inconsistent brand presentation across channels. Without a cohesive visual identity and brand voice, it's difficult to build trust, recognition, and loyalty with your target audience."
          isOpen={openIndex === 0}
          onClick={() => toggle(0)}
        />
        <AccordionItem
          title="OUR SOLUTION"
          content="We develop comprehensive brand identity systems that go beyond just a logo. From color palettes and typography to brand voice guidelines and visual identity systems, we create a complete toolkit that empowers your team to communicate consistently and confidently across every platform."
          isOpen={openIndex === 1}
          onClick={() => toggle(1)}
        />
      </div>

      <div className="media-section">
        <div className="box box1"><video src={svc6type2} autoPlay loop muted playsInline /></div>
        <div className="box"><video src={svc6craft} autoPlay loop muted playsInline /></div>
      </div>


<div className="image-row">
  <div className="image-box">
    <img
      src={svc6still1}
      alt="img1"
    />
  </div>

  <div className="image-box">
    <img
      src={svc6still2}
      alt="img2"
    />
  </div>

  <div className="image-box">
    <img
      src={svc6still3}
      alt="img3"
    />
  </div>
</div>

<style>{`
.image-row{
  width:100%;
  display:flex;
  gap:20px;
  padding:20px;
  margin-top:60px;
}

.image-box{
  flex:1;
  height:700px;
  overflow:hidden;
}

.image-box img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

/* MOBILE */
@media (max-width:768px){

  .image-row{
    flex-direction:column;
  }

  .image-box{
    height:350px;
  }
}
`}</style>

<div className="industry-section">
  <div className="industry-left">
    <h2>INDUSTRY FOOTPRINT</h2>

    <p>
      With a smart launch strategy and a strong new digital presence,
      Brownkind quickly made its mark in the skincare world. By focusing
      on the specific needs of melanin-rich skin, the brand sparked
      interest from both customers and the media. In a short time,
      Brownkind was featured in major publications like ELLE, InStyle,
      Bustle, and The CUT—a clear sign that its message is resonating
      and its impact is growing.
    </p>
  </div>

  <div className="industry-right">
    <img
      src={svc6still4}
      alt="Industry"
    />
  </div>

  <style>{`
    .industry-section{
      width:100%;
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      gap:60px;
      padding:60px 40px;
      background:#f3f3f3;
    }

    .industry-left{
      width:50%;
    }

    .industry-left h2{
      font-size:28px;
      font-weight:900;
      text-transform:uppercase;
      color:#000;
      margin-bottom:40px;
      letter-spacing:-1px;
      font-family:Arial, Helvetica, sans-serif;
    }

    .industry-left p{
      font-size:34px;
      line-height:1.08;
      font-weight:500;
      color:#111;
      max-width:980px;
      font-family:Arial, Helvetica, sans-serif;
      letter-spacing:-1px;
    }

    .industry-right{
      width:50%;
      display:flex;
      justify-content:flex-end;
    }

    .industry-right img{
      width:100%;
      height:850px;
      object-fit:cover;
      display:block;
    }

    @media(max-width:900px){

      .industry-section{
        flex-direction:column;
        padding:30px 20px;
        gap:40px;
      }

      .industry-left,
      .industry-right{
        width:100%;
      }

      .industry-left h2{
        font-size:20px;
        margin-bottom:20px;
      }

      .industry-left p{
        font-size:20px;
        line-height:1.2;
      }

      .industry-right img{
        height:500px;
      }
    }
  `}</style>
</div>
      <div className="grid-section">
        <div className="grid-row">
          <div className="grid-item"><video src={svc6type3} autoPlay loop muted playsInline /></div>
          
        </div>
        
      </div>
    </div>
  );

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }
}
