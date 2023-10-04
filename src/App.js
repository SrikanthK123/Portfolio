import './App.css';
import About from './components/About';
import Certificate from './components/Certificate';
import Education from './components/Education';
import ErrorPage from './components/ErrorPage';
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
        

        
      
    </div>
  );
}

export default App;
