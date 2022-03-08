import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const MapBounds = () => {
  const bounds = [];
  const positions = [
    [19.435643, -99.200398],
    [19.436207, -99.188822],
    [19.436207, -99.188822],
    [19.436207, -99.188822],
    [19.432193, -99.195684],
    [19.433156, -99.186726],
    [19.433114, -99.186727],
    [19.433134, -99.186728],
  ];

  positions.map((position, i) => {
    bounds.push([position.lat, position.lon]);
  });

  return (
    <>
      <MapContainer bounds={bounds}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
};

export default MapBounds;
