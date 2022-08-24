import { Router } from "express";
import { validator } from "../middlewares/validator.js";

import {
  registerUser,
  /* loginUser, */
  /* tokenValidator */
} from "../controllers/authControllers.js";

const userRouter = Router();

userRouter.post("/sign_up", validator(), registerUser);

userRouter.post(
  "/login",
  /* validator(), */ (req, res) => {
    try {
      res.status(400).json("login route");
    } catch (err) {
      res.status(400).json({ errorMessage: err.message });
    }
  }
);

export default userRouter;
