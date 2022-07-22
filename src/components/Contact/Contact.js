import React from 'react';
import { contacts } from '../../utility/contact-data';
import './Contact.css';
import ContactItem from './ContactItem';

const Contact = () => {

    const contactItems = contacts.map(item => {
        return <ContactItem key={item._id} name={item.name} icon={item.icon} link={item.link} label={item.label} />;
    })

    return (
        <div id="contacts" className='contacts-wrapper'>
            <h1>Contact</h1>
            {contactItems}
        </div>
    )
}

export default Contact