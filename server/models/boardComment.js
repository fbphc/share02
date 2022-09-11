import mongoose from "mongoose";

const boardCommentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    comment: { type: String, required: true },
    userId: {
      type: Number,
    },
    imgProfile: { type: String },
    createdAt: { type: String },
    dateNow: { type: Array },
    commentId: {type: Number}
  },
  { timestamps: true }
);

const boardComment = mongoose.model("boardComment", boardCommentSchema);

export default boardComment;
