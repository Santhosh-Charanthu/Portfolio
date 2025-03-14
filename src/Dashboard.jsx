import logo from "./assets/logo.png";
import AboutMe from "./AboutMe";
import Connect from "./Connect";
import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="container">
      {/* <Connect /> */}
      <div className="text-content">
        <h1>Santhosh Charanthu</h1>
        <p>MERN Stack Developer</p>
        <AboutMe />
      </div>
      <img src={logo} alt="Logo" className="responsive-logo" />
    </div>
  );
}
