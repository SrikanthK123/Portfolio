import './App.css';
import About from './components/About';
import Certificate from './components/Certificate';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
        <About/>
        <Education/>
        <Projects/>
        <Certificate/>
        <Skills/>
        <Footer/>
        

        
      
    </div>
  );
}

export default App;
