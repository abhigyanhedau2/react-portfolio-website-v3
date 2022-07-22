import React from 'react';
import './ContactItem.css';

const ContactItem = (props) => {
    return (
        <div className="contact-item-wrapper">
            <a href={props.link} rel="noreferrer" target="_blank" >
                {props.icon}
                <label>{props.label}</label>
            </a>
        </div>
    )
}

export default ContactItem