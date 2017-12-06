
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
import thack2 from "./thacks2.png"
import Mark4 from "./Marker4.png";
import silicon from "./silicon.png";

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
          <div><img id = "japanview" src = {japanview} alt = ""/>
          <br/>
          <p className = "mapdiscription"> Japan is my next travel destination. Japanese cultures are so unique that I must experinece it myself. <br/>
          <img id = "japanview" src = {sushi} alt = ""/><br/>Also, I always want to 
            try the traditional ramen and sushi as they are my favorites. 
            <br/><br/> <a className = "keyword"> Key words: Travel, Culture </a> </p>
          </div>
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
          <br/>
          <p className = "mapdiscription"> 
            After graduating from high school in Peterborough, I went to University of Toronto for my post-secondary education.<br/>
            <img id = "torontoview" src = {thack2} alt = ""/><br/>
            Other than taking mandatory classes, I participate many hackathons such as Thacks and Microsoft Hackathon(MSFT) for 
            additional recouses and learning opportunities. I used to work as a intern at HEQCO and currently a innovation engineer
            at CIBC Lab. Love this place. 
            <br/><br/> <a className = "keyword"> Key words: Post-secondary, Hackathon, Internship  </a> </p>
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
          <p className = "maptitle"> CA, USA                                 </p>
          <br/>
          <div><img id = "laview" src = {silicon} alt = ""/>
          <p className = "mapdiscription"> My plan after graduation will be either studying for a master degree or landing myself a job in 
            high tech companies. For both cases, LA, the tech center will be my ultimate long-term study or work destination. 
            <br/><br/> <a className = "keyword"> Key words: Goals, Long-term, Plan  </a> </p>
          </div>
        </content>

      </InfoWindow>}
    </Marker>
  </GoogleMap>
);



export default MyMapComponent;

