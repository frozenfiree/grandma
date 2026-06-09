import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../routes';

const SERVICE_ID_TO_ROUTE = {
  2: ROUTES.SERVICE_2,
  5: ROUTES.SERVICE_5,
  9: ROUTES.SERVICE_9,
};

const services = [
  {
    title: 'PLAN ',
    serviceId: 5,
    items: ['Information architecture', 'Zone maps and wireframes', 'Content architecture', 'User journeys', 'Product validation']
  },
  {
    title: 'BUILD',
    serviceId: 2,
    items: ['UX flows', 'Design toolkits', 'Web and app design', 'Motion and interaction', 'Design systems']
  },
  {
    title: 'DISTRIBUTE',
    serviceId: 9,
    items: ['Product architecture', 'Front and back-end development', 'Development infrastructure', 'CI/CD pipelines', 'QA automation and visual testing']
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(SERVICE_ID_TO_ROUTE[serviceId] || ROUTES.SERVICES);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section id="services" className="ss-section">
      <div className="ss-inner">

        {/* LEFT */}
        <motion.div
          className="ss-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="ss-label">(SERVICES)</p>
          <h1 className="ss-title">Services designed to amplify User Experience.</h1>
        </motion.div>

        {/* RIGHT */}
        <div className="ss-right">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="ss-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="ss-col-heading">{service.title}</h4>
              <ul className="ss-list">
                {service.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="ss-list-item"
                    onClick={() => handleServiceClick(service.serviceId)}
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .ss-section {
          background-color: #fff;
        }

        .ss-inner {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: clamp(40px, 6vw, 100px);
          padding: 0 clamp(24px, 6vw, 100px);
        }

        /* LEFT */
        .ss-left {
          flex: 0 0 40%;
          max-width: 40%;
        }

        .ss-label {
          font-family: 'Lay Grotesk - Trial Black', sans-serif;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 4px;
          color: #000;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .ss-title {
          font-family: 'Lay Grotesk - Trial Black', sans-serif;
          font-size: clamp(36px, 4.5vw, 72px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -2px;
          color: #000;
          margin: 0;
        }

        /* RIGHT */
        .ss-right {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(24px, 3vw, 50px);
          align-items: start;
        }

        .ss-col-heading {
          font-family: 'Lay Grotesk - Trial Black', sans-serif;
          font-size: 15px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #000;
          margin: 0 0 20px 0;
          padding-bottom: 0;
        }

        .ss-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ss-list-item {
          font-family: 'Lay Grotesk - Trial Black', sans-serif;
          font-size: clamp(13px, 1.2vw, 16px);
          font-weight: 900;
          color: #000;
          line-height: 1.5;
          padding: 10px 0;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          padding-left: 10px;
          padding-right: 10px;
          user-select: none;
          transition: transform 0.2s ease;
        }

        .ss-list-item:hover {
          transform: translateX(4px);
        }

        .ss-list-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #000;
          width: 0%;
          transition: width 0.25s ease;
          z-index: 0;
        }

        .ss-list-item:hover::before { width: 100%; }

        .ss-list-item:hover { color: #fff; }

        .ss-list-item span {
          position: relative;
          z-index: 1;
        }

        /* Tablet */
        @media (max-width: 991px) {
          .ss-inner {
            flex-direction: column;
            gap: 48px;
          }
          .ss-left {
            flex: unset;
            max-width: 100%;
          }
          .ss-right {
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .ss-right {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ss-title {
            letter-spacing: -1px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
