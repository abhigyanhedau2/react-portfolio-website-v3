import React from 'react';
import './Title.css';
import myImage from '../../assets/photo.png';

const Title = () => {

    setInterval(() => {

        const show = document.querySelector('span[data-show]');
        const next = show.nextElementSibling || document.querySelector('span:first-child');
        const up = document.querySelector('span[data-up]');

        if (up)
            up.removeAttribute('data-up');

        show.removeAttribute('data-show');
        show.setAttribute('data-up', '');

        next.setAttribute('data-show', '');

    }, 2000);

    return (
        <div className='title-wrapper'>
            <div className="title-about-wrapper">
                <div className="text-container">
                    <h2>Hi, I'm</h2>
                    <h2>Abhigyan Hedau.</h2>
                    <h2>
                        <div className="mask">
                            <span data-show>An IT Engineer</span>
                            <span>A Web Developer</span>
                            <span>A Tech Enthusiast</span>
                        </div>
                    </h2>
                </div>
            </div>
            <div className="title-image-wrapper">
                <div className="rotate">
                    <div className="white-circle"></div>
                    <img src={myImage} alt='..' />
                </div>
            </div>
        </div>
    )
}

export default Title