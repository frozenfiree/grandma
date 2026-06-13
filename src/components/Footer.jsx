import React, { useState, useEffect } from "react";

function useLocalTime(timezone) {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const [time, setTime] = useState(() => fmt.format(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTime(fmt.format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Footer() {
  const amdTime = useLocalTime('Asia/Kolkata');
  const pnqTime = useLocalTime('Asia/Kolkata');
  const ilgTime = useLocalTime('America/New_York');

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          overflow-x:hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .footer-wrapper{
          width:100%;
          min-height:70vh;
          background:#dfff00;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          padding:28px 18px 12px 18px;
          position:relative;
          overflow:hidden;
        }

        .footer-top{
          width:100%;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:40px;
        }

        .footer-left{
          display:flex;
          gap:80px;
          flex-wrap:wrap;
        }

        .office-block{
          max-width:280px;
        }

        .office-title{
          font-size:1.7rem;
          line-height:0.88;
          font-weight:800;
          text-transform:uppercase;
          color:#000;
          margin:0 0 10px 0;
        }

        .office-info{
          font-size:1.2rem;
          line-height:1.2;
          font-weight:600;
          color:#000;
          margin-bottom:6px;
        }

        .office-contact{
          font-size:1rem;
          line-height:1.45;
          font-weight:600;
          color:#000;
        }

        .award-side{
          display:flex;
          flex-direction:column;
         
          min-width:170px;
        }

        
            // /* ─── MARQUEE ─── */
            // .footer-footer-marquee-wrapper {
            //   width: 100%;
            //   overflow: hidden;
            //   position: absolute;
            //   top: 80%;
            //   left: 0;
            //   transform: translateY(-50%);
            //   z-index: 0;
            // }

     .footer-marquee {
  display:flex;
  width:max-content;
  white-space:nowrap;
  animation: footerScroll 10s linear infinite;
  will-change:transform;
}
    @keyframes footerScroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

        .award-logo{
          width:78px;
          height:auto;
          object-fit:contain;
          margin-bottom:8px;
        }

        .footer-award-stars{
          font-size:14px;
          letter-spacing:4px;
          font-weight:700;
          margin-bottom:5px;
        }

        .footer-award-text{
          font-size:12px;
          line-height:1.05;
          font-weight:900;
          text-transform:uppercase;
          text-align:center;
          color:#000;
        }

        .award-btn{
          margin-top:10px;
          border:none;
          background:#000;
          color:#dfff00;
          padding:4px 8px;
          font-size:9px;
          font-weight:700;
          cursor:pointer;
          text-transform:uppercase;
        }

        .footer-middle{
          width:100%;
          flex:1;
          display:flex;
          margin-top:40px;
        }

        .big-text{
          width:100%;
          font-size:10vw;
          line-height:0.8;
          font-weight:800;
          color:#000;
          letter-spacing:-12px;
          text-transform:uppercase;
          white-space:nowrap;
        }

        .footer-bottom{
          width:100%;
          display:flex;
          justify-content:space-between;
          margin-top:12px;
          gap:20px;
        }

        .copyright{
          font-size:16px;
          font-weight:600;
          color:#000;
        }

        .family-text{
          font-size:14px;
          font-weight:500;
          color:#000;
          text-align:right;
        }

        .family-link{
          color:#000;
          text-decoration:underline;
          cursor:pointer;
        }

        @media (max-width: 1200px){

          .office-title{
            font-size:2.5rem;
          }

          .big-text{
            font-size:17vw;
            letter-spacing:-7px;
          }
        }

        @media (max-width: 768px){

          .footer-wrapper{
            min-height:auto;
            padding:24px 16px 18px 16px;
          }

          .footer-top{
            flex-direction:column;
            gap:40px;
          }
            

          .footer-left{
            flex-direction:column;
            gap:40px;
          }

          .award-side{
            align-items:flex-start;
          }

          .office-title{
            font-size:2rem;
            letter-spacing:-2px;
          }

          .office-info,
          .office-contact{
            font-size:0.95rem;
          }

          .footer-middle{
            margin-top:70px;
          }

          .big-text{
            font-size:24vw;
            line-height:0.85;
            letter-spacing:-4px;
          }

          .footer-bottom{
            flex-direction:column;
            align-items:flex-start;
            gap:8px;
            margin-top:18px;
          }

          .family-text{
            text-align:left;
          }
            .award-btn{
            display:none;
            align-self:start;
            }
            .footer-award-text{
            display:none;
            }
        }
          
      `}</style>

      <footer className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-left">
            <div className="office-block">
              <h2 className="office-title">
                AMD — {amdTime} 
              </h2>
              <div className="office-info">
               508 Atma House
               </div>

              <div className="office-info">
              
                AHMEDABAD, GJ, 380 009
              </div>

              <div className="office-contact">
                hello@grandmashive.com
              </div>
            </div>

            <div className="office-block">
              <h2 className="office-title">
                PNQ — {pnqTime}
                <br />
                
              </h2>
              <div className="office-info">803 Sky Vista</div>

              <div className="office-info">
               
                PUNE, MH, 411 014
                
              </div>

              <div className="office-contact">
                hello@grandmashive.com
              </div>
            </div>

            <div className="office-block">
              <h2 className="office-title">
                ILG — {ilgTime}
                <br />
              
              </h2>
               <div className="office-info">Tower 2</div>
              

              <div className="office-info">
           
                WILMINGTON, DE 19801
                
              </div>

              <div className="office-contact">
                hello@grandmashive.com
              </div>
            </div>
          </div>

          <div className="award-side">

            

            <div className="footer-award-text">
              DIGITAL DESIGN
              <br />
              AGENCY
            </div>
            {/* <div className="footer-award-stars">★★★★★</div> */}

            <button className="award-btn">
              GRANDMASHIVE.COM
            </button>
          </div>
        </div>

        <div className="footer-middle">
          <div className="big-text">
          <div className="footer-marquee-wrapper">
           <div className="footer-marquee">
  <div className="footer-marquee-track">
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>

    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
    <span>SAY HI!{" "}</span>
     
  </div>
</div>
          </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            All rights reserved ©2026
          </div>

          <div className="family-text">
            We're part of the{" "}
            <span className="family-link">
                Grandma's Hive
            </span>{" "}
            collective.
          </div>
        </div>
      </footer>
    </>
  );
}