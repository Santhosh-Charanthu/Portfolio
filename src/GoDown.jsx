import { useState } from "react";
import "../styles/GoDown.css";
import ExploreNest from "./assets/ExploreNest.png";
import BlogNest from "./assets/BlogNest.png";
import ProjectCard from "./ProjectCard";

export default function GoDown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button className="button circle-button" onClick={handleClick}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>

      <div className={`overlay-page ${isOpen ? "active" : ""}`}>
        <button className="close-button" onClick={handleClose}>
          ❌
        </button>
        <h2>My Projects</h2>

        <ProjectCard
          title="ExploreNest – Discover, Share & Review Places"
          description="ExploreNest is a dynamic web application that allows users to post, explore, and review various places. Users can create an account, log in, and share listings with images, descriptions, and pricing details. The platform also enables users to engage with each listing by adding reviews and sharing their experiences. The homepage highlights featured listings, making it easy to discover new places. Built with a user-friendly interface and seamless functionality, PlaceShare enhances how people share and discover locations."
          techStack={[
            "Node.js",
            "Express.js",
            "EJS",
            "MongoDB Atlas",
            "CSS",
            "Bootstrap",
          ]}
          imgSrc={ExploreNest}
          link="https://explorenest-dq3b.onrender.com/listings"
        />
        <ProjectCard
          title="BlogNest – Write. Save. Publish. Repeat."
          description="The blog editor provides users with a clean and intuitive interface to effortlessly create and edit blog posts. As users type, their content is automatically saved as a draft, ensuring no data is lost during the writing process. These drafts are securely stored and can be resumed at any time, allowing for seamless writing continuity. Once a blog is complete, users can publish it with a single click. Published blogs are displayed in an easily accessible list, making them simple to browse and manage. Users also have the ability to revisit and update any published post. The editor delivers a smooth writing experience with real-time saving and feedback. It is fully optimized for both desktop and mobile devices, adapting responsively to different screen sizes. Overall, the platform emphasizes simplicity, reliability, and a user-friendly experience."
          techStack={["Node.js", "Express.js", "React", "MongoDB Atlas", "CSS"]}
          imgSrc={BlogNest}
          link="https://blognest-kmn1.onrender.com/login"
        />
      </div>
    </>
  );
}
