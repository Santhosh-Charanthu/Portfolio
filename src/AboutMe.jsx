import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photo from "./assets/Mee.jpg";
import ReactLogo from "./assets/react.png";
import MongoDb from "./assets/mongodb.png";

import RotatingText from "./TextAnimations/RotatingText/RotatingText";

import "animate.css";
import "../styles/AboutMe.css";
import Contact from "./Contact";
import MernStack from "./MernStack";
import SkillBox from "./SkillBox";

export default function AboutMe() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
      <button className="cta custom-button" onClick={handleOpenModal}>
        <span>About me</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.7 }} // Start small and transparent
              animate={{ opacity: 1, scale: 0.9 }} // Pulses to normal size
              exit={{
                opacity: 0, // Fade out
                scale: 0.8, // Shrink a bit before disappearing
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              }}
              transition={{
                type: "tween",
                damping: 30,
                stiffness: 30,
                duration: 0.6,
              }}
            >
              <div className="divider">
                {/* animate__bounceInLeft */}
                <div className="content">
                  <h2 className="aboutme">About Me</h2>
                  <motion.p
                    className="about "
                    transition={{
                      duration: 2,
                      delay: 1,
                    }}
                  >
                    👋 Hi, I'm Santhosh, a MERN Stack Developer passionate about
                    building dynamic and scalable web applications. I love
                    solving complex problems and creating seamless digital
                    experiences.
                  </motion.p>
                  <h2>Skills</h2>
                  <SkillBox />
                  <h2 className="mernstack">MERN Stack</h2>
                  <MernStack />
                </div>
                <div className="photo ">
                  <img src={photo} alt="" />
                  <Contact />
                </div>
              </div>

              <button className="close-btn" onClick={handleCloseModal}>
                &#10006;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
