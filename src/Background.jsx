import "../styles/Background.css";
import Dashboard from "./Dashboard";
import GoDown from "./GoDown";

export default function Background() {
  return (
    <div>
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Dashboard />
      <GoDown />
    </div>
  );
}
