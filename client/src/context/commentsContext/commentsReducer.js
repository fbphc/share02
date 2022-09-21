export const commentsState = {
  directMsg: {},
  review: {},
  comment: {},
  allComments: [],
  allReviews: [],
  allDirectMsgs: []
};
const commentsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case  "ADD_DI_MSG": {
      return {
        ...state, 
        directMsg: payload,
      }
    }
    case "ADD_COMMENT": {
      return {
        ...state,
        comment: payload,
      };
    }
   
    case "ADD_REVIEW": {
      return {
        ...state,
        review: payload,
      };
    }
    case "ALL_REVIEWS": {
      return { ...state, allReviews: payload };
    }
    case "ALL_COMMENTS": {
      return {
        ...state,
        allComments: payload,
      };
    }
    case "ALL_DI_MSGS": {
      return{
        ...state,
        allDirectMsgs: payload
      }
    }
    default: {
      return state;
    }
  }
};

export default commentsReducer;
