import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import * as L from "leaflet";
import redPos from "../../../../src/img/redPos.png";
import greenPos from "../../../../src/img/greenPos.png";

const RoutingComp = createControlComponent(({ from, to }) => {
  const start = L.latLng(from[0], from[1]);
  const goal = L.latLng(to[0], to[1]);
  const instance = L.Routing.control({
    waypoints: [start, goal],
    lineOptions: {
      styles: [
        {
          color: "#FFA822",
        },
      ],
    },
    createMarker: function (i, start, n) {
      let marker_icon = null;
      if (i === 0) {
        // This is the first marker, indicating start
        marker_icon = L.icon({
          iconUrl: redPos,
          iconSize: [25, 42],
          iconAnchor: [14, 34],
          popupAnchor: [38, 38],
        });
      } else if (i === n - 1) {
        //This is the last marker indicating destination
        marker_icon = L.icon({
          iconUrl: greenPos,
          iconSize: [25, 42],
          iconAnchor: [14, 34],
          popupAnchor: [0, -26],
          bounceOnAdd: true,
        });
      }
      let marker = L.marker(start.latLng, {
        draggable: true,
        bounceOnAdd: false,
        icon: marker_icon,
      });
      return marker.bindPopup("Your Destination" + i);
    },
  });

  return instance;
});

export default RoutingComp;
