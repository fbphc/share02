import { createContext, useReducer } from "react";
import { getAllOwners } from "../../utils/axios-utils.js";
import mapReducer, { mapState } from "./mapReducer.js";

export const MapContext = createContext(mapState);

export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, mapState);
  console.log("state", state)
  
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
  const value = {
    ownerArray,
    locations: state.locations
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
