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

import { Image } from "cloudinary-react";
import noPhoto from "../../../img/noPhoto.png";

function MainMapComp({ chargerFilter }) {
  const { isAuthenticated } = useAuth();

  const center = [50.56, 9.71];

  const { locations, ownerArray, startPoint, getEndPoint } = useMap();

  useEffect(() => {
    ownerArray(chargerFilter.typeOfCharger);
  }, [chargerFilter]);

  function getCoordinates(routeData) {
    getEndPoint(routeData);
  }

  return (
    <>
      <div className="mx-2 my-3 border rounded border-2">
       {/*  <button>sadsadsa</button> */}

        <MapContainer center={center} zoom={5} className="leaflet-container fullscreen">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {isAuthenticated
            ? locations.map((item, idx) => (
                <Marker
                  position={[item.latitude, item.longitude]}
                  key={idx + "marker"}
                >
                  {/* A BIT OF BOOTSTRAP-STYLING for the POP-UP*/}
                  <Popup>
                    {item.imgProfile && item.imgProfile !== "no_photo" ? (
                      <Image
                        className="w-25 mx-auto d-block"
                        cloudName="schoolgroupfinal"
                        publicId={item.imgProfile}
                      />
                    ) : (
                      <img
                        src={noPhoto}
                        alt="user"
                        className="w-25 mx-auto d-block"
                      />
                    )}
                    <p className="text-center my-1 ">
                      <b>{item.username}</b>
                    </p>
                    <p className="text-center my-1">{item.typeOfCharger}</p>

                    {startPoint !== null && (
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
                    )}

                    <Link to={`/userProfile/${item.id}`} state={{ id: item.id }}>
                      Watch {item.username} Profile
                    </Link>
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
      </div>
    </>
  );
}

export default MainMapComp;
