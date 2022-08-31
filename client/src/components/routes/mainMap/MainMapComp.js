import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";

import useMap from "../../../context/mapContext/useMap.js";
import useAuth from "../../../context/authContext/useAuth.js";

function MainMapComp({ chargerFilter, setChargerFilter }) {
  const { isAuthenticated } = useAuth();
  const center = [52.51, 13.37];

  const { locations, ownerArray, filterByCharger } = useMap();

  useEffect(() => {
    ownerArray();
  }, []);

  useEffect(() => {
    filterByCharger(chargerFilter.typeOfCharger)
 /*    setChargerFilter({ typeOfCharger: "type01", filter: false }); */
  }, [chargerFilter.filter]);


  return (
    <>
      <div className="leaflet-container">
        <>
          <MapContainer center={center} zoom={6}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {isAuthenticated
              ? locations.map((item, idx) => (
                  <Marker
                    position={[item.latitude, item.longitude]}
                    key={idx + "marker"}
                  >
                    {/* A BIT OF BOOTSTRAP-STYLING for the POP-UP*/}
                    <Popup>
                      <p className="text-center my-1 ">
                        <b>{item.username}</b>
                      </p>
                      <p className="text-center my-1">{item.typeOfCharger}</p>
                      <Link to="/route_endpoint">FinalRouteTemp</Link>
                    </Popup>
                  </Marker>
                ))
              : locations.map((item, idx) => (
                  <CircleMarker
                    center={[item.latitude, item.longitude]}
                    pathOptions={{
                      fillColor: "blue",
                      fillOpacity: 0.6,
                      color: "lightblue",
                    }}
                    radius={10}
                  >
                    <Popup>
                      <p className="text-center my-1 ">
                        <b>{item.username}</b>
                      </p>
                    </Popup>
                  </CircleMarker>
                ))}
          </MapContainer>
        </>
      </div>
    </>
  );
}

export default MainMapComp;
