import { Router } from "express";
import { validatorSignUp, validatorLogIn } from "../middlewares/validators.js";
import authenticateToken from "../middlewares/authToken.js";

import {
  registerUser,
  loginUser,
  tokenValidator
} from "../controllers/authControllers.js";

const userRouter = Router();

userRouter.post("/sign_up", validatorSignUp(), registerUser);
userRouter.post("/login", validatorLogIn(), loginUser);
userRouter.get("/tokenValidation", authenticateToken, tokenValidator)



/*---------testing img----------*/
import multer from 'multer';
import userImage from "../models/userImage.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
     return cb(null, true)
  } else {
    return cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 
  },
  fileFilter: fileFilter
})

userRouter.post('/testing', upload.single('imageFile'), (req, res) => {
  console.log(req.file);
  const image = new userImage({
    image: req.file.path
  })
  image
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created image successfully",
        createdImage: {

          request: {
            type: 'GET',
            url: "http://localhost:5006/user/testing" + result
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

})



export default userRouter;


