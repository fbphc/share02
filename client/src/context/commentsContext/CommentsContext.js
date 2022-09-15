import { createContext, useReducer } from "react";
import commentsReducer, { commentsState } from "./commentsReducer";

import { addComment, allComments, addReview, allReviews } from "../../utils/axios-utils.js";

export const CommentsContext = createContext(commentsState);

export const CommentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentsReducer, commentsState);

  async function addAComment(comment) {
    const current = new Date();
    const commentComplete = {
      ...comment,
      createdAt: Date.now(),
      dateNow: [
        `${current.getDate()}/${
          current.getMonth() + 1
        }/${current.getFullYear()}`,
        `${current.getHours()}:${
          current.getMinutes() + 1
        }:${current.getSeconds()}`,
      ],
    };

    try {
      const response = await addComment(commentComplete);
      dispatch({ type: "ADD_COMMENT", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  }
 
  async function getAllComments() {
    try {
      const response = await allComments();
      const sortedComments = response.data.sort(
        (a, b) => +b.createdAt - +a.createdAt
      );
      dispatch({ type: "ALL_COMMENTS", payload: sortedComments });
    } catch (err) {
      console.log(err);
    }
  }


  async function addAReview(review) {
    console.log(review)
    const current = new Date();
    const reviewComplete = {
      ...review,
      createdAt: Date.now(),
      dateNow: [
        `${current.getDate()}/${
          current.getMonth() + 1
        }/${current.getFullYear()}`,
        `${current.getHours()}:${
          current.getMinutes() + 1
        }:${current.getSeconds()}`,
      ],
    };
    try {
      const response = await addReview(reviewComplete);
      /* getReviews(review.toUserId) */
      dispatch({ type: "ADD_REVIEW", payload: response.data });

    } catch (err) {
      console.log(err);
    }
  }
  async function getReviews(ownerId) {
    try {
      const response = await allReviews(ownerId);
      const sortedComments = response.data.sort(
        (a, b) => +b.createdAt - +a.createdAt
      );
      
      dispatch({ type: "ALL_REVIEWS", payload: sortedComments });
    } catch (err) {
      console.log(err);
    }
  }
  
  const value = {
    addAComment,
    getAllComments,
    state,
    allComments: state.allComments,
    addAReview,
    allReviews: state.allReviews,
    getReviews
  };

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
};
