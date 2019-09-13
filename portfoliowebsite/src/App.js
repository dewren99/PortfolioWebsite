import React from 'react';
import {Component, createRef} from 'react';
import './App.css';
import Greeting from './components/greeting/greeting.js';
import AboutMe from './components/aboutme/aboutme.js'
import SkillsTable from './components/skillstable/skillstable.js'
import Scroll from './components/scroll/scroll.js'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {Transition, animated} from 'react-spring/renderprops'
import Particles from 'react-particles-js';

import _ from "lodash";
import PropTypes from 'prop-types';
import ReactPageScroller from "react-page-scroller";
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {Image, Input, Menu, Segment, Sticky} from 'semantic-ui-react'

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

    contextRef = createRef()

    render() {

        const styles = {
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        const buttonStyle = {
            fontWeight: 'bold',
            color: 'black',
            letterSpacing: '3px'
        }

        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef}>
                    <Menu
                        attached='top'
                        tabular
                        style={{
                        backgroundColor: '#cccccc'
                    }}>
                        <ButtonGroup fullWidth>
                            <Button style={buttonStyle} onClick={() => this.refs.parallax.scrollTo(0)}>Me on Social Media</Button>
                            <Button style={buttonStyle} onClick={() => this.refs.parallax.scrollTo(1)}>Who am I</Button>
                            <Button style={buttonStyle} onClick={() => this.refs.parallax.scrollTo(2)}>Skills</Button>
                        </ButtonGroup>
                    </Menu>
                </Sticky>

                <Parallax ref="parallax" className="App" pages={3} scrolling={false}>

                    <Particles className='particles' params={particleParams} style/>

                    <Parallax.Layer
                        offset={0}
                        speed={1}
                        style={{
                        backgroundColor: 'black',
                        opacity: '0.70'
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
                        backgroundColor: '#cccccc'
                    }}/>
                    <Parallax.Layer offset={0} speed={0.5} factor={1}>
                        <Greeting/>
                    </Parallax.Layer>

                    <Parallax.Layer offset={1} speed={-0.1} factor={1} style={styles}>

                        <AboutMe/>

                    </Parallax.Layer>

                    <Parallax.Layer offset={2} speed={0.5} style={styles} factor={1}>
                        <SkillsTable/>
                    </Parallax.Layer>

                </Parallax>
            </div>

        );
    }
}
export default App;
