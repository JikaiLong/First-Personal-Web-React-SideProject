
import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from "recompose";
import FaAnchor from "react-icons/lib/fa/anchor";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import Mark1 from "./Marker1.png";
import xian from "./xian.jpg";

var content = "maybe this time";
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: '100%' }}/>,
    containerElement: <div style={{ height: `400px`, width: '100%'}} />,
    mapElement: <div style={{ height: `100%`, width: '100%'}} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 40.452906, lng: 190.818206 }}
  >
    <Marker
      options={{icon: Mark1}} 
      position={{ lat: 34.4076645, lng: 108.742099 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow
                    onCloseClick={props.onToggleOpen}
                    >
        <content1> 
          <text id = "maptitle1">Xianyang, Shaanxi, China - Where My Journey Starts</text>
          <br/>
          <p><img id = "xian" src = {xian}/>
          <mapdiscription1> This is where I start my life </mapdiscription1>
          </p>
        </content1>
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);

class MyfancyComponent extends Component {
  render() {
    return (
      <MyMapComponent
      />
    );
  }
}

export default MyMapComponent;