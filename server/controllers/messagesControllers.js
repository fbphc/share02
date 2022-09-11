import boardComment from "../models/boardComment.js";
import axios from "axios";

const getAllComments = async (req, res) => {
  try {
    const response = await boardComment.find()

    res.status(200).json(response)
  } catch (err) {
    res.status(400).json(err)
  }
};

const addAComment = async (req, res) => {
  const { username, comment, userId, imgProfile, createdAt, dateNow } =
    req.body;

  const commentId = (await boardComment.find()).length + 1;

  try {
    const newBoardComment = await boardComment.create({
        username,
        comment,
        commentId,
        userId,
        imgProfile,
        createdAt,
        dateNow,
      });
      res
        .status(200)
        .json(newBoardComment)
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
}   
  
  
};
export { getAllComments, addAComment };
