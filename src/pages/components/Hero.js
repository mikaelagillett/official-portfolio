import logo from "../../assets/logo.png";

function Hero() {
  return (
    <div className="main">
      <img className="logo" src={logo} alt="my logo images" />
      <h1>
        Welcome. <br /> I'm Mikaela, <br className="d-sm-none" />a Front end
        developer based in Canada
      </h1>
    </div>
  );
}

export default Hero;
