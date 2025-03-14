import MongoDbLogo from "./assets/mongodb.png";
import ExpressLogo from "./assets/express.png";
import ReactLogo from "./assets/react.png";
import NodeLogo from "./assets/node.png";

import Mern from "./Mern";

export default function MernStack() {
  return (
    <div className="mern">
      <Mern
        MongoDbLogo={MongoDbLogo}
        ExpressLogo={ExpressLogo}
        ReactLogo={ReactLogo}
        NodeLogo={NodeLogo}
      />
    </div>
  );
}
