import './App.css';
import Hero from './components/HeroSection/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/ProgramsSection/Programs';
import Reasons from './components/Reasons/Reasons';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
