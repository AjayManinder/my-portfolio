import React from 'react';
// import profileImg from '../assets/profile.jpg'; // Replace with your profile image path

const Home = () => {
  return (
    <div className="home">
    
     {/* <img src={profileImg} alt="Profile" className="profile-img" /> */}
     <div class="home-component">
      <h1>AJAY MANINDER</h1>
      <p>Full-Stack React Developer</p>
      <p>Email: ajyrdev@gmail.com</p>
      <p>Phone: +1-913-890-3323</p>

      <br/><br/><br/><br/>
      <p className='para'>
       <span> Welcome to my portfolio! I am a Full-Stack Developer with over 3 years of experience delivering innovative and dynamic web applications. </span> 
       <span> I specialize in creating solutions that are not only visually engaging but also optimized for performance and scalability. </span>
       <span> My focus is on crafting seamless user experiences, ensuring functionality across all platforms, and driving projects from concept to completion with attention to detail and quality. </span>
       <span> Explore my portfolio to see the range of projects I’ve worked on and how I approach building modern web solutions.</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
