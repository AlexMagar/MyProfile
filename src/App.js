import logo from './logo.svg';
import './App.css';
import { Headers } from './Components/Headers';
import { Hero } from './Components/Hero';
import { Banner } from './Components/Banner';
import { Skill } from './Components/Skill';
import { Projects } from './Components/Projects';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { DarkModeSelector } from './Components/DarkModeSelector';
import { Goup } from './Components/Goup';

function App() {
  return (
    <div >
      <Headers/>
      <DarkModeSelector/>
      <Hero/>
      <Banner/>
      <Skill/>
      <Projects/>
      <About/>
      <Contact/>
      <Goup/>
      <Footer/>
    </div>
  );
}

export default App;
