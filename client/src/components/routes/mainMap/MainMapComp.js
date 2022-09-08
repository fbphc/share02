import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";

import LocationMarker from "../finalMap/LocationMarker.js";

import useMap from "../../../context/mapContext/useMap.js";
import useAuth from "../../../context/authContext/useAuth.js";

function MainMapComp({ chargerFilter }) {
  const { isAuthenticated } = useAuth();
  const { getEndPoint, endPoint } = useMap();

  const center = [50.56, 9.71];

  const { locations, ownerArray } = useMap();

  useEffect(() => {
    ownerArray(chargerFilter.typeOfCharger);
  }, [chargerFilter]);

  function getCoordinates(routeData) {
    getEndPoint(routeData);
  }

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

                      {endPoint !== null && (
                        <>
                        <Link
                            className="d-block text-center"
                            to="/userProfile"
                            state={{ id: item.id }}
                          >
                            Watch {item.username} Profile
                          </Link>
                          <Link
                            className="d-block text-center"
                            to="/calc_route"
                            onClick={(e) =>
                              getCoordinates({
                                lat: item.latitude,
                                lng: item.longitude,
                              })
                            }
                          >
                            FinalRouteTemp
                          </Link>
                          
                        </>
                      )}
                      {endPoint === null && (
                        <Link to="/userProfile" state={{ id: item.id }}>
                          Watch {item.username} Profile
                        </Link>
                      )}
                    </Popup>
                  </Marker>
                ))
              : locations.map((item, idx) => (
                  <CircleMarker
                    key={idx + "marker"}
                    center={[item.latitude, item.longitude]}
                    pathOptions={{
                      fillColor: "blue",
                      fillOpacity: 0.6,
                      color: "lightblue",
                    }}
                    radius={10}
                    key={idx + "marker"}
                  >
                    <Popup>
                      <p className="text-center my-1 ">
                        <b>{item.username}</b>
                      </p>
                    </Popup>
                  </CircleMarker>
                ))}
            <LocationMarker />
          </MapContainer>
        </>
      </div>
    </>
  );
}

export default MainMapComp;
