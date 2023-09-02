import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import ScrolltoTop from "./components/ScrolltoTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Socials />
      <Footer />
      <ScrolltoTop />
    </div>
  );
}

export default App;
