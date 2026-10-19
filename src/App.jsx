import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Legality from './components/sections/Legality';
import Team from './components/sections/Team';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Legality />
      <Team />
      <Services />
      <Products />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
