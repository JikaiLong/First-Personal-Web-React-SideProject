import React, { Component } from 'react';
import Header from './component/header_component/header.js';
import Myinfo from './component/info_page/info.js'
import Description from './component/aboutme/description.js'
import Menu from './component/navmenu/navmenu.js'
import './asset/style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Menu/>
          <Myinfo/>
          <Description/>
      </div>
    );
  }
}
export default App;
