import { createContext, useReducer } from "react";
import { getAllOwners } from "../../utils/axios-utils.js";
import mapReducer, { mapState } from "./mapReducer.js";

export const MapContext = createContext(mapState);

export const MapProvider = ({ children }) => {
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
  
  function getEndPoint(routeData) {
    dispatch({ type: "CAlC_ENDPOINT", payload: routeData });
  }
  function getActualPosition(actualPosition) {
    dispatch({ type: "ACTUAL_POS", payload: actualPosition });

  }

  const value = {
    ownerArray,
    locations: state.locations,
    getEndPoint,
    routeData: state.routeData,
    getActualPosition,
    actualPosition: state.actualPosition,
  };
  
  
  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
