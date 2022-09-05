import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";


const RoutingComp = createControlComponent(({from,to}) => {
 
  const instance = L.Routing.control({
    waypoints: [
        L.latLng(from[0], from[1]),
        L.latLng(to[0], to[1]),
    ],
    lineOptions: {
      styles: [
        {
          color: "green",
        },
      ],
    },
  });

  return instance;
});

export default RoutingComp;
