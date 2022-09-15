export const commentsState = {
  
    review:{},
    comment: {},
    allComments:[],
    allReviews:[]
  };
  const commentsReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_COMMENT": {
        return {
          ...state,
          comment: payload,
        };
    }
    case "ALL_COMMENTS": {
      return {
        ...state,
        allComments: payload,
      };
  }
    case "ADD_REVIEW":{
      return{
        ...state,
        review:payload
      }
    }
    case "ALL_REVIEWS":{
      return {...state, allReviews: payload}
    }
      default: {
        return state;
      }
    }
  };
  export default commentsReducer;
  