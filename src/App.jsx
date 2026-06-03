import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoaderProvider } from './components/LoaderContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import ScrollToTop from './components/ScrollToTop';

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
        <ScrollToTop />
        <PageLoader />
        <CustomCursor />
        <div className="app">
          <Navbar />
          <Suspense fallback={null}>
            <Routes>
              <Route
                path="/"
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
              <Route path="/about"        element={<AboutSection />} />
              <Route path="/work"         element={<WorkPage />} />
              <Route path="/insights"     element={<InsightPage />} />
              <Route path="/contact"      element={<ContactPage />} />
              <Route path="/services"     element={<ServicesPage />} />
              <Route path="/services/1"   element={<Service1 />} />
              <Route path="/services/2"   element={<Service2 />} />
              <Route path="/services/3"   element={<Service3 />} />
              <Route path="/services/4"   element={<Service4 />} />
              <Route path="/services/5"   element={<Service5 />} />
              <Route path="/services/6"   element={<Service6 />} />
              <Route path="/services/7"   element={<Service7 />} />
              <Route path="/services/8"   element={<Service8 />} />
              <Route path="/services/9"   element={<Service9 />} />
              <Route path="/services/10"  element={<Service10 />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/work/fantom"  element={<WorkFantom />} />
              <Route path="/work/wing"    element={<WorkWing />} />
              <Route path="/work/swisher" element={<WorkSwisher />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </LoaderProvider>
  );
}

export default App;
