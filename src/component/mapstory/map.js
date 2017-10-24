
import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from "recompose";
import FaAnchor from "react-icons/lib/fa/anchor";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

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
      position={{ lat: 40.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <text>This is the first place I visit</text>
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