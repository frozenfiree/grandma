import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import GlitchText from './GlitchText';
import { useLoader } from './LoaderContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [mountKey] = useState(() => Date.now());
  const { isLoaded } = useLoader();
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isServicePage = location.pathname.startsWith('/services');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsServicesDropdownOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // const services = [
  //   { id: 1, name: '3D Motion Art', path: '/services/1' },
  //   { id: 2, name: 'Digital Strategy', path: '/services/2' },
  //   { id: 3, name: 'UI/UX Design', path: '/services/3' },
  //   { id: 4, name: 'WebGL Development', path: '/services/4' },
  //   { id: 5, name: 'Interactive Experiences', path: '/services/5' },
  //   { id: 6, name: 'Brand Identity', path: '/services/6' },
  //   { id: 7, name: 'Mobile App Development', path: '/services/7' },
  //   { id: 8, name: 'E-commerce Solutions', path: '/services/8' },
  //   { id: 9, name: 'AI & Machine Learning', path: '/services/9' },
  //   { id: 10, name: 'Cloud Solutions', path: '/services/10' },
  // ];

  const services = [
  {
    id: 1,
    number: '01',
    name: 'Plan',
    desc: 'Strategy, positioning, audience, sequencing.',
    path: '/services/5',
  },
  {
    id: 2,
    number: '02',
    name: 'Build',
    desc: 'Brand, identity, web, landing pages.',
    path: '/services/2',
  },
  {
    id: 3,
    number: '03',
    name: 'Produce',
    desc: 'Podcast, video, motion, content.',
    path: '/services/3',
  },
  {
    id: 4,
    number: '04',
    name: 'Distribute',
    desc: 'Paid media, campaigns, reporting.',
    path: '/services/9',
  },
];

  const getFullServiceDetails = (service) => {
    const serviceDetails = {
      1: { fullDesc: 'We create breathtaking 3D motion graphics that captivate audiences and elevate your brand story.', features: ['Custom 3D Animations', 'Product Visualizations', 'Abstract Motion Graphics', 'Cinematic 3D Sequences', 'Real-time 3D Rendering'], technologies: ['Blender', 'Cinema 4D', 'After Effects', 'Three.js'], color: '#dbff00', icon: '🎨' },
      2: { fullDesc: 'Our digital strategists work with you to develop comprehensive plans that align with your business goals.', features: ['Market Analysis', 'Competitor Research', 'User Journey Mapping', 'ROI Forecasting', 'Growth Strategies'], technologies: ['Google Analytics', 'SEMrush', 'Hotjar', 'Tableau'], color: '#0066FF', icon: '📊' },
      3: { fullDesc: 'We design beautiful, user-centered interfaces that are both functional and aesthetically pleasing.', features: ['User Research', 'Wireframing & Prototyping', 'UI Design Systems', 'Usability Testing', 'Accessibility Design'], technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'], color: '#ff3366', icon: '🎯' },
      4: { fullDesc: 'Leverage the power of WebGL to create stunning 3D experiences directly in the browser.', features: ['3D Product Configurators', 'Interactive Environments', 'Particle Systems', 'Shader Development', 'Performance Optimization'], technologies: ['Three.js', 'WebGL', 'Babylon.js', 'ShaderToy'], color: '#00ffcc', icon: '🌐' },
      5: { fullDesc: 'Create memorable interactive experiences that engage users and drive conversions.', features: ['Gamification', 'Interactive Storytelling', 'Gesture Controls', 'VR/AR Experiences', 'Touch Interfaces'], technologies: ['Unity', 'WebXR', 'GSAP', 'React Spring'], color: '#ffaa00', icon: '🎮' },
      6: { fullDesc: 'Build a strong brand identity that resonates with your audience.', features: ['Logo Design', 'Brand Guidelines', 'Visual Identity Systems', 'Brand Strategy', 'Brand Voice Development'], technologies: ['Illustrator', 'Photoshop', 'Procreate', 'FontForge'], color: '#dbff00', icon: '💎' },
      7: { fullDesc: 'Develop high-performance mobile applications for iOS and Android.', features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Optimization', 'Mobile UI/UX'], technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'], color: '#0066FF', icon: '📱' },
      8: { fullDesc: 'Build feature-rich e-commerce platforms that drive sales and provide seamless shopping experiences.', features: ['Custom E-commerce Development', 'Payment Gateway Integration', 'Inventory Management', 'Shopping Cart Optimization', 'SEO for E-commerce'], technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe'], color: '#ff3366', icon: '🛒' },
      9: { fullDesc: 'Harness the power of artificial intelligence to automate processes, gain insights, and deliver personalized experiences.', features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems', 'Chatbot Development'], technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn'], color: '#00ffcc', icon: '🤖' },
      10: { fullDesc: 'Migrate and manage your infrastructure on the cloud for better scalability, security, and cost-efficiency.', features: ['Cloud Migration', 'DevOps Services', 'Serverless Architecture', 'Cloud Security', 'Cost Optimization'], technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'], color: '#ffaa00', icon: '☁️' },
    };
    return serviceDetails[service.id] || {};
  };

  const handleNavigation = (item) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    if (item === 'HOME') navigate('/');
    else if (item === 'ABOUT') navigate('/about');
    else if (item === 'WORK') navigate('/work');
    else if (item === 'SERVICES') navigate('/services');
    else if (item === 'CONTACT') navigate('/contact');
    // else if (item === 'INSIGHTS') navigate('/insights');
  };

  const handleServiceClick = (service) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    const details = getFullServiceDetails(service);
    navigate(service.path, { state: { service: { ...service, ...details } } });
  };

  const navTabs = ['HOME', 'ABOUT', 'WORK', 'SERVICES', 'CONTACT', ];

 const navTextColor = (isScrolled || isServicePage)
  ? '#000000'
  : 'rgba(0, 0, 0, 0.88)';

const navHoverColor = (isScrolled || isServicePage)
  ? '#111111'
  : 'rgba(0,0,0,0.9)'

  const isActive = (item) => {
    if (item === 'HOME' && location.pathname === '/') return true;
    if (item === 'ABOUT' && location.pathname === '/about') return true;
    if (item === 'WORK' && location.pathname === '/work') return true;
    if (item === 'SERVICES' && location.pathname === '/services') return true;
    if (item === 'CONTACT' && location.pathname === '/contact') return true;
    if (item === 'INSIGHTS' && location.pathname === '/insights') return true;
    return false;
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top app-navbar ${(isScrolled || isServicePage) ? 'scrolled' : ''}`}
      style={{
        display: 'block',
        width: '100%',
        padding: isScrolled ? '10px 16px' : '14px 16px',
        background: 'transparent',
        boxShadow: 'none',
        border: 'none',
        transition: 'padding 0.35s cubic-bezier(0.4,0,0.2,1)',
        zIndex: 1100,
      }}
    >
      <div
        ref={navbarRef}
        className="navbar-inner"
        style={{
          width: '100%',
          maxWidth: '100%',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isScrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(14px)' : 'none',
          boxShadow: isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.08)' : 'none',
          border: isScrolled ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid transparent',
          borderRadius: '1px',
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Logo */}
      <motion.a
  className="navbar-brand text-logo-wrapper logo-hover"
  onClick={() => navigate('/')}
  style={{
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(24px, 3.5vw, 34px)',
    color: navTextColor,
    textDecoration: 'none',
    letterSpacing: '-1px',
    cursor: 'pointer',
    transition: 'color 0.35s cubic-bezier(0.4,0,0.2,1)',
  }}
>
  Grandma's Hive
</motion.a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsServicesDropdownOpen(false);
          }}
          style={{ backgroundColor: '#f0f0f0', borderRadius: '1px', padding: '6px 10px' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links — always visible */}
        <div className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav gap-3 align-items-center">
            {navTabs.map((item, tabIndex) => (
              <li
                className="nav-item position-relative"
                key={item}
                ref={item === 'SERVICES' ? dropdownRef : null}
              >
                {item === 'SERVICES' ? (
                  <>
                    <motion.button
                      className={`nav-link-btn ${isActive(item) ? 'active' : ''}`}
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      whileHover={{ skewX: -5 }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: isActive(item) ? '#dbff00' : navTextColor,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.35s cubic-bezier(0.4,0,0.2,1)',
                      }}
                    >
                      <GlitchText
                        key={`${mountKey}-${item}`}
                        text={item}
                        duration={600}
                        delay={tabIndex * 120}
                        trigger={isLoaded}
                      />
                      <span
                        style={{
                          fontSize: '10px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          transform: isServicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        ▼
                      </span>
                    </motion.button>

                    {/* Home page dropdown — isolated from Hero wave animation */}
                    {isServicesDropdownOpen && location.pathname === '/' && (
                      <div className="services-dropdown-home">
                        <div className="services-grid-home">
                          {services.map((service) => (
                            <div key={service.id} className="service-item-home" onClick={() => handleServiceClick(service)}>
                              <span className="service-name-home">{service.name}</span>
                              <span className="service-arrow-home">→</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* All other pages dropdown */}
                    {isServicesDropdownOpen && location.pathname !== '/' && (
                      <div className="services-dropdown">
                        <div className="services-grid">
                          {services.map((service) => (
                            <div key={service.id} className="service-item" onClick={() => handleServiceClick(service)}>
                              <span>{service.name}</span>
                              <span className="service-arrow">→</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <motion.button
                    className={`nav-link-btn ${isActive(item) ? 'active' : ''}`}
                    onClick={() => handleNavigation(item)}
                    whileHover={{ skewX: -5 }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: isActive(item) ? '#dbff00' : navTextColor,
                      transition: 'color 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    <GlitchText
                      key={`${mountKey}-${item}`}
                      text={item}
                      duration={600}
                      delay={tabIndex * 120}
                      trigger={isLoaded}
                    />
                  </motion.button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        * { -webkit-tap-highlight-color: transparent !important; }

        html { overflow-y: auto; }

        button, a, .nav-link-btn, .navbar-toggler {
          outline: none !important;
          box-shadow: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }

        button:focus, button:active, button:focus-visible,
        a:focus, a:active, a:focus-visible {
          outline: none !important;
          box-shadow: none !important;
        }

        @media (max-width: 991px) {
          button { touch-action: manipulation; }
        }

        .app-navbar {
          display: block !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box;
          background: transparent !important;
          box-shadow: none !important;
        }

        .app-navbar .navbar-inner {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .app-navbar .navbar-nav .nav-item {
          display: flex;
          align-items: center;
          position: relative;
        }

        .logo-hover {
          padding: 6px 12px;
          border: 1px solid transparent;
          border-radius: 6px;
          transition: all 0.25s ease;
          display: inline-block;
        }

        

        .app-navbar .navbar-nav .nav-link-btn {
          font-family: 'Lay Grotesk - Trial Black', sans-serif;
          font-size: 20px;
          font-weight: 900;
          display: inline-flex !important;
          align-items: center;
          width: auto !important;
          padding: 6px 10px !important;
          margin: 0 !important;
          line-height: 1 !important;
          text-transform: uppercase;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          text-decoration: none;
          background: none;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .app-navbar.scrolled .navbar-nav .nav-link-btn:hover {
          background-color: #000 !important;
          color: #fff !important;
          border: 1px solid #000;
        }

        .app-navbar:not(.scrolled) .navbar-nav .nav-link-btn:hover {
  color: rgba(0,0,0,0.95) !important;
  background: rgba(0,0,0,0.04) !important;
  border: 1px solid rgba(0,0,0,0.08);
  backdrop-filter: blur(10px);
}

        .app-navbar .navbar-nav .nav-link-btn.active {
          color: #dbff00 !important;
          position: relative;
        }

        .app-navbar .navbar-nav .nav-link-btn.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #dbff00;
        }

        /* ── Services dropdown ── */
        .services-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 560px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.12);
          padding: 12px;
          z-index: 9999;
          animation: dropFadeIn 0.2s ease;
          font-size: 14px !important;
          line-height: 1.4 !important;
        }

        @keyframes dropFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4px;
        }

        .service-item {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 14px;
          border-radius: 8px;
          cursor: pointer;
        }

        .service-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #000;
          width: 0%;
          transition: width 0.25s ease;
          z-index: 0;
        }

        .service-item:hover::before { width: 100%; }

        /* Reset ALL inherited animations/transforms on dropdown spans */
        .services-dropdown span {
          animation: none !important;
          transform: none !important;
          display: inline !important;
          position: relative;
          z-index: 1;
          transition: color 0.25s ease;
        }

        .service-item span:first-child {
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #000 !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1 !important;
        }

        .service-item:hover span:first-child { color: #fff !important; }

        .service-arrow {
          font-size: 14px !important;
          color: #000 !important;
          flex-shrink: 0;
          transition: color 0.25s ease, transform 0.25s ease !important;
        }

        .service-item:hover .service-arrow {
          color: #bfff00 !important;
          transform: translateX(4px) !important;
        }

        /* ── Home page dropdown — fully isolated, no inherited animations ── */
        .services-dropdown-home {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 560px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.12);
          padding: 12px;
          z-index: 9999;
          animation: dropFadeIn 0.2s ease;
        }
        .services-grid-home {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4px;
        }
        .service-item-home {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 14px;
          border-radius: 8px;
          cursor: pointer;
        }
        .service-item-home::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #000;
          width: 0%;
          transition: width 0.25s ease;
          z-index: 0;
        }
        .service-item-home:hover::before { width: 100%; }
        .service-name-home {
          position: relative;
          z-index: 1;
          font-size: 14px;
          font-weight: 700;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1;
          animation: none !important;
          transform: none !important;
          display: inline !important;
          transition: color 0.25s ease;
        }
        .service-item-home:hover .service-name-home { color: #fff; }
        .service-arrow-home {
          position: relative;
          z-index: 1;
          font-size: 14px;
          color: #000;
          flex-shrink: 0;
          animation: none !important;
          transform: none !important;
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .service-item-home:hover .service-arrow-home {
          color: #bfff00;
          transform: translateX(4px) !important;
        }

        @media (max-width: 991px) {
          .services-dropdown-home {
            position: static;
            width: 100%;
            border-radius: 8px;
            box-shadow: none;
            border: 1px solid rgba(0,0,0,0.08);
            margin-top: 8px;
            padding: 8px;
          }
          .services-grid-home {
            grid-template-columns: repeat(2, 1fr);
          }
          .service-name-home { font-size: 12px !important; }
        }

        /* ── Mobile ── */
        @media (max-width: 991px) {
          .app-navbar .navbar-inner {
            border-radius: 12px !important;
          }

          .app-navbar .navbar-collapse.show {
            background: #fff !important;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            border-radius: 0 0 12px 12px;
          }

          .app-navbar .navbar-collapse.show .nav-link-btn {
            color: #000000 !important;
            font-size: 18px !important;
          }

          .app-navbar .navbar-nav {
            gap: 8px !important;
            text-align: center;
          }

          .services-dropdown {
            position: static;
            width: 100%;
            border-radius: 8px;
            box-shadow: none;
            border: 1px solid rgba(0,0,0,0.08);
            margin-top: 8px;
            padding: 8px;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .service-item span:first-child {
            font-size: 12px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
