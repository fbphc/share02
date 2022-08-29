import { createContext, useReducer } from "react";
import authReducer, { authState } from "./authReducer.js";
import {
  login,
  signup,
  validateToken,
  getAllOwners,
} from "../../utils/axios-utils.js";
export const AuthContext = createContext(authState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authState);

  async function signUp(FormData) {
    try {
      const response = await signup(FormData);
      dispatch({ type: "AUTH_SIGNUP", payload: response.data });
      const userStorage = {
        username: response.data.user.username,
        id: response.data.user.id,
        token: response.data.token,
      };
      localStorage.setItem("user", JSON.stringify(userStorage));
      return response;
    } catch (err) {
      dispatch({ type: "SIGNIN_ERR", payload: err.message });
    }
  }
  async function logIn(FormData) {
    try {
      const response = await login(FormData);
      dispatch({ type: "AUTH_SIGNIN", payload: response.data });
      const userStorage = {
        username: response.data.user.username,
        id: response.data.user.id,
        token: response.data.token,
      };
      localStorage.setItem("user", JSON.stringify(userStorage));
      return response;
    } catch (err) {
      dispatch({ type: "SIGNIN_ERR", payload: err.message });
    }
  }
  async function tokenValidator() {
    try {
      const response = await validateToken();
      if (response.data.message) {
        dispatch({ type: "SIGN_OUT" });
        localStorage.removeItem("user");
      } else {
        dispatch({
          type: "AUTH_VALID",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  function signOut() {
    dispatch({ type: "SIGN_OUT" });
    localStorage.removeItem("user");
  }

  function produceCoordinatesOwner() {
    let z = [];
    (async () => {
      const x = await getAllOwners();
      x.data.map((item) => {
        const y = {
          street: item.address.street.split("straße").join(" strasse"),
          houseNr: item.address.houseNr,
          city: item.address.city,
        };

        z.push(y);
      });
      
    })();
    return z;
  }
  const value = {
    logIn,
    signUp,
    signOut,
    isAuthenticated: state.isAuthenticated,
    tokenValidator,
    produceCoordinatesOwner,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
