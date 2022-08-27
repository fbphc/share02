import axios from "axios";

export const clientAPI = axios.create({ baseURL: "http://localhost:5006" });

export const signup = (user) => clientAPI.post("/user/sign_up", user);

export const login = (user) => clientAPI.post("/user/login", user);

export const validateToken = () => {
 /*  return clientAPI.get("/user/tokenValidation", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }); */
};
