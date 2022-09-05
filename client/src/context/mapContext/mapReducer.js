export const mapState = {
  locations: [],
  routeData: {},
  actualPosition: null,
  startPoint:null,
  endPoint:null
};
const mapReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_POS": {
      return {
        ...state,
        locations: payload,
      };
    }
    case "FILTER_CHARGER": {
      return {
        ...state,
        locations: payload,
      };
    }
    case "CAlC_ENDPOINT": {
      return {
        ...state,
        routeData: payload,
      };
    }
    case "ACTUAL_POS": {
      return {
        ...state,
        actualPosition: payload,
      };
    }
    
    default: {
      return state;
    }
  }
};
export default mapReducer;
