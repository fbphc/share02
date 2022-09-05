import React from "react";
import "leaflet-routing-machine";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingComp from "../mainMap/RoutingComp";

import useMap from "../../../context/mapContext/useMap.js";
import { useNavigate } from "react-router-dom";
import {Button} from "reactstrap"
function FinalRoute() {
  const center = [50.56, 9.71];
  const { routeData, actualPosition } = useMap();

  const navigate = useNavigate();
  return (
    <>
    <MapContainer center={center} zoom={6}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {actualPosition !== null && (
        <RoutingComp
          from={[actualPosition.lat, actualPosition.lng]}
          to={[routeData.lat, routeData.long]}
        />
      )}
    </MapContainer>
    <Button onClick={()=>navigate("/germany")}>Calulate a new Route</Button>
    </>
  );
}

export default FinalRoute;
