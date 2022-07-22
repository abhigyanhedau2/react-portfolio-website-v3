import React from 'react';
import SkillColumn from './SkillColumn';
import './Skills.css'
import { skillArr1, skillArr2 } from '../../utility/skills-data';

const Skills = () => {

    return (
        <div id='skills' className='skills-wrapper'>
            <h1>Skills</h1>
            <div className="skill-column-wrapper">
                <SkillColumn className="skill-column" skills={skillArr1} />
                <SkillColumn className="skill-column" skills={skillArr2} />
            </div>
        </div>
    )
}

export default Skills