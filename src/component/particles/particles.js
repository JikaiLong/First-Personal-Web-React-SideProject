import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Partic extends Component {
    render(){
        return (
            <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#1E90FF",
            					blur: 2
            				}
            			}
            		}
            	}}
            />
        );
    };
}


  export default Partic;