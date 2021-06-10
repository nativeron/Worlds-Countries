import { GET_COUNTRIES, GET_COUNTRY, POST_ACTIVITY } from "../actions/index"

const initialState ={
    //countryName:[],
    activity:[],
    countries:[],
    country:{},
    //filtroCont:{},
    //change_countries:{},
	//countryAlpha3Code:[]
    loading: false
}

function rootReducer(state= initialState,action){
	
    if (action.type === GET_COUNTRIES){
        return {
            ...state,
            countries:action.payload
        }
    }
    if (action.type === GET_COUNTRY){
        return {
            ...state,
            country:action.payload
        }
    }
    if (action.type === POST_ACTIVITY){
        return {
            ...state,
            acitivity:action.payload
        }
    }
	
    return state;
}
export default rootReducer;