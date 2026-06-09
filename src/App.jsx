import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoaderProvider } from './components/LoaderContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import ScrollToTop from './components/ScrollToTop';
import LegacyRedirectGuard from './components/LegacyRedirectGuard';
import { ROUTES } from './routes';

// Always-needed on home — eager
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import CanvasCursor from './components/CanvasCursor';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

// All other pages — lazy loaded only when visited
const AboutSection      = lazy(() => import('./components/AboutSection'));
const WorkPage          = lazy(() => import('./components/WorkPage'));
const InsightPage       = lazy(() => import('./components/InsightPage'));
const ContactPage       = lazy(() => import('./components/ContactPage'));
const ServicesPage      = lazy(() => import('./components/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage'));
const Service1          = lazy(() => import('./components/services/Service1'));
const Service2          = lazy(() => import('./components/services/Service2'));
const Service3          = lazy(() => import('./components/services/Service3'));
const Service4          = lazy(() => import('./components/services/Service4'));
const Service5          = lazy(() => import('./components/services/Service5'));
const Service6          = lazy(() => import('./components/services/Service6'));
const Service7          = lazy(() => import('./components/services/Service7'));
const Service8          = lazy(() => import('./components/services/Service8'));
const Service9          = lazy(() => import('./components/services/Service9'));
const Service10         = lazy(() => import('./components/services/Service10'));
const WorkFantom        = lazy(() => import('./components/WorkFantom'));
const WorkWing          = lazy(() => import('./components/WorkWing'));
const WorkSwisher       = lazy(() => import('./components/WorkSwisher'));

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <LoaderProvider>
      <Router>
        <LegacyRedirectGuard />
        <ScrollToTop />
        <PageLoader />
        <CustomCursor />
        <div className="app">
          <Navbar />
          <Suspense fallback={null}>
            <Routes>
              <Route
                path={ROUTES.HOME}
                element={
                  <>
                    <Hero />
                    <WorkSection />
                    <ProcessSection />
                    <ServicesSection />
                    <ClientsSection />
                    <CanvasCursor />
                  </>
                }
              />
              <Route path={ROUTES.ABOUT}         element={<AboutSection />} />
              <Route path={ROUTES.WORK}           element={<WorkPage />} />
              <Route path={ROUTES.INSIGHTS}       element={<InsightPage />} />
              <Route path={ROUTES.CONTACT}        element={<ContactPage />} />
              <Route path={ROUTES.SERVICES}       element={<ServicesPage />} />
              <Route path={ROUTES.SERVICE_1}      element={<Service1 />} />
              <Route path={ROUTES.SERVICE_2}      element={<Service2 />} />
              <Route path={ROUTES.SERVICE_3}      element={<Service3 />} />
              <Route path={ROUTES.SERVICE_4}      element={<Service4 />} />
              <Route path={ROUTES.SERVICE_5}      element={<Service5 />} />
              <Route path={ROUTES.SERVICE_6}      element={<Service6 />} />
              <Route path={ROUTES.SERVICE_7}      element={<Service7 />} />
              <Route path={ROUTES.SERVICE_8}      element={<Service8 />} />
              <Route path={ROUTES.SERVICE_9}      element={<Service9 />} />
              <Route path={ROUTES.SERVICE_10}     element={<Service10 />} />
              <Route path={ROUTES.SERVICE_DETAIL} element={<ServiceDetailPage />} />
              <Route path={ROUTES.WORK_FANTOM}    element={<WorkFantom />} />
              <Route path={ROUTES.WORK_WING}      element={<WorkWing />} />
              <Route path={ROUTES.WORK_SWISHER}   element={<WorkSwisher />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </LoaderProvider>
  );
}

export default App;
