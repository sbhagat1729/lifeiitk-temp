import React, { Component } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  ImageOverlay
} from "react-leaflet";
import mapImage from "./iitkmap.jpg";

var Leaflet = require("leaflet");

class Map extends Component {
  state = {};
  handleOnOpen = (venue_id, venue_name) => {
    alert("venue id : " + venue_id + "venue name : " + venue_name);
  };
  render() {
    const bounds = [[0, 0], [1000, 1410]];
    return (
      <React.Fragment>
        <h1>This is a map</h1>
        <p>what to do?</p>
        <div>
          <LeafletMap
            bounds={bounds}
            minZoom={-1}
            maxZoom={3}
            zoom={1}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            crs={Leaflet.CRS.Simple}
          >
            <ImageOverlay url={mapImage} bounds={bounds} />
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
            <Marker position={[500, 830]}>
              <Popup onOpen={() => this.handleOnOpen(1, "Auditorium")}>
                Auditorium
              </Popup>
            </Marker>
          </LeafletMap>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;
