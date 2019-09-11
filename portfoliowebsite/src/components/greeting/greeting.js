import React from 'react';
import './greeting.scss';
import ProfilePicture from './pp.png'
import facebookIco from './icons/facebook.png'
import githubIco from "./icons/github.png"
import gmailIco from "./icons/gmail.png"
import InstaIco from "./icons/instagram.png"

// import Particles from 'react-particles-js';

// const particleParams = {
//     "particles": {
//         "number": {
//             "value": 100,
//             "density": {
//                 "enable": true,
//                 "value_area": 800
//             }
//         },
//         "color": {
//             "value": "#ffffff"
//         },
//         "shape": {
//             "type": "circle",
//             "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {
//                 "nb_sides": 5
//             },
//             "image": {
//                 "src": "img/github.svg",
//                 "width": 100,
//                 "height": 100
//             }
//         },
//         "opacity": {
//             "value": 1,
//             "random": true,
//             "anim": {
//                 "enable": true,
//                 "speed": 1,
//                 "opacity_min": 0,
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 3,
//             "random": true,
//             "anim": {
//                 "enable": false,
//                 "speed": 4,
//                 "size_min": 0.3,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": false,
//             "distance": 150,
//             "color": "#ffffff",
//             "opacity": 0.4,
//             "width": 1
//         },
//         "move": {
//             "enable": true,
//             "speed": 1,
//             "direction": "none",
//             "random": true,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 600
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {
//                 "enable": false,
//                 "mode": "grab"
//             },
//             "onclick": {
//                 "enable": false,
//                 "mode": "repulse"
//             },
//             "resize": true
//         },
//         "modes": {
//             "grab": {
//                 "distance": 200,
//                 "line_linked": {
//                     "opacity": 0.5
//                 }
//             },
//             "bubble": {
//                 "distance": 250,
//                 "size": 0,
//                 "duration": 2,
//                 "opacity": 0,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 400,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true
// }

const Greeting = () => {

    return (

        <div className="Greeting">
            {/* <Particles className='particles' params={particleParams} style/> */}
            <img className="profile" alt="Deniz Evrendilek" src={ProfilePicture}/>
            <div className="socialMedia">
                <a
                    className="facebook"
                    href={"//www.facebook.com/deniz.evrendilek"}
                    target="_blank">
                    <img className="icon" src={facebookIco}/></a>
                <a className="github" href="https://github.com/dewren99" target="_blank"><img className="icon" src={githubIco}/></a>
                <a className="gmail" href="mailto:devrendilek@gmail.com" target="_blank"><img className="icon" src={gmailIco}/></a>
                <a
                    className="instagram"
                    href="https://www.instagram.com/dewren99"
                    target="_blank"><img className="icon" src={InstaIco}/></a>
            </div>
        </div>
    );
}

export default Greeting;