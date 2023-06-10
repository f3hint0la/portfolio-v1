import "./App.css";
import "./styles/Global.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
