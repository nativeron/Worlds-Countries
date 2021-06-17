import { GET_COUNTRIES, FILTER , GET_COUNTRY, GET_ACTIVITIES, SORT, GET_COUNTRIESREGION} from "../actions/index"

const initialState ={
    activities:[],
    countries:[],
    filteredcountries:[],
    searchedcountries: [],
    country:{},
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
    if (action.type === GET_COUNTRIESREGION){
        return{
            ...state,
            filteredcountries: action.payload
        }
    }
    if (action.type === SORT){
		return{
			...state,
			filteredcountries: action.payload
		}
	}
    if (action.type === FILTER){
        return{
            ...state,
            filteredcountries: action.payload
        }
    }
    if (action.type === GET_ACTIVITIES){
        return{
            ...state,
            activities: action.payload
        }
    }
    if (action.type === 'AZ') {
        return {
            ...state,
            countries: action.payload,
            filteredcountries: action.payload,
            searchedcountries: action.payload
        };
    }
    if (action.type === 'ZA') {
        return {
            ...state,
            countries: action.payload,
            filteredcountries: action.payload,
            searchedcountries: action.payload,
        };
    }
    if(action.type === 'POP_ASC'){
        return {
            ...state,
            countries: action.payload,
            filteredcountries: action.payload,
            searchedcountries: action.payload,
        }
    }
    if(action.type === 'POP_DES'){
        return {
            ...state,
            countries: action.payload,
            filteredcountries: action.payload,
            searchedcountries: action.payload,
        }
    }
	
    return state;
}
export default rootReducer;