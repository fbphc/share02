import mongoose from "mongoose";
import userApp from "./userApp.js";
const { Schema } = mongoose;

const directMessageSchema = new mongoose.Schema(
  {
    /* directMsg: { type: String, required: true }, */
    /* directMsgId: {type: Number, required: true}, */
    senderId: {type: Number},
    receiverId: {type: Number},
    messagesArray: {type: Array},
    createdAt: { type: String },
    dateNow: { type: Array },
    /* sender: [{ type: Schema.Types.ObjectId, ref: "userApp" }],
    receiver: [{ type: Schema.Types.ObjectId, ref: "userApp" }], */
  },
  { timestamps: true }
);

const myConversation= mongoose.model("myConversation", directMessageSchema);

export default myConversation;
