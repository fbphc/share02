import { Router } from "express";

import { getAllComments,getReviews ,addAComment, addAReview, addADirectMsg, getDirectMsgs } from "../controllers/messagesControllers.js";
  
  
  const messagesRouter = Router();
  
  
  messagesRouter.get("/getAllComments", getAllComments)
  messagesRouter.post("/addAComment", addAComment)
  messagesRouter.post("/addAReview", addAReview)
  messagesRouter.post("/getReviews", getReviews)

  messagesRouter.post("/addADirectMsg", addADirectMsg)
  messagesRouter.post("/getDirectMsgs", getDirectMsgs)



  
  
  export default messagesRouter;
  