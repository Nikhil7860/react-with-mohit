import * as types from './actionType';


const initialState = {
    dataArry: [],
    dataObj: {},
    loading: true
}



const usersReducers = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_Data:
            return {
                ...state,
                dataObj: action.payload,
                loading: false
            };


        default:
            return state
    }
}


export default usersReducers;