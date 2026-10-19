import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Team />
        <Services />
        <Products />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
