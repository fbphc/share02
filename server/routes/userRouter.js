import { Router } from "express";
import { validatorSignUp, validatorLogIn } from "../middlewares/validators.js";
import uploadFile from "../middlewares/uploadFile.js";
import authenticateToken from "../middlewares/authToken.js";
import {
  registerUser,
  loginUser,
  tokenValidator
} from "../controllers/authControllers.js";
import getFile from "../controllers/fileControllers.js";

const userRouter = Router();

userRouter.post("/sign_up", validatorSignUp(), registerUser);
userRouter.post("/login", validatorLogIn(), loginUser);
userRouter.get("/tokenValidation", authenticateToken, tokenValidator)
userRouter.post('/upload', uploadFile, getFile)

export default userRouter;


