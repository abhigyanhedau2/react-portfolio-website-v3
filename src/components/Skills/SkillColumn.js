import React from 'react';
import SkillItem from './SkillItem';
import './SkillColumn.css';

const SkillColumn = (props) => {

    const skillItems = props.skills.map(item => {
        return <SkillItem key={item.name} label={<i className={item.iconClass} style={{ color: `${item.name === 'C++' ? item.iconColor : ''}` }}></i>} value={item.value} />
    })

    return (
        <div className='column-wrapper'>
            {skillItems}
        </div>
    )
}

export default SkillColumn