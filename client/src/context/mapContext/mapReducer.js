export const mapState ={
    locations: []
} 
const mapReducer = (state, action) => {
const {type, payload} =action;
switch (type){
    case "ADD_POS": {
        return {
            ...state,
            locations: payload
        }
    }
    case "FILTER_CHARGER": {
        return {
            ...state,
            locations: payload
        }
    }
    
    default: {
        return state;
      }
}

}
export default mapReducer