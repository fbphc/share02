import React from "react";
import "leaflet-routing-machine";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingComp from "../mainMap/RoutingComp";

import useMap from "../../../context/mapContext/useMap.js";
import { useNavigate } from "react-router-dom";
import {Button} from "reactstrap"


function FinalRoute() {
  const navigate = useNavigate();
  const center = [50.56, 9.71];
  const { endPoint, startPoint } = useMap();

  return (
    <>
    <MapContainer center={center} zoom={6}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {startPoint !== null && (
        <RoutingComp
          from={[startPoint.lat, startPoint.lng]}
          to={[endPoint.lat, endPoint.lng]}
        />
      )}
    </MapContainer>
    <Button onClick={()=>navigate("/germany")}>Back</Button>
    </>
  );
}

export default FinalRoute;
