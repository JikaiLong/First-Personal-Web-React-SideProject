import React, { Component } from 'react';
import C from './icon/C.png';
import CPLUS from './icon/c++.png';
import css from './icon/css.png';
import git from './icon/git.png';
import html from './icon/html.png';
import java from './icon/java.png';
import js from './icon/js.png';
import mysql from './icon/mysql.png';
import nodejs from './icon/nodejs.png';
import ps from './icon/ps.png';
import react from './icon/react.png';
import shell from './icon/shell.png';
import sql from './icon/sql.png';
import svn from './icon/svn.png';
import swift from './icon/swift.png';
import python from './icon/python.png';


class Myinfo extends Component {
  render() {
    return (
    
    <h1> 
        <p id = "profile_image"></p>
            <p id ="p1">
                JIKAI LONG<br/>
            </p>
             <p id = "p2">
                Software Engineer | Student<br/>
            </p>
            <p id = "p3">
                
            <a href="https://www.facebook.com/long.jikai" target="_blank"><i className="fa fa-facebook" /></a>
                <a href="https://www.linkedin.com/in/jikai-long-05622b141/" target="_blank" ><i className="fa fa-linkedin" /></a>
                <a href ="https://github.com/MarioLongJACK" target="_blank" ><i className="fa fa-github-alt"/></a><br/>
                
            </p>
            <p id = "p4">
                Why do JAVA developers wear glasses? 
                Because they can not C#!<br/>
             </p>

            <p id = "p5">
                <span className="l_icon">Language: 
                    <img src={C} alt = ""/>
                    <img src={CPLUS} alt = ""/>
                    <img src={js} alt = ""/>
                    <img src={java} alt = ""/>
                    <img src={python} alt = ""/>
                    <img src={swift} alt = ""/>
                    <img src={sql} alt = ""/>
                </span>
                <br/>
                <span className = "l_icon">
                Framwork: 
                    <img src={nodejs} alt = ""/>
                    <img src={react} alt = ""/>
                    <img src={html} alt = ""/>
                    <img src={css} alt = ""/>
                </span>
                <br/>
                <span className = "l_icon">
                Environment and Tools: 
                    <img src={git} alt = ""/>
                    <img src={svn} alt = ""/>
                    <img src={mysql} alt = ""/>
                    <img src={shell} alt = ""/>
                    <img src={ps} alt = ""/>
                </span>

                </p>
        
    </h1>
    );
  }
}

export default Myinfo;