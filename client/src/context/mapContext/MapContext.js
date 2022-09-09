import { createContext, useReducer } from "react";
import { getAllOwners } from "../../utils/axios-utils.js";
import mapReducer, { mapState } from "./mapReducer.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const MapContext = createContext(mapState);

export const MapProvider = ({ children }) => {
const navigate =  useNavigate()
  const [state, dispatch] = useReducer(mapReducer, mapState);

  function ownerArray(typeOfCharger) {
    let ownersArray = [];
    (async () => {
      const response = await getAllOwners(typeOfCharger);
      try {
        response.data.map((item) => {
          const userAddress = {
            /**** later on we have to delete ****/
            username: item.username,
            id: item.id,
            street: item.address.street,
            houseNr: item.address.houseNr,
            city: item.address.city,
            typeOfCharger: item.typeOfCharger,
            /********************************** */
            latitude: item.addressInfo.latitude,
            longitude: item.addressInfo.longitude,
            imgProfile: item.imgProfile
          };

          ownersArray.push(userAddress);
        });
        dispatch({ type: "ADD_POS", payload: ownersArray });
      } catch (err) {
        console.log(err);
      }
    })();
    return ownersArray;
  }

  function getEndPoint(endPoint) {
    dispatch({ type: "CAlC_ENDPOINT", payload: endPoint });
  }
  function getActualPosition(startPoint) {
    dispatch({ type: "START_POINT", payload: startPoint });
  }

  function routeCoordiantes(routeForm) {

    (async function(){
      const startPoint = await axios.get(
        `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POS_STACK_API}&query=${routeForm.fromHouseNr}%20${routeForm.fromStreet}%20${routeForm.fromTypeOfStreet},%20${routeForm.fromCity}%20DE`
        );
        const startLat_Long = {lat: startPoint.data.data[0].latitude, long: startPoint.data.data[0].longitude};
        const endPoint = await axios.get(
          `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POS_STACK_API}&query=${routeForm.toHouseNr}%20${routeForm.toStreet}%20${routeForm.toTypeOfStreet},%20${routeForm.toCity}%20DE`
          );
          const endLat_Long = {lat: endPoint.data.data[0].latitude, long: endPoint.data.data[0].longitude};
        
        dispatch({ type: "CALC_ROUTE", payload: {startLat_Long, endLat_Long} });
        navigate("/calc_route")
      })()
  }
  
  const value = {
    ownerArray,
    locations: state.locations,
    getEndPoint,
    endPoint: state.endPoint,
    getActualPosition,
    startPoint: state.startPoint,
    routeCoordiantes,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
