import "./App.css";
import LayoutHome from "./pages/layouts/LayoutHome";
import LayoutDefault from "./pages/layouts/LayoutDefault";
import LayoutContact from "./pages/layouts/LayoutContact";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="/" element={<LayoutContact />}>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
