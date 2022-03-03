import React from "react";
import LeafletMap from "./components/LeafletMap";
import MapTools from "./components/MapTools";
import SpotsOnMap from "./components/SpotsOnMap";

import "./css/LeafletMap.css";

function App() {
  //const value = "My context value";
  return (
    <div className="App">
      <div className="location-container">
        <div className="map-data-tools">
          <MapTools />
        </div>
        <div className="leaflet-container">
          <SpotsOnMap />
        </div>
      </div>
    </div>
  );
}

export default App;
