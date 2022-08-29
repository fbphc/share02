import { createContext, useReducer, useContext } from "react";
import authReducer, { authState } from "./authReducer.js";
import { login, signup, validateToken } from "../../utils/axios-utils.js";
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

  const tokenValidator = async () => {
    try {
      const response = await validateToken();
      if (response.data.message) {
        dispatch({ type: "SIGN_OUT" });
        localStorage.removeItem("user");
      } else {
        console.log(response)
        dispatch({
          type: "AUTH_VALID",
          
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

   const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
    localStorage.removeItem("user");
  };

  const value = { logIn, signUp, isAuthenticated: state.isAuthenticated, tokenValidator };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
