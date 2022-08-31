import { createContext, useReducer } from "react";
import { getAllOwners } from "../../utils/axios-utils.js";
import mapReducer, { mapState } from "./mapReducer.js";

export const MapContext = createContext(mapState);

export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, mapState);

  function ownerArray() {
    let ownersArray = [];
    (async () => {
      const response = await getAllOwners();
      try {
        response.data.map((item) => {
          const userAddress = {
            /**** later on we have to delete ****/
            username: item.username,
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
function filterByCharger(charger) {
  let ownersArray = [];
  (async () => {
    const response = await getAllOwners();
    try {
      response.data.map((item) => {
        const userAddress = {
          /**** later on we have to delete ****/
          username: item.username,
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
     const filteredArray = ownersArray.filter(item => item.typeOfCharger === charger)
      
      dispatch({ type: "FILTER_CHARGER", payload: filteredArray });
    } catch (err) {
      console.log(err);
    }
  })();
  return ownersArray;
  }
  const value = {
    ownerArray,
    locations: state.locations,
    filterByCharger
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
