import React, { Component } from 'react';
import man from "./icon/man.png";
import $ from "jquery";
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
var scrollToElement = require('scroll-to-element');


$(document).ready(function(){
    $('.slide-section').click(function(e){
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 50
        });

        e.preventDefault();

    })
});

$(document).ready(function(){
    $("#manul").click(function(){
    $("#link").slideToggle(300, "linear");
    });
    });
   

class Menu extends Component {


    
  render() {
    return (
      <man>
            <div id = "manul" class = "manul" >
            <img src = {man} href = "#"/>
           </div >

           <div>
            <ul id = "link">
                <li><a id = "linkaboutme" class = "slide-section" href = "#aboutme">About Me</a> 
                </li>
                <li><a id = "linkexp"  class = "slide-section" href = "#exp">Experience</a> </li>
            </ul>
            </div>

      </man>
    );
  }

}


export default Menu;
