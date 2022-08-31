import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  center,
  Tooltip,
} from "react-leaflet";
import useMap from "../../../context/mapContext/useMap.js";

function MainMapComp() {
  const center = [52.51, 13.37];

  const { locations, ownerArray } = useMap();


  const [exTog, setExTog] = useState(true);

  useEffect(() => {
    ownerArray();
  }, []);
  return (
    <>
      <div className="leaflet-container">
        <>
          <MapContainer center={center} zoom={6}>
            {/* <TooltipCircle center={center}/> */}
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={center}>
              <Popup>Berlin</Popup>
            </Marker> */}
            {/* <Marker position={[52.51, 9.37]}></Marker>
            <Marker position={[52.51, 10.37]}></Marker>
            <Marker position={[52.51, 11.37]}></Marker> */}

            {locations.map((item, idx) => (
              <Marker
                position={[item.latitude, item.longitude]}
                key={idx + "marker"}
              >
                <Popup>{item.username}</Popup>
              </Marker>
            ))}
            {/* {triggerToggle && <LocationMarker />} */}
          </MapContainer>
        </>
      </div>
      <button onClick={() => (exTog ? setExTog(false) : setExTog(true))}>
        asddasdasdsas
      </button>
    </>
  );
}

export default MainMapComp;
