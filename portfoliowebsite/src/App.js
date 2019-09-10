import React from 'react';
import {Component} from 'react';
import './App.css';
import Greeting from './components/greeting/greeting.js';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Particles from 'react-particles-js';


// import {Helmet} from "react-helmet"; const title = `Deniz Evrendilek`;

const particleParams = {
    "particles": {
        "number": {
            "value": 160,
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
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "retina_detect": true
}


class App extends Component {
    constructor() {
        super();
        this.state = {
            user: ''
        }
    }
    render() {
        return (
            <Parallax ref="parallax" className="App" pages={3} scrolling={false}>
                <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: 'black' }} />
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: 'grey' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: 'yellow' }} />

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    onClick={() => this.refs.parallax.scrollTo(1)}>
                   <Greeting/>
                   <Particles className='particles' params={particleParams}/>
                </Parallax.Layer>
                
                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    // style={styles}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    ABOUT ME SECTION
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    // style={styles}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    SKILLS TABLE
                </Parallax.Layer>


            </Parallax>
        );
    }
}
export default App;
