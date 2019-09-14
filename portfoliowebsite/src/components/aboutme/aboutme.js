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
                    I am interested in Artificial Intelligence, Game Development, Web/App
                    Development, and Quantum Computing. I have been doing both research and personal
                    projects to appease my thirst for knowledge concerning these areas of interest.
                    So far, I have gained experience in writing full-stack web applications and am
                    familiar with Unreal Engine 4. I have also implemented numerous programs with
                    C/C++ by making use of OOP, various data structures, and Search/Sort algorithms.
                </p>
                <br/>
                <br/>
                <p>
                    I like watching movies at least one movie per week as well as freehand drawing
                    if time allows me to. I am a daily follower of the tech news to stay updated. I
                    like playing chess, popular single and/or multiple player games as well as
                    traveling to new countries and tasting their signature foods.
                </p>
                <Button className='resume' variant="outlined" color="inherit">
                    <a
                        href="https://docs.google.com/document/d/10CAb88EGzhcX5cdnub9xTIdz9MyVjqrPCu24aGX3dwg/edit?usp=sharing">Resume</a>
                </Button>
            </div>
        </div>
    );
}

export default AboutMe;