import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const LeafletMap = ({ spots }) => {
  // const initialPosition = [19.432777, -99.133217];
  const outerBounds = [
    { lat: 19.435646, lng: -99.200398 },
    { lat: 19.436207, lng: -99.188822 },
    { lat: 19.432193, lng: -99.195684 },
    { lat: 19.432193, lng: -99.195684 },
    { lat: 19.432193, lng: -99.195684 },
    { lat: 19.431887, lng: -99.193424 },
    { lat: 19.433149, lng: -99.186726 },
    { lat: 19.437982, lng: -99.198827 },
  ];
  const spotsLength = Object.keys(spots).length;
  let coordenadas = [];
  for (let i = 0; i < spotsLength; i++) {
    coordenadas.push(Object.values(spots[i].location));
  }
  let element = [];
  for (let i = 0; i < coordenadas.length; i++) {
    element.push([coordenadas[i][1][1], coordenadas[i][1][0]]);
  }
  console.log("outerBounds", outerBounds);
  console.log("element", element);
  return (
    <>
      {/* <MapContainer center={initialPosition} zoom={12}> */}
      <MapContainer bounds={outerBounds}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {spots.length > 0 ? (
          spots.map((item) => (
            <Marker
              position={[
                item.location.coordinates[1],
                item.location.coordinates[0],
              ]}
              key={item.id}
            >
              <Popup>
                {item.name}
                <br />
                {item.reference}
              </Popup>
            </Marker>
          ))
        ) : (
          <span>No data</span>
        )}
      </MapContainer>
    </>
  );
};

export default LeafletMap;
