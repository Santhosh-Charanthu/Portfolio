import "../styles/Mern.css";

export default function Mern({
  MongoDbLogo,
  ExpressLogo,
  ReactLogo,
  NodeLogo,
}) {
  return (
    <div className="container">
      <div className="item">
        <img className="MERN" src={MongoDbLogo} alt="" />
        <span>
          <b>M</b>
        </span>
      </div>
      <div className="item">
        <img className="MERN" src={ExpressLogo} alt="" />
        <span>
          <b>E</b>
        </span>
      </div>
      <div className="item">
        <img className="MERN" src={ReactLogo} alt="" />
        <span>
          <b>R</b>
        </span>
      </div>
      <div className="item">
        <img className="MERN" src={NodeLogo} alt="" />
        <span>
          <b>N</b>
        </span>
      </div>
    </div>
  );
}
