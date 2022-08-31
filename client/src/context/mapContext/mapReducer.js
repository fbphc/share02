export const mapState ={
    locations: []
} 
const mapReducer = (state, action) => {
const {type, payload} =action;
switch (type){
    case "ADD_POS": {
        console.log(payload)
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