import { Router } from "express";
import { validatorSignUp, validatorLogIn } from "../middlewares/validators.js";
import authenticateToken from "../middlewares/authToken.js";

import {
  registerUser,
  loginUser,
  tokenValidator,
  getAllOwners
} from "../controllers/authControllers.js";

const userRouter = Router();

userRouter.post("/sign_up", validatorSignUp(), registerUser);

userRouter.post("/login", validatorLogIn(), loginUser);
userRouter.get("/getAllOwners", getAllOwners)
userRouter.get("/tokenValidation", authenticateToken, tokenValidator )

export default userRouter;
