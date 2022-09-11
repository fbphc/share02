import { Router } from "express";

import { getAllComments, addAComment } from "../controllers/messagesControllers.js";
  
  
  const messagesRouter = Router();
  
  
  messagesRouter.get("/getAllComments", getAllComments)
  messagesRouter.post("/addAComment", addAComment)

  
  
  export default messagesRouter;
  