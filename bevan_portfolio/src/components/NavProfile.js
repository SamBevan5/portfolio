import React, {useContext} from 'react';
import { Link } from 'react-router-dom';


export default (props) => {

    return (
        <div className= "Nav">
            <div className="Nav__img">
                <a href="/"><img src="sb_logo2.png" alt="scribe-logo"></img></a>
            </div>
            <div className="Nav__links">
                <Link to="/" style={{ textDecoration: 'none' }}><span id="portfolio-text-profile">Portfolio</span></Link>
                <Link to="/profile" style={{ textDecoration: 'none' }}><span id="profile-text-profile">Profile</span></Link>
            </div>
        </div>
    );
};