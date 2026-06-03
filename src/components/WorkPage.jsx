  import React from 'react';
  import { motion } from 'framer-motion';
  import WorkCard from './WorkCard';
  import UIUX2 from '../assets/UIUX2.mp4';
  import MortionGrandma from '../assets/3dMortionGrandma.mp4';
  import Home1 from '../assets/Home1.mp4';
  import podcast from '../assets/podcast.mp4';

  const workItems = [
    {
  id: 1,
  title: 'Gaandiva',
  description: 'A powerful CRM platform that helps businesses manage customer relationships, streamline sales pipelines, automate workflows, and drive growth through actionable insights.',
  category: 'CRM Platform',
  video: 'https://framerusercontent.com/assets/hQUXKbpvYZyElXRxbNmW95ph8Q.mp4',
  link: '/services/1'
},
    { id: 2, title: 'TECH PUBLICATION',     description: 'Five vertical newsrooms , MarTech, FinTech, HRTech, CyberTech, SalesTech',    category: 'MEDIA NETWORK',            video: MortionGrandma, link: '/work/wing'    },
    { id: 3, title: 'THE PODCAST',  description: 'Our stuido is warming up. Launching soon!',         category: 'COMING SOON',            video: podcast,          link: '/work/swisher' },
  ];

  // ─── WorkPage ─────────────────────────────────────────────────────────────────
  export default function WorkPage() {
    return (
      <section id="work" className="work-page-section">
        <div className="work-canvas">

          <div className="work-item-1">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.0 }} viewport={{ once: true }}>
              <WorkCard {...workItems[0]} />
            </motion.div>
          </div>

          <div className="work-item-2">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}>
              <WorkCard {...workItems[1]} />
            </motion.div>
          </div>

          <div className="work-item-3">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
              <WorkCard {...workItems[2]} />
            </motion.div>
          </div>

        </div>

        <style>{`

          .work-page-section {
            padding-top: 80px;
            padding-bottom: 0;
            overflow-x: hidden;
            margin-bottom:150px;
          }

          .work-canvas {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
          }

          /* card positions */
          .work-item-1 {
            width: 48%;
            margin-left: 0;
            margin-top: 60px;
            margin-bottom: 0;
          }

          .work-item-2 {
            width: 48%;
            margin-left: auto;
            margin-top: 120px;
            margin-bottom: 0;
          }

          .work-item-3 {
            width: 60%;
            margin-left: 400px;
            margin-right: auto;
            margin-top: 120px;
            margin-bottom: 0;
          }

          .work-item-4 { width: 58%; margin-left: auto; margin-top: 80px; margin-bottom: 0; }
          .work-item-5 { width: 48%; margin-left: 0; margin-top: 120px; margin-bottom: 0; }
          .work-item-6 { width: 48%; margin-left: auto; margin-top: 80px; margin-bottom: 0; }
          .work-item-7 { width: 48%; margin-left: 0; margin-top: -320px; margin-bottom: 0; }
          .work-item-8 { width: 48%; margin-left: auto; margin-top: 80px; margin-bottom: 0; }
          .work-item-9 { width: 48%; margin-left: 0; margin-top: -320px; margin-bottom: 0; }
          .work-item-10 { width: 48%; margin-left: auto; margin-top: 80px; margin-bottom: 140px; }

          /* mobile */
          @media (max-width: 768px) {
            .work-item-1,
            .work-item-2,
            .work-item-3,
            .work-item-4,
            .work-item-5,
            .work-item-6,
            .work-item-7,
            .work-item-8,
            .work-item-9,
            .work-item-10 {
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
              margin-top: 30px !important;
              margin-bottom: 20px;
            }

            .video-container {
              aspect-ratio: 16/10 !important;
            }
          }

        `}</style>
      </section>
    );
  }
