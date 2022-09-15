import boardComment from "../models/boardComment.js";
import reviewModel from "../models/reviewModel.js";
import userApp from "../models/userApp.js";

const getAllComments = async (req, res) => {
 
  try {
    const response = await boardComment.find();
    const users = await userApp.find();
  
    response.map((comment) => {
      let imgProfile = "";
      let username = "";
      users.map((user) => {
        if (comment.userId === user.id) {
          imgProfile = user.imgProfile;
          username = user.username
        }
      });
      comment.username = username;
     return comment.imgProfile = imgProfile
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
const getReviews = async (req, res) => {
 
  try {
    const response = await reviewModel.find({ toUserId: req.body.ownerId });
    const users = await userApp.find();
  
    response.map((review) => {
      let imgProfile = "";
      let username = "";
      users.map((user) => {
        if (review.fromUserId === user.id) {
          imgProfile = user.imgProfile;
          username = user.username
        }
      });
      review.fromUsername = username;
     return review.fromImgProfile = imgProfile
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
const addAComment = async (req, res) => {
  const { username, comment, userId, createdAt, dateNow } = req.body;

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
  console.log(req.body);
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
