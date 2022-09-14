import boardComment from "../models/boardComment.js";
import reviewModel from "../models/reviewModel.js";

const getAllComments = async (req, res) => {
  try {
    const response = await boardComment.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
const getReviews = async (req, res) => {
  try {
    const response = await reviewModel.find({ toUserId: req.body.ownerId });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
const addAComment = async (req, res) => {
  const { username, comment, userId, imgProfile, createdAt, dateNow } =
    req.body;

  
  const allComments = await boardComment.find();

  const commentId =
    allComments.reduce((a, b) => {
      return Math.max(a, b.commentId);
    }, 0) + 1;


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
    res.status(200).json(newBoardComment);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};
const addAReview = async (req, res) => {
  const {
    fromUsername,
    fromUserId,
    review,
    toUsername,
    toUserId,
    createdAt,
    dateNow,
    fromImgProfile,
  } = req.body;
console.log(req.body)
  const allReviews = await reviewModel.find();
  const reviewIdNew =
    allReviews.reduce((a, b) => {
      return Math.max(a, b.reviewId);
    }, 0) + 1;
  try {
    const newReviewComment = await reviewModel.create({
      reviewId: reviewIdNew,
      fromUsername,
      fromUserId,
      review,
      toUsername,
      toUserId,
      createdAt,
      dateNow,
      fromImgProfile,
    });
    res.status(200).json(newReviewComment);
  } catch (err) {
    res.status(400).json(err);
  }
};

export { getAllComments, addAComment, addAReview, getReviews };
