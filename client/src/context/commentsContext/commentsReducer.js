export const commentsState = {
    comment: {},
    allComments:[]
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
    
      default: {
        return state;
      }
    }
  };
  export default commentsReducer;
  