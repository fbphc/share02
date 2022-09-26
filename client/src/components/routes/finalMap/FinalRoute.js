import React, { useEffect } from "react";
import "leaflet-routing-machine";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import RoutingComp from "../mainMap/RoutingComp";

import useMap from "../../../context/mapContext/useMap.js";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

import { MainButton } from "../../../components.styled/styledComponents"

function FinalRoute() {
  const navigate = useNavigate();
  const center = [50.56, 9.71];
  const { endPoint, startPoint, state } = useMap();

  useEffect(() => {
    if (startPoint === null) {
      navigate(-1);
    }
  }, []);
  console.log(state)
  return (
    <>
      <div className="mx-2 my-3 border rounded border-2">
        <MapContainer center={center} zoom={6}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {startPoint !== null && (
            <RoutingComp
              from={[startPoint.lat, startPoint.lng]}
              to={[endPoint.lat, endPoint.lng]}
            >
              <Popup>
                <p>hello</p>
              </Popup>
            </RoutingComp>
          )}
        </MapContainer>
      </div>
      <div className="d-flex">
        <MainButton
          color="warning"
          outline
          onClick={() => navigate("/germany")}
          className="mx-auto w-25"
        >
          Back
        </MainButton>
      </div>
    </>
  );
}

export default FinalRoute;
