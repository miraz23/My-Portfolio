import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import WorkExperience from './Components/WorkExperience';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Profiles from './Components/Profiles';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <WorkExperience/>
      <Projects/>
      <Profiles/>
      <Contact/>
    </div>
  );
}

export default App;
