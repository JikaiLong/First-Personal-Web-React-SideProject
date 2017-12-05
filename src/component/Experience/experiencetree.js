import React, { Component } from 'react';
import cibc from './logopic/cibc.png';
import heqco from './logopic/heqco.jpg';
import uoft from './logopic/uoft.png';


class Experience extends Component {
  render() {
    return (
      <div id = "tree">
        <div className="vr">&nbsp;</div>
                <li id = "li1" className="top">
                <span id = "text"> Innovation Enginneer at CIBC </span>
                <div className="my_exlogo">
                <img src={cibc} alt = ""/>
                <span className = "my_exdiscription">
                This is how we do it baby
                </span>
            </div>
                
                </li>
                <li id = "li1" className="middle">
                <span id = "text"> Research Intern at Higher Education Quality Council of Ontario </span>
                <div className="my_exlogo">
                <img src={heqco} alt = ""/>
                </div>

                </li>
                <li id = "li1" className="bottom">
                <span id = "text"> Currently a software engineering undergrad at University of Toronto </span>
                <div className="my_exlogo">
                <img src={uoft} alt = ""/>
            </div>

                </li>
      </div>
    );
  }
}

export default Experience;