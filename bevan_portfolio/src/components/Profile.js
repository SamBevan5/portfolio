import React from 'react';
import NavProfile from './NavProfile'

export default (props) => {

    return (
        <>
            <NavProfile />
            <div className="Profile">
                <div className="Profile__info">
                    <p>
                        I’m a full stackdeveloper interested in frontend design, technology and workmanship.
                <br /><br />
                Currently looking for work in Boston, MA.
                <br /><br />
                Previously I’ve worked in Sales at early stage startups including <a href="ionicframework.com">Ionic</a>, an open-source SDK for hybrid mobile app development.

                Feel free to contact me at <a href="mailto:samueleganbevan@gmail.com">samueleganbevan@gmail.com</a>

                    </p>
                </div>
                <div className="Profile__image">
                    <div className="Profile__image__img">
                        <img></img>

                    </div>
                
                    <div className="Profile__image__links">
                        <img src="portfolio.png"></img>
                        <a href="">LinkedIn</a>
                        <a href="">GitHub</a>
                        <a href="">Check out my Resume</a>
                    </div>
                </div>
            </div>
        </>
    )


}