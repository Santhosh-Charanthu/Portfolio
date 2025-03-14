import "../styles/Skill.css";

export default function SkillBox({
  HTML,
  CSS,
  JAVASCRIPT,
  BOOTSTRAP,
  NODE,
  EXPRESS,
  REACT,
  MONGODB,
  MONGOOSE,
  SQL,
  EJS,
  JAVA,
  GIT,
  GITHUB,
  TERMINAL,
}) {
  return (
    <div className="skillContainer">
      <div className="skillRow">
        <div className="skills">{HTML}</div>
        <div className="skills">{CSS}</div>
        <div className="skills">{JAVASCRIPT}</div>
        <div className="skills">{BOOTSTRAP}</div>
      </div>
      <div className="skillRow">
        <div className="skills">{NODE}</div>
        <div className="skills">{EXPRESS}</div>
        <div className="skills">{REACT}</div>
        <div className="skills">{MONGODB}</div>
      </div>
      <div className="skillRow">
        <div className="skills">{MONGOOSE}</div>
        <div className="skills">{SQL}</div>
        <div className="skills">{EJS}</div>
        <div className="skills">{JAVA}</div>
      </div>
      <div className="skillRow">
        <div className="skills">{GIT}</div>
        <div className="skills">{GITHUB}</div>
        <div className="skills">{TERMINAL}</div>
      </div>
    </div>
  );
}
