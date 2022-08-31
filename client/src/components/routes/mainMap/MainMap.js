/* import TooltipCircle from "./TooltipCirlce"; */
/* import LocationMarker from "./LocationMarker"; */
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../context/authContext/useAuth.js";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  center,
  Tooltip,
  useMap,
} from "react-leaflet";

function MainMapComponent() {
  const { produceCoordinatesOwner } = useAuth();
  const [addressArray, setAddressArray] = useState([]);
  const [lat_long, setLat_long] = useState([]);
  const [toggle, setToggle] = useState(false);
  const center = [52.51, 13.37];

  const coordOwner = produceCoordinatesOwner();
  let x = [];

  useEffect(() => {
    setAddressArray(coordOwner);

    if (addressArray.length > 0) {
      addressArray.map((item) => {
        x.push(item);
        return item;
      });
      setAddressArray(x);
    }
  }, []);
  
console.log(`${process.env.REACT_APP_PS_KEY}`)
  /* console.log(addressArray) */
  /* useEffect(() => {
    coordOwner.map((item) => {
      console.log("first")
      axios
        .get(
          `http://api.positionstack.com/v1/forward?access_key=b51d3e2d643f495fdfe1018f9d9a6499&query=${
            item.houseNr
          }%20${item.street.split(" ").join("%20")},%20${item.city}%20DE`
        )
        .then((res) => {
          // y.push({
          //   latitude: +res.data.data[0].latitude.toFixed(2),
          //   longitude: +res.data.data[0].longitude.toFixed(2),
          // });
          // setLat_long(y);
        })
        .catch((err) => console.log(err));
      });
      
  }, [toggle]); */

  /* console.log(lat_long); */

  return (
    <>
      <button onClick={() => setToggle(true)}>asdasdasd</button>
      <div className="leaflet-container">
        <>
          <MapContainer center={center} zoom={8}>
            {/* <TooltipCircle center={center}/> */}
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
              <Popup>Berlin</Popup>
            </Marker>

            {/* {lat_long.map((item, idx) => {
              return (
                <Marker
                  position={[item.latitude, item.longitude]}
                  key={idx + "marker"}
                >
                  <Popup>{idx}</Popup>
                </Marker>
              );
            })} */}
            {/* {triggerToggle && <LocationMarker />} */}
          </MapContainer>
        </>
      </div>
    </>
  );
}

export default MainMapComponent;