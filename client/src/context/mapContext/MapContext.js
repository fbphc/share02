import { createContext } from "react";
import { getAllOwners } from "../../utils/axios-utils.js";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {

  function ownerArray() {
    let ownersArray = [];
    (async () => {
      const response = await getAllOwners();
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
    })();
    return ownersArray;
  }
  const value = {
    ownerArray,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
