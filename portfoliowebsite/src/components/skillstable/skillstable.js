import React from 'react';
import './skillstable.scss';

import cIMG from './skillsIco/c++.png'
import asmIMG from './skillsIco/assembly.png'
import jsIMG from './skillsIco/js.png'
import matlabIMG from './skillsIco/matlab.png'
import pyIMG from './skillsIco/python.png'
import rIMG from './skillsIco/r.png'
import railsIMG from './skillsIco/rails.png'

import eu4IMG from './skillsIco/eu4.jpg'
import expressIMG from './skillsIco/ex.png'
import gitIMG from './skillsIco/git.png'
import githubIMG from './skillsIco/github.png'
import gcloudIMG from './skillsIco/google.jpg'
import herokuIMG from './skillsIco/heroku.png'
import htmlIMG from './skillsIco/html.png'
import macosIMG from './skillsIco/macos.png'
import officeIMG from './skillsIco/ms.png'
import nodejsIMG from './skillsIco/node.png'
import reactjsIMG from './skillsIco/react.png'
import sassIMG from './skillsIco/sass.png'
import psgresqlIMG from './skillsIco/sql.png'
import ubuntuIMG from './skillsIco/ubuntu.png'
import virtualboxIMG from './skillsIco/vb.jpg'
import vmwareIMG from './skillsIco/vm.jpg'
import windowsIMG from './skillsIco/windows.png'

// import styled from 'styled-components'; import {Grid, Cell} from
// "styled-css-grid";

const SkillsTable = () => {

    return (
        <div className="skillstable">
            {/* <h1>Technical Skills</h1> */}
            <div className="table">
                <div className="row">
                    <h3 style={{
                        textDecoration: ''
                    }}>Programming Experience/Exposure</h3>
                    <figure className="skill"><img alt="" src={cIMG}/>
                        <figcaption>C/C++</figcaption>
                    </figure>
                    <figure className="skill"><img alt="assembly" src={asmIMG}/>
                        <figcaption>Assembly</figcaption>
                    </figure>
                    <figure className="skill"><img alt="js" src={jsIMG}/>
                        <figcaption>Javascript</figcaption>
                    </figure>
                    <figure className="skill"><img alt="matlab" src={matlabIMG}/>
                        <figcaption>Matlab</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={pyIMG}/>
                        <figcaption>Python</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={rIMG}/>
                        <figcaption>R</figcaption>
                    </figure>
                </div>
                <div className="row">
                    <h3 style={{
                        textDecoration: ''
                    }}>Backend Web Devolopment</h3>
                    <figure className="skill"><img alt="" src={nodejsIMG}/>
                        <figcaption>NodeJs</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={expressIMG}/>
                        <figcaption>ExpressJs</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={railsIMG}/>
                        <figcaption>Ruby on Rails</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={psgresqlIMG}/>
                        <figcaption>PostgreSQL</figcaption>
                    </figure>
                </div>
                <div className="row">
                    <h3 style={{
                        textDecoration: ''
                    }}>Frontend Web Devolopment</h3>
                    <figure className="skill"><img alt="" src={reactjsIMG}/>
                        <figcaption>ReactJs</figcaption>
                    </figure>
                    <figure className="skill"><img alt="assembly" src={htmlIMG}/>
                        <figcaption>HTML</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={sassIMG}/>
                        <figcaption>CSS/Sass</figcaption>
                    </figure>
                </div>

                <div className="row">
                    <h3 style={{
                        textDecoration: ''
                    }}>Cloud Servers</h3>
                    <figure className="skill"><img alt="" src={gcloudIMG}/>
                        <figcaption>Google Cloud</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={herokuIMG}/>
                        <figcaption>Heroku</figcaption>
                    </figure>

                </div>
                <div className="row">
                    <h3 style={{
                        textDecoration: ''
                    }}>Operation Systems</h3>
                    <figure className="skill"><img alt="" src={windowsIMG}/>
                        <figcaption>Windows</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={ubuntuIMG}/>
                        <figcaption>Ubuntu</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={macosIMG}/>
                        <figcaption>MacOs</figcaption>
                    </figure>
                </div>
                <div className="row">
                    <h3 style={{
                        textDecoration: ''
                    }}>
                        Tools
                    </h3>
                    <figure className="skill"><img alt="" src={eu4IMG}/>
                        <figcaption>Unreal Engine 4</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={virtualboxIMG}/>
                        <figcaption>VirtualBox</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={gitIMG}/>
                        <figcaption>Git</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={githubIMG}/>
                        <figcaption>Github</figcaption>
                    </figure>
                    <figure className="skill"><img alt="" src={officeIMG}/>
                        <figcaption>Microsoft Office</figcaption>
                    </figure>
                </div>
            </div>
        </div>

    );
}

export default SkillsTable;
