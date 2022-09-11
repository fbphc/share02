import { Router } from "express";

import { getAllComments,getReviews ,addAComment, addAReview } from "../controllers/messagesControllers.js";
  
  
  const messagesRouter = Router();
  
  
  messagesRouter.get("/getAllComments", getAllComments)
  messagesRouter.post("/addAComment", addAComment)
  messagesRouter.post("/addAReview", addAReview)
  messagesRouter.post("/getReviews", getReviews)


  
  
  export default messagesRouter;
  