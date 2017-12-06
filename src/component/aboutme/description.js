import React, { Component } from 'react';
import bodybuild from './logo/bodybuild.png';
import wow from './logo/wow.png';
import guitar from './logo/guitar.jpg';
import Map from '../../component/mapstory/map.js'
import Experience from '../../component/Experience/experience.js'
import Experiencetree from '../../component/Experience/experiencetree.js'

class Description extends Component {
  render() {
    return (
      <h2><div id="aboutme">
            <a id = "t1">
                About me
                </a>
            <div id = "am1">
                <br/><br/>
                I am Jikai (you can refer me as Jack), currently a thrid year Software Engineering Specialist student at University of Toronto. 
                Like most computer science "hackers", I enjoy vedio games such as World of Warcraft. Aside from CS, 
                Guitar and Bodybuilding are also my favourites exercises to reduce stress from hours of brainstorming.
                <br/> 
                
                <div className="my_logo">
                <img src={guitar} alt = ""/>
                <img src={bodybuild} alt = ""/>
                <img src={wow} alt = ""/>
                <br/>
            </div>
                My Thought on CS: As Computer Science applies everywhere in our daily life, I'd always like to work with cutting-edge technologies
                to make great impact on our modern life style. So I chose the "dark path" to make changes.
                    
                <div id = "mapdescription">
                  <br/>
                The following map shows My journey
                <br/>
                <div id = "mapinfo">
                  <Map/>
                </div>
                </div>
                <br/>
                </div>
                </div>
                <br/>
                <div id = "myexperience">
                  <Experience/>
                  <br/>
                  <Experiencetree/>
             </div>
             </h2>
    );
  }
}

export default Description;