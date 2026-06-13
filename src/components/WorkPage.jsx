import sigAbstract from "../assets/videos/signature-abstract-loop.mp4";
  import React from 'react';
  import { motion } from 'framer-motion';
  import WorkCard from './WorkCard';
  import UIUX2 from '../assets/UIUX2.mp4';
  import MortionGrandma from '../assets/3dMortionGrandma.mp4';
  import Home1 from '../assets/Home1.mp4';
  import podcast from '../assets/podcast.mp4';
  import sigEditorial from '../assets/videos/signature-editorial-loop.mp4';
  import { ROUTES } from '../routes';

  const workItems = [
    {
  id: 1,
  title: 'Gaandiva OS',
  description: 'A powerful CRM platform that helps businesses manage customer relationships, streamline sales pipelines, automate workflows, and drive growth through actionable insights.',
  category: 'CRM Platform',
  video: sigAbstract,
  link: ROUTES.SERVICE_1
},
    { id: 2, title: 'GTM Publications',     description: 'Five vertical newsrooms , MarTech, FinTech, HRTech, CyberTech, SalesTech',    category: 'Media Network',            video: sigEditorial, link: ROUTES.WORK_WING    },
    { id: 3, title: 'Podcast Studio',  description: 'Our studio is warming up. Launching soon!',         category: 'Coming Soon',            video: podcast,          link: ROUTES.WORK_SWISHER },
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
