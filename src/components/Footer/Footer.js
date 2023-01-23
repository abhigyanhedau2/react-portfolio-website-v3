import React from 'react';
import myResume from '../../assets/Resume.pdf';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className="footer-menu">
                <ul>
                    <li><a href="#navbar">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contact</a></li>
                    <li><a href={myResume}>Resume</a></li>
                </ul>
            </div>
            <hr />
            <div className="footer-icons">
                <a href="mailto:abhigyanhedau2@gmail.com"><i class="fa-solid fa-at"></i></a>
                <a href="https://github.com/abhigyanhedau2" rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href={myResume}><i class="fa-solid fa-file"></i></a>
                <a href="https://www.linkedin.com/in/abhigyan-hedau-a31b161b3" rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <p>Abhigyan Hedau</p>
        </div>
    )
}

export default Footer