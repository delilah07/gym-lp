import './App.css';
// import React, { useState, useCallback, useEffect, useRef } from 'react';
import Hero from './components/HeroSection/Hero';
import Plans from './components/PlansSection/Plans';
import Programs from './components/ProgramsSection/Programs';
import Reasons from './components/ReasonsSection/Reasons';
import Testimonials from './components/TestimonialsSection/Testimonials';
import Join from './components/JoinSection/Join';
import Footer from './components/Footer/Footer';

function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const mobileMenuRef = useRef();
  // const closeOpenMenus = useCallback(
  //   (e) => {
  //     if (
  //       mobileMenuRef.current &&
  //       !menuOpen &&
  //       !mobileMenuRef.current.contains(e.target)
  //     ) {
  //       setMenuOpen(false);
  //       console.log('click');
  //     }
  //   },
  //   [menuOpen]
  // );

  // useEffect(() => {
  //   document.addEventListener('mousedown', closeOpenMenus);
  // }, [closeOpenMenus]);

  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
