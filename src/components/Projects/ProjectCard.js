import React from 'react';
import ImageSlider from './ImageSlider';
import './ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div className='project-card-wrapper'>
      <div className="card-img-wrapper">
        <ImageSlider img1={props.img1} img2={props.img2} img3={props.img3} />
      </div>
      <div className="card-desc">
        <h1>{props.name}</h1>
        <h3>{props.subheading}</h3>
        <p>{props.desc}</p>
        <a href={props.projectLink} without rel="noreferrer" target="_blank"><button>View Project</button></a>
      </div>
    </div>
  )
}

export default ProjectCard