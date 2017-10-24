import React, { Component } from 'react';
import Header from './component/header_component/header.js';
import Myinfo from './component/info_page/info.js'
import Description from './component/aboutme/description.js'
import Particles from 'react-particles-js';
import Experience from './component/Experience/experience.js'
import Experiencetree from './component/Experience/experiencetree.js'
import Menu from './component/navmenu/navmenu.js'
import Parti from './component/particles/particles.js'
import Map from './component/mapstory/map.js'
import './asset/style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Menu/>
          <Myinfo/>
          <Description/>
          <mapinfo>
          <Map/>
          </mapinfo>
          <Parti/><Parti/><Parti/><Parti/>
          <Experience/>
          <Experiencetree/>
      </div>
    );
  }
}
export default App;
