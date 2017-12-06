import React, { Component } from 'react';
import ins from './ins.png';
import email from './email.png';

class Tail extends Component {
  render() {
    return (
        <h6>
            <div>
            <img className = "contact" src = {email} alt = ''/>
            jikai.long@mail.utoronto.ca
            <a href = "https://www.instagram.com/jacklong36/" target="_blank" rel="noopener noreferrer">
            <img className = "contact"src = {ins} alt = '' />
            </a>
            follow me on Instagram 
            </div>
            </h6>
    );
  }
}

export default Tail;