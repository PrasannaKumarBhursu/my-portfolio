
import React, { Component } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

import "./index.css"

class Contact extends Component {
    render() {
        return (
            <div className="contacts">
                <div className='contacts-container'>
                <h1  className="contact-heading">
                    Contact Me
                </h1>
                <div className="contacts-details">
                <div className="contact-inner-container">
                    <MailOutlineIcon color="secondary"/>
                    <a className="contacts-link" href="mailto:bhursuprasannakumar@gmail.com">  bhursuprasannakumar@gmail.com</a>
                </div>
                <div className="contact-inner-container">
                    <PhoneIcon color="primary"/>
                    <a className="contacts-link" href="tel:7013541473">7013541473</a>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Contact;