
import React from 'react';
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import Mark1 from "./Marker1.png";
import xian from "./xian.jpg";
import Mark2 from "./Marker2.png";
import japanview from "./japanview.jpg";
import sushi from "./sushi.jpg";
import Mark3 from "./Marker3.png";
import toronto from "./toronto.jpg"
import uoft from "./uoft.jpg"
import Mark4 from "./Marker4.png";

const MY_API_KEY = "AIzaSyDklpGW27746BIhpuqbcpGm_kOVw9BfHJg"



export const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js??key=" + MY_API_KEY + "&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: '100%' }}/>,
    containerElement: <div style={{ height: `400px`, width: '100%'}} />,
    mapElement: <div style={{ height: `100%`, width: '100%'}} />,
    key:MY_API_KEY
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
    onToggleClose:() => () => ({
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false
    })
  }
),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 50.452906, lng: 120.818206 }}
    key = {MY_API_KEY}
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
          <p className = "maptitle"> Xianyang, China - Start</p>
            <div>
            <img id = "xian" src = {xian} alt = ""/>
            <br/>
          <p className = "mapdiscription"> First 15 years in China. Middle/High Schools math programs in China benefits me a lot in algorithm due to 
             large amount of pratices on difficult problem solving. I also start building game maps when I was in middle school.
            <br/> <a className = "keyword"> Key words: Game, Math, Childhood </a> </p>
            </div>
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
          <p className = "maptitle"> Tokyo, Japan</p>
          <p><img id = "japanview" src = {japanview} alt = ""/>
          <img id = "japanview" src = {sushi} alt = ""/>
          <br/>
          <p className = "mapdiscription"> Japan is next travel destination. Japnese cultures are so unique that I must experinece it myself. Also, I always want to 
            try the traditional ramen and sushi as they are my favorites. 
            <br/><br/> <a className = "keyword"> Key words: Travel, Culture </a> </p>
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
          <p className = "maptitle"> Toronto, Canada                                </p>
          <div><img id = "torontoview" src = {toronto} alt = ""/>
          <img id = "torontoview" src = {uoft} alt = ""/>
          <br/>
          <p className = "mapdiscription"> 
            <br/><br/> <a className = "keyword"> Key words: Travel, Culture exploration  </a> </p>
          </div>
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
          <p className = "maptitle"> sdasdsasdasdsa Next Vacation Trip                                   </p>
          <br/>
          <div><img id = "japanview" src = {japanview} alt = ""/>
          <p className = "mapdiscription"> Vdsadsaunds attrative tdasdsanime and dsad trip is going to be amazing.
            <br/><br/> <a className = "keyword"> Key words: Trdsadsaon  </a> </p>
          </div>
        </content>

      </InfoWindow>}
    </Marker>
  </GoogleMap>
);



export default MyMapComponent;

