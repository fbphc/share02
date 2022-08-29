import { createContext, useReducer } from "react";
import authReducer, { authState } from "./authReducer.js";
import { login, signup } from "../../utils/axios-utils.js";
export const AuthContext = createContext(authState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authState);

  async function signUp(FormData) {
    try {
      const response = await signup(FormData);
      dispatch({ type: "AUTH_SIGNUP", payload: response.data });
      return response;
    } catch (err) {
      dispatch({ type: "SIGNIN_ERR", payload: err.message });
    }
  }
  async function logIn(FormData) {
    try {
      const response = await login(FormData);
      dispatch({ type: "AUTH_SIGNIN", payload: response.data });
      console.log(response.data);
      return response;
    } catch (err) {
      dispatch({ type: "SIGNIN_ERR", payload: err.message });
    }
  }
  const value = { logIn, signUp, isAuthenticated: state.isAuthenticated };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
