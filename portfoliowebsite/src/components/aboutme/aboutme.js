import React from 'react';
import './aboutme.scss';

import Button from '@material-ui/core/Button'

import BackgroundSlider from 'react-background-slider'
import chessIMG from '../../slideImg/chess.jpg'
import gamingIMG from '../../slideImg/gaming.jpg'
import codingIMG from '../../slideImg/code.jpg'
import mapIMG from '../../slideImg/map.jpg'
import cinemaIMG from '../../slideImg/cinema.jpg'

const AboutMe = () => {

    return (
        <div className="AboutMe">

            <div className="page">
                <BackgroundSlider
                    className="BackgroundSlider"
                    images={[chessIMG, codingIMG, gamingIMG, mapIMG, cinemaIMG]}
                    duration={5}
                    transition={2}/>
                <h1>Who is Deniz Evrendilek</h1>
                <p>
                    I was born on 09/09/1999 in Columbus (OH, USA) and raised in Turkey. Having
                    finished my High School in Turkey in 2017, I have entered Simon Fraser
                    University (SFU, Canada) to major in Computing Science through Fraser
                    International College (FIC) and now am sophomore.
                </p>
                <br/>
                <br/>
                <p>
                    I am interested in Artificial Intelligence, Game Devolopment, Web/App
                    Devolopment, and Quantum Computing and I have been doing both research and
                    personal projects to appease my hunger for knowladge concerning these areas of
                    interest. So far, I have gained experience in writing full-stack web
                    applications and am familiar to Unreal Engine 4. I have also programmed
                    numerious programs with C/C++ by making use of OOP, various Data Structures and
                    Search/Sort algorithms.
                </p>
                <br/>
                <br/>
                <p>
                    I like watching movies a lot. So, I try to watch atleast one movie per week. I
                    like to follow the tech news daily and see whats going on in the industry. I
                    also like playing popular singleplayer and multiplayer games. I used to do a lot
                    of freehand drawing but not so much these days. Moreover, I enjoy playing chess,
                    although I would not consider myself a good chess player. Lastly, I like
                    traveling to new countries and continents and tasting their signiture foods.
                </p>
                <Button className='resume' variant="outlined" color="inherit">
                    <a href="https://docs.google.com/document/d/1IX8cDU19_hW2bb_sNlCYNWIAe2fg-Ng5bXu7mVtc2dk/edit?usp=sharing">Resume</a>
                </Button>
            </div>
        </div>
    );
}

export default AboutMe;