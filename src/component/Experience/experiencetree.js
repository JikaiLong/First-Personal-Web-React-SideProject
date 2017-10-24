import React, { Component } from 'react';
import cibc from './logopic/cibc.png';
import heqco from './logopic/heqco.jpg';
import uoft from './logopic/uoft.png';


class Experience extends Component {
  render() {
    return (
      <tree>
        <div class="vr">&nbsp;</div>
            <ul1>
                <li1 class="top">
                <text> Innovation Enginneer at CIBC </text>
                <div class="my_exlogo">
                <img src={cibc}/>
            </div>
                
                </li1>
                <li1 class="middle">
                <text> Research Intern at Higher Education Quality Council of Ontario </text>
                <div class="my_exlogo">
                <img src={heqco}/>
            </div>

                </li1>
                <li1 class="bottom">
                <text> Currently a software engineering undergrad at University of Toronto </text>
                <div class="my_exlogo">
                <img src={uoft}/>
            </div>

                </li1>
            </ul1>
      </tree>
    );
  }
}

export default Experience;