import './App.css';
import AboutMe from './components/aboutme/AboutMe';
import LandingPage from './components/landing/LandingPage';
import { Card, Navbar, Nav } from 'react-bootstrap';
import monkeyImage from './assets/monkey.jpg';

function App() {
  return (
    <div className="App">

      <Navbar className="flex-column custom-navbar">
        <Nav className="flex-column custom-nav">
          <Navbar.Brand href="#home" className="custom-brand">
            <img
              src = {monkeyImage} width = "50" height = "50">
            </img>
          </Navbar.Brand>
          <Nav.Link href="#about" className="custom-link">About</Nav.Link>
          <Nav.Link href="#skills" className="custom-link">Skills</Nav.Link>
          <Nav.Link href="#experience" className="custom-link">Experience</Nav.Link>
          <Nav.Link href="#projects" className="custom-link">Projects</Nav.Link>
          <Nav.Link href="#contact" className="custom-link">Contact</Nav.Link>
        </Nav>
      </Navbar>

      

      <LandingPage />
      <AboutMe />
    </div>
  );
}

export default App;
