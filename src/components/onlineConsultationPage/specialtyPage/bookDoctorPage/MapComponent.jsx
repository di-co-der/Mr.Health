import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customIconUrl from "../../../../assets/svgs/map.svg";

const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [30, 30],
});

const MapComponent = ({ coordinates, location }) => {
  return (
    <MapContainer center={coordinates} zoom={13} style={{ height: "100px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates} icon={customIcon}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;