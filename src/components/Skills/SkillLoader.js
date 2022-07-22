import React, { useEffect } from 'react';
import './SkillLoader.css';

const SkillLoader = (props) => {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const count = 0;
                const fill = entry.target.querySelector('.loader-fill');

                if (entry.isIntersecting && !count) {
                    fill.classList.add('fill');
                    return; // if we added the class, exit the function
                }

                // We're not intersecting, so remove the class!
                // Will only not remove the class if it is once triggered
                if (count)
                    fill.classList.remove('fill');

                // Will remove the class and add it again
                // fill.classList.remove('fill');
            });
        });

        const loaders = Array.from(document.querySelectorAll('.loader-wrapper'));

        loaders.forEach(loader => {
            observer.observe(loader);
        })

    }, [])


    return (
        <div className="loader-wrapper">
            <div className="loader-fill" style={{ '--value': `${props.value}` }}></div>
        </div >
    )
}

export default SkillLoader