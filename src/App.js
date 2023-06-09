import './App.css';
import Hero from './components/HeroSection/Hero';
import Plans from './components/PlansSection/Plans';
import Programs from './components/ProgramsSection/Programs';
import Reasons from './components/ReasonsSection/Reasons';
import Testimonials from './components/TestimonialsSection/Testimonials';
import Join from './components/JoinSection/Join';
import Footer from './components/Footer/Footer';

function App() {
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
