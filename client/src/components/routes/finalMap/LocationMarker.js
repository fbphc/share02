import { useEffect, useState } from "react";
import { Marker, Popup, useMapEvents, Tooltip } from "react-leaflet";
import useMap from "../../../context/mapContext/useMap.js";
function LocationMarker() {
  const { getActualPosition } = useMap();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    getActualPosition(position);
  }, [position]);
  const map = useMapEvents({
    dblclick() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} pathOptions={{ fillColor: "lightblue" }}>
      <Tooltip direction="top" offset={[-10, 0]} opacity={1} permanent>
        You are here!
      </Tooltip>
    </Marker>
  );
}

export default LocationMarker;
