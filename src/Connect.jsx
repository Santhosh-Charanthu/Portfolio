import { useState, useEffect } from "react";
import "../styles/Connect.css";
import Form from "./Form";
import { motion, AnimatePresence } from "framer-motion";

export default function Connect() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <div className="connect-container">
      <button className="connect-button" onClick={handleOpenModal}>
        Connect🔗
      </button>

      {/* Pre-render the modal content off-screen to avoid initial render lag */}
      {/* <div style={{ position: "absolute", left: "-9999px" }}>
        <Form />
      </div> */}

      <AnimatePresence mode="wait">
        {showModal && (
          <motion.div
            key={showModal}
            className="modal-overlay1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content1"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 0.9 }}
              exit={{
                opacity: 0,
                scale: 0.8,
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
              <button
                className="connect-close-button"
                onClick={handleCloseModal}
              >
                ❌
              </button>
              <Form />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
