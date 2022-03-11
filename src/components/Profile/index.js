
import { Button } from '@material-ui/core';
import React, { Component } from 'react';

import "./index.css"

class Profile extends Component {
    render() {
        return (
            <div className="profile-container">
               <div className="profile-details-container">
               <p className="name-heading">Hello,my name is</p>
                <h1 className="name"  >
                    Prasanna Kumar
                </h1>
                <p  className="name-heading">And I'm a Frontend Developer</p>
                <Button color="secondary" variant="contained">Hire Me</Button>
               </div>
               <div className="profile-image-container">
                   <img className="profile-image" src="https://res.cloudinary.com/da1xbd1tx/image/upload/v1646844453/2750255-removebg_mcxgrf.png" alt="profile"/>
               </div>
            </div>
        );
    }
}

export default Profile;