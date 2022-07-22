import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { projects } from '../../utility/projects-data';

const Projects = () => {

    const projectItems = projects.map(item => {
        return <ProjectCard key={item.id} name={item.name} subheading={item.subheading} desc={item.desc} img1={item.imgurl1} img2={item.imgurl2} img3={item.imgurl3} projectLink={item.projectLink} />
    })

    return (
        <div id="projects" className="projects-wrapper">
            <div className="heading-and-btn">
                <h1>Projects</h1>
                <button>View All</button>
            </div>
            <div className="projects-container">
                {projectItems}
            </div>
        </div>
    )
}

export default Projects