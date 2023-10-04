import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./pages/components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
