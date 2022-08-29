import jwt from "jsonwebtoken";

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "7200s" });
};

export default generateToken;
