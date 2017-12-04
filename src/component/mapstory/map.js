
import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import Mark1 from "./Marker1.png";
import xian from "./xian.jpg";
import Mark2 from "./Marker2.png";
import japanview from "./japanview.jpg";
import Mark3 from "./Marker3.png";
import Mark4 from "./Marker4.png";




const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: '100%' }}/>,
    containerElement: <div style={{ height: `400px`, width: '100%'}} />,
    mapElement: <div style={{ height: `100%`, width: '100%'}} />,
  }),
  withStateHandlers(() => ({
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false
  }), {
    onToggleOpen1: () => () => ({
      isOpen1: true,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false
    }),
    onToggleOpen2: () => () => ({
      isOpen1: false,
      isOpen2: true,
      isOpen3: false,
      isOpen4: false
    }),
    onToggleOpen3: () => () => ({
      isOpen1: false,
      isOpen2: false,
      isOpen3: true,
      isOpen4: false
    }),
    onToggleOpen4: () => () => ({
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: true
    }),
    onToggleOpen5: () => () => ({
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false
    }),

  }
),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 50.452906, lng: 120.818206 }}
  > 
    <Marker id = "mark1"
      options={{icon: Mark1}} 
      position={{ lat: 34.4076645, lng: 108.742099 }}
      onClick={props.onToggleOpen1}
    >
      {props.isOpen1 && <InfoWindow id = "info1" className = "infowindow"
                    onCloseClick={props.onToggleClose}
                    >
        <content> 
          <maptitle1> Xianyang, Shaanxi, China- Where My Journey Starts</maptitle1>
          <br/>
          <p>
            <div>
            <img id = "xian" src = {xian} alt = ""/>
            </div>
          <div id = "mapdiscription1"> I spent my first 15 years in here. Chinese education benefits my CS study a lot from its excellent Math program. 
            <br/><br/> <keyword> Key words: Gamer, Math, Childhood </keyword> </div>
          </p>
        </content>
      </InfoWindow>}
    </Marker>
    <Marker id = "mark2"
      options={{icon: Mark2}} 
      position={{ lat: 35.6958783, lng: 139.6869534 }}
      onClick={props.onToggleOpen2}
    >
      {props.isOpen2 && <InfoWindow id = "info2" className = "infowindow"
                    onCloseClick={props.onToggleClose}
                    >
        <content> 
          <maptitle2> Tokyo, Japan - The Destination of My Next Vacation Trip                                   </maptitle2>
          <br/>
          <p><img id = "japanview" src = {japanview} alt = ""/>
          <mapdiscription2> Visiting Japan always sounds attrative to me. Cheery bloom, anime and ramen, the trip is going to be amazing.
            <br/><br/> <keyword> Key words: Travel, Culture exploration  </keyword> </mapdiscription2>
          </p>
        </content>

      </InfoWindow>}
    </Marker>
    <Marker id = "mark3"
      options={{icon: Mark3}} 
      position={{ lat: 43.6565353, lng: -79.6010328 }}
      onClick={props.onToggleOpen3}
    >
      {props.isOpen3 && <InfoWindow id = "info3" className = "infowindow"
                    onCloseClick={props.onToggleClose}
                    >
        <content> 
          <maptitle2> Tokyo, Japan - The Destination of My Next Vacation Trip                                   </maptitle2>
          <br/>
          <p><img id = "japanview" src = {japanview} alt = ""/>
          <mapdiscription2> Visiting Japan always sounds attrative to me. Cheery bloom, anime and ramen, the trip is going to be amazing.
            <br/><br/> <keyword> Key words: Travel, Culture exploration  </keyword> </mapdiscription2>
          </p>
        </content>

      </InfoWindow>}
    </Marker>
    <Marker id = "mark4"
      options={{icon: Mark4}} 
      position={{ lat: 37.402473, lng: -122.3212856 }}
      onClick={props.onToggleOpen4}
    >
      {props.isOpen4 && <InfoWindow id = "info4" className = "infowindow"
                    onCloseClick={props.onToggleClose}
                    >
        <content> 
          <maptitle2> sdasdsasdasdsa Next Vacation Trip                                   </maptitle2>
          <br/>
          <p><img id = "japanview" src = {japanview} alt = ""/>
          <mapdiscription2> Vdsadsaunds attrative tdasdsanime and dsad trip is going to be amazing.
            <br/><br/> <keyword> Key words: Trdsadsaon  </keyword> </mapdiscription2>
          </p>
        </content>

      </InfoWindow>}
    </Marker>
  </GoogleMap>
);



export default MyMapComponent;