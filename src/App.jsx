import "./App.css";
import "./styles/Global.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Home />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
