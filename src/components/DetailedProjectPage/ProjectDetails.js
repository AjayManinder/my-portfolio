import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../ProjectsData/projectsData.json'; 
import "./ProjectDetails.css";
import { useNavigate } from 'react-router-dom';
import { IoChevronBackCircleOutline} from "react-icons/io5";
import { RiArrowLeftWideLine, RiArrowRightWideFill } from "react-icons/ri";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const ProjectDetails = () => {

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Add a slight delay to ensure DOM is ready
  
    return () => clearTimeout(scrollTimeout); // Cleanup timeout
  }, []);
  const navigate = useNavigate();
  // Navigation: Only navigate back without fallback
  const goBack = () => {
    console.log("go back")
    navigate(-1); 
  };

  const { category, id } = useParams();
  const projectIndex = parseInt(id, 10);

 
  const categoryData = projectsData[`${category}Projects`];
  
  if (!categoryData) {
    return <p>Category not found</p>;
  }

  const project = categoryData[projectIndex];
  
  if (!project) {
    return <p>Project not found</p>;
  }

 
  const videoUrl = project.video ? project.video.split('?')[0] : '';
const videoId = videoUrl.split('/').pop(); 


const settings = {
  dots: true, 
  infinite: true, 
  speed: 500,
  slidesToShow: 1, 
  slidesToScroll: 1, 
  prevArrow: <RiArrowLeftWideLine className="arrow arrow-left" />,
  nextArrow: <RiArrowRightWideFill style={{ fontSize: '32px' }} className="arrow arrow-right" /> ,
  beforeChange: (currentSlide, nextSlide) => {
    // Remove the currentSlide and slideCount props from the DOM element
    const sliderElement = document.querySelector('.slick-slider');
    sliderElement.removeAttribute('currentSlide');
    sliderElement.removeAttribute('slideCount');
  },
};

  return (
    <section className="project-details">
      <div className='title-container'>
      <button onClick={goBack} className='back-button-icon'><IoChevronBackCircleOutline /></button>
      <h2>{project.title}</h2>
       </div>
      <h4>{project.description}</h4>
      <ul>
        {project.details.map((detail, index) => (
          <li className='list_padding' key={index}>{detail}</li>
        ))}
      </ul>
      <div>
      {project.repoLink && (
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      )}
      </div>
      <div>
      {project.screenshots && (
          <div className="carousel-container">
            <Slider {...settings}>
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="carousel-slide">
                  <img className="img" src={screenshot} alt={`Screenshot ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
      <ul>
        {project.additional_Details1.map((additional_Details1, index) => (
          <li className='list_padding' key={index}>{additional_Details1}</li>
        ))}
      </ul>
      <div>
      {project.screenshots1 && (
          <div className="carousel-container">
            <Slider {...settings}>
              {project.screenshots1.map((screenshot1, index) => (
                <div key={index} className="carousel-slide">
                  <img className="img" src={screenshot1} alt={`Screenshot ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
      <ul>
        {project.additional_Details2.map((additional_Details2, index) => (
          <li className='list_padding' key={index}>{additional_Details2}</li>
        ))}
      </ul>
      <div>
      {project.screenshots2 && (
          <div className="carousel-container">
            <Slider {...settings}>
              {project.screenshots2.map((screenshot2, index) => (
                <div key={index} className="carousel-slide">
                  <img className="img" src={screenshot2} alt={`Screenshot ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
      <div className='detail-page-video'>
      {project.video && (
    <iframe
    width="80%"
    height="400"
    src={`https://www.youtube.com/embed/${videoId}?controls=0&rel=0&modestbranding=0&playsinline=0&autoplay=1&showinfo&fs=1&mute=0`}
    title="YouTube video player"
  ></iframe>
      )}
      </div>
    </section>
  );
};

export default ProjectDetails;
