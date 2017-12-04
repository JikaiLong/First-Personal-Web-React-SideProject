import React, { Component } from 'react';
import man from "./icon/man.png";
import $ from "jquery";



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
      <div id = "man">
            <div id = "manul" className = "manul" >
            <img src = {man} href = "#" alt = ""/>
           </div >

           <div>
            <ul id = "link">
                <li><a id = "linkaboutme" className = "slide-section" href = "#aboutme">About Me</a> 
                </li>
                <li><a id = "linkexp"  className = "slide-section" href = "#exp">Experience</a> </li>
            </ul>
            </div>

      </div>
    );
  }

}


export default Menu;
