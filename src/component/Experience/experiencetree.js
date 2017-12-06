import React, { Component } from 'react';
import cibc from './logopic/cibc.png';
import heqco from './logopic/heqco.jpg';
import uoft from './logopic/uoft.png';
import Tail from '../../component/tail/tail.js'

class Experience extends Component {
  render() {
    return (
      <div id = "tree">
        <div className="vr">&nbsp;</div>
                <li id = "li1" className="top">
                <span id = "text"> Innovation Engineer at CIBC - 2017 to 2018</span>
                <div className="my_exlogo">
                  <img src={cibc} alt = ""/>
                  <br/>
                  <span>
                  <ul  className = "my_exdiscription">
                    <li>Build web apps with <span className = "focus"> Nodejs, Reactjs, Angularjs and Angular 4 </span> </li>
                    <li>Query and Analyze facial scanner <span className = "focus">SQL database </span>to observe patterns for research</li>
                    <li>Build IOS prototypes with Swift</li>
                    <li>Play around with tools such as 360 cameras (VR)</li>
                  </ul>
                  </span>
                </div>
                
                </li>
                <li id = "li1" className="middle">
                <span id = "text"> Research Intern at Higher Education Quality Council of Ontario - 2017</span>
                <div className="my_exlogo">
                <img src={heqco} alt = ""/>
                <br/>
                  <span>
                  <ul  className = "my_exdiscription">
                  <li> - <span className = "focus">Built and implemented databases </span>which contain a large volume of data</li>
                  <li> - Analyzed economics and survey data to generate complex tables and charts in <span className = "focus">Excel</span></li>
                  <li> - Maintained project file management using <span className = "focus">SharePoint and CRM</span></li>
                  <li> - Presented research findings to upper management</li>
                   </ul>
                   </span>
                </div>

                </li>
                <li id = "li1" className="bottom">
                <span id = "text"> Software Engineering Undergraduate at University of Toronto - 2017 to Now </span>
                <div className="my_exlogo">
                <img src={uoft} alt = ""/>
                <br/>
                <span>
                <ul  className = "my_exdiscription">
                <li> - Study <span className = "focus">multiple Basic Programming Languages and algorithms</span></li>
                <li> - Participate and Contribute in <span className = "focus">group projects and hackathons</span></li>
                <li> - Exploration in different fields other than CS</li>
                <li> - Library all day every day</li>
                 </ul>
                 </span>
                </div>

                </li>
                <Tail/>
      </div>
    );
  }
}

export default Experience;