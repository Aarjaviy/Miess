import './App.css';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import Events from './components/Events'
import Team from './components/Team'
import Gallery from './components/Gallery';
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar/>
      <Welcome/>
      <AboutUs/>
      <Events/>
      <Team/>
      <Gallery/>
      <Contact/>
    </>
  );
}
