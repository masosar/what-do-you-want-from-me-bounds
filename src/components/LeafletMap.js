import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const LeafletMap = ({ spots }) => {
  const initialPosition = [19.432777, -99.133217];

  return (
    <>
      <MapContainer center={initialPosition} zoom={12}>
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
