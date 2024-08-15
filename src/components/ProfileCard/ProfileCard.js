import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileCard.css'; 
import Resume from "../../assets/Resume.docx";
import img from "../../assets/profile.jpg";


const ProfileCard = () => {
  console.log("/assets/profile.jpeg");
const navigate = useNavigate();
//const img = "https://collegeportal.s3.amazonaws.com/1-1709910854155-image.jpg";

const PortfolioButtonClick=()=>{
navigate("main");
}

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            className="profile-image"
            src={img}
            alt="Ajay"
          />
        </div>
        <h2 className="profile-name">Ajay Maninder</h2>
        <span className="profile-title">Full-Stack Developer</span>
      </div>

      <div className="profile-content">
      <h1 className="wave-text">
    <span className="wave-animation">H</span>
    <span className="wave-animation">e</span>
    <span className="wave-animation">l</span>
    <span className="wave-animation">l</span>
    <span className="wave-animation">o</span>
    <span className="wave-animation">!</span>
  </h1>
        <p className="intro-text">
        I’m a full-stack developer with a passion for crafting end-to-end solutions that drive innovation and efficiency. 
        I specialize in building responsive web applications using modern front-end frameworks and scalable back-end architectures. 
        With a focus on performance and user experience.
        </p>
        <div className="buttons">
          <a className="resume-btn" href={Resume} download="Ajay_Maninder_Resume.pdf">RESUME</a>
          <button className="portfolio-btn" onClick={PortfolioButtonClick}>PORTFOLIO</button>
        </div>
        <p className="description">
          I’m a highly competent, creative professional who’s eager to join a challenging
          and passionate team. As a self-starter and quick learner, I’m ready to exceed
          expectations. I can assure you I will bring fresh ideas to the table.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
