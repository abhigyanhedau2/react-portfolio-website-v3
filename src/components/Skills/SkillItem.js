import React from 'react';
import SkillLoader from './SkillLoader';
import './SkillItem.css';

const SkillItem = (props) => {
  return (
    <div className='skill-item'>
        <label>{props.label}</label>
        <SkillLoader value={props.value} />
    </div>
  )
}

export default SkillItem