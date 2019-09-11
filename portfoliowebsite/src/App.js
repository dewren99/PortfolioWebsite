import React from 'react';
import {Component} from 'react';
import './App.css';
import Greeting from './components/greeting/greeting.js';
import AboutMe from './components/aboutme/aboutme.js'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {Transition, animated} from 'react-spring/renderprops'
import Particles from 'react-particles-js';

// import BackgroundSlider from 'react-background-slider'
// import chessIMG from './slideImg/chess.jpg'
// import gamingIMG from './slideImg/gaming.jpg'
// import codingIMG from './slideImg/code.jpg'

// import {Helmet} from "react-helmet"; const title = `Deniz Evrendilek`;

const particleParams = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {}
        },
        "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    render() {

        const styles = {
            // fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        return (
            <Parallax ref="parallax" className="App" pages={3} scrolling={true}>
                <Particles className='particles' params={particleParams} style/>
                <Parallax.Layer
                    offset={0}
                    speed={1}
                    style={{
                    backgroundColor: 'black',
                    opacity: '0.75'
                }}/>
                <Parallax.Layer
                    offset={1}
                    speed={1}
                    factor={1}
                    style={{
                    backgroundColor: '#606060'
                }}/>
                <Parallax.Layer
                    offset={2}
                    speed={1}
                    factor={1}
                    style={{
                    backgroundColor: '#4B0082'
                }}/>

                <Parallax.Layer
                
                    offset={0}
                    speed={0.5}
                    factor={1}
                    onClick={() => this.refs.parallax.scrollTo(1)}>
                    <Greeting/>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    factor={1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(2)}>

                    <AboutMe/>

                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    style={styles}
                    factor={1}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    SKILLS TABLE
                </Parallax.Layer>

            </Parallax>
        );
    }
}
export default App;
