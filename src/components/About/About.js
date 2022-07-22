import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="about" className='about-wrapper'>
            <h1>About</h1>
            <div className="icon-and-desc-wrapper">
                <div className="about-icon"><i className="fa-solid fa-user-tie"></i></div>
                <div className="about-desc">
                    <p>I'm currently a 3rd Year IT Student at Vishwakarma Institute of Information Technology, Pune. I'm interested in Web Development, currently learning MERN Stack and making projects in it.</p>
                    <br />
                    <p>I've learnt many languages and frameworks during my bachelor's degree, made interesting and deployable projects using them. I have a keen interest in Web Development, mastered many frameworks and build projects.</p>
                    <br />
                    <p>During my bachelors degree I've handled many roles such as Joint Operations Head in TEDxVIIT and Joint Magazine Head at ITSF and created many interesting projects.</p>
                </div>
            </div>
        </div>
    )
}

export default About