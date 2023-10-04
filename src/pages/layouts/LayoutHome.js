import { Outlet } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function LayoutHome() {
  return (
    <div>
      <div className="home">
        <div className="hero">
          <Hero />
          <HomeNav />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LayoutHome;
