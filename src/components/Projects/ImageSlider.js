import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImageSlider = (props) => {
    return (
        <div>
            <div className="slider-wrapper">
                <Fade duration={2000} arrows={false}>
                    <div className="each-slide slide">
                        <div>
                            <img src={props.img1} alt="..." />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={props.img2} alt="..." />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={props.img3} alt="..." />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default ImageSlider