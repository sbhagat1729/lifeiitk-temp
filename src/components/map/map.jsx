import React, { Component } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  ImageOverlay,
  ZoomControl
} from "react-leaflet";
import campusMap from "./campusMap.jpg";
import academicAreaMap from "./academicAreaMap.jpg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./map.css";
var Leaflet = require("leaflet");

class Map extends Component {
  state = {
    selectedView: 0,
    campusLocations: [
      { id: 1, venueName: "", location: [[], []] },
      { id: 2, venueName: "", location: [[], []] },
      { id: 3, venueName: "", location: [[], []] }
    ],
    acadsAreaLocations: [
      { id: 1, venueName: "", location: [[], []] },
      { id: 2, venueName: "", location: [[], []] },
      { id: 3, venueName: "", location: [[], []] }
    ]
  };

  handleOnOpen = (venue_id, venue_name) => {
    alert("venue id : " + venue_id + "venue name : " + venue_name);
  };

  handleChange = (event, newValue) => {
    console.log(newValue);
    this.setState({ selectedView: newValue });
  };

  render() {
    const bounds = [[0, 0], [1000, 1410]];
    return (
      <React.Fragment>
        <Tabs
          value={this.state.selectedView}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          scrollButtons="auto"
        >
          <Tab label="Campus" />
          <Tab label="Academic Area" />
        </Tabs>
        <br />
        <div>
          <LeafletMap
            bounds={bounds}
            minZoom={-1}
            maxZoom={1}
            zoom={1}
            attributionControl={true}
            zoomControl={false}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            crs={Leaflet.CRS.Simple}
          >
            <ImageOverlay
              url={this.state.selectedView === 0 ? campusMap : academicAreaMap}
              bounds={bounds}
            />
            <Marker position={[0, 0]}>
              <Popup>Bottom Left</Popup>
            </Marker>
            <Marker position={[1000, 1410]}>
              <Popup>Top Right</Popup>
            </Marker>
            <Marker position={[0, 1410]}>
              <Popup>Bottom Right</Popup>
            </Marker>
            <Marker position={[1000, 0]}>
              <Popup>Top Left</Popup>
            </Marker>
            {/* <Marker position={[500, 830]}>
              <Popup onOpen={() => this.handleOnOpen(1, "Auditorium")}>
                Auditorium
              </Popup>
            </Marker> */}
            <ZoomControl position="topright" />
          </LeafletMap>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;
