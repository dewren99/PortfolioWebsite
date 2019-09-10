import React from 'react';
import './greeting.scss';
import ProfilePicture from './pp.png'
import facebookIco from './icons/facebook.png'
import githubIco from "./icons/github.png"
import gmailIco from "./icons/gmail.png"
import InstaIco from "./icons/instagram.png"

const Greeting = () => {
    return (
        <div className="Greeting">
            <img className="profile" alt="Deniz Evrendilek" src={ProfilePicture}/>
            <div className="socialMedia">
                <a className="facebook" href="" target="_top"><img className="icon" src={facebookIco}/></a>
                <a className="github" href="" target="_top"><img className="icon" src={githubIco}/></a>
                <a className="gmail" href="" target="_top"><img className="icon" src={gmailIco}/></a>
                <a className="instagram" href="" target="_top"><img className="icon" src={InstaIco}/></a>
            </div>
        </div>
    );
}

export default Greeting;