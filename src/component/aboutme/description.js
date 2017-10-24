import React, { Component } from 'react';
import bodybuild from './logo/bodybuild.png';
import wow from './logo/wow.png';
import guitar from './logo/guitar.jpg';


class Description extends Component {
  render() {
    return (
      <h2><a id="aboutme">
            <t1>
                About me
                </t1>
            <am1>
                <br/><br/>
                I am Jikai (you can refer me as Jack), currently a thrid year Software Engineering student at University of Toronto.
                I did internship at Higher Education Quality of Ontario as a Quantitative Research Intern and at CIBC as an Innovation
                Engineer. Like most computer science students, I like playing games, World of Warcraft is my favourite. I am also a guitarist
                and a bodybuilder. <br/> 
                
                <div class="my_logo">
                <img src={guitar}/>
                <img src={bodybuild}/>
                <img src={wow}/>
                <br/>
            </div>
            I like computer science because it makes me more creative. There will always be more to learn and explore. Building things
                while studying new technology is so entertainning as everything is connected more or less. I should not only train my body,
                brain workout is important as well. 
                    </am1>
            </a>
      </h2>
    );
  }
}

export default Description;