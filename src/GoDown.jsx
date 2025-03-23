import { useState } from "react";
import "../styles/GoDown.css";
import ExploreNest from "./assets/ExploreNest.png";

export default function GoDown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="button circle-button" onClick={handleClick}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>

      {/* Fullscreen Scrollable Overlay */}
      <div className={`overlay-page ${isOpen ? "active" : ""}`}>
        <button className="close-button" onClick={handleClose}>
          ❌
        </button>
        <h2>My Projects</h2>
        <div className="parent">
          <div className="desc-card">
            <h2>ExploreNest – Discover, Share & Review Places</h2>
            <p className="desc-para">
              ExploreNest is a dynamic web application that allows users to
              post, explore, and review various places. Users can create an
              account, log in, and share listings with images, descriptions, and
              pricing details. The platform also enables users to engage with
              each listing by adding reviews and sharing their experiences. The
              homepage highlights featured listings, making it easy to discover
              new places. Built with a user-friendly interface and seamless
              functionality, PlaceShare enhances how people share and discover
              locations.
            </p>
            <p>
              Tech Stack: [Node.js, Express.js, EJS, MongoDb, CSS, Bootstrap.]
            </p>
          </div>

          <div className="card">
            <img
              className="webImg"
              src={ExploreNest}
              alt="ExploreNest"
              loading="eager"
            />
            <div role="tooltip" id="help-tooltip" className="tool">
              <strong>
                <a
                  href="https://explorenest-dq3b.onrender.com/listings"
                  target="_blank"
                >
                  Explore
                </a>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
