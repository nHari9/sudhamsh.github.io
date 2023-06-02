
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Header from './components/navbar/navbar';
import Projects from './components/projetcs/projects';
import Careers from './components/careers/careers';
import About from './components/about/about';
import Contact from './components/contact/contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Careers' element={<Careers/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
