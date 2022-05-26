import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Map = () => {
    return (
        <div className="container">
            <h2 className='py-12 text-center text-4xl font-semibold'>Our Location on Map</h2>
            <hr className='w-25 mx-auto mb-5' />
<MapContainer className="" center={[23.779679508301033, 90.41884301108828]} zoom={15} style={{width : "100%", height : "500px"}} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[23.779679508301033, 90.41884301108828]}>
  </Marker>
</MapContainer>
        </div>
    );
};

export default Map;