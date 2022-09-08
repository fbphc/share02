import { createContext, useReducer, useState } from "react";
import authReducer, { authState } from "./authReducer.js";
import {
  login,
  signup,
  validateToken,
  getProfile,
  getAvatar,
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

  async function getProfileInfo(userId) {
    try {
      const response = await getProfile(userId);

      dispatch({ type: "USER_INFO", payload: response.data[0] });
    } catch (err) {
      console.log(err);
    }
  }

  function signOut() {
    dispatch({ type: "SIGN_OUT" });
    localStorage.removeItem("user");
  }


  const value = {
    logIn,
    signUp,
    signOut,
    isAuthenticated: state.isAuthenticated,
    tokenValidator,
    getProfileInfo,
    state,
    }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
