import { GET_COUNTRIES, GET_COUNTRY, SORT, AZ, ZA } from "../actions/index"

const initialState ={
    activity:[],
    countries:[],
    country:{},
    filtrados:[],
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
    if (action.type === SORT){
		return{
			...state,
			countries: action.payload
		}
	}
    if (action.type === 'AZ') {
        return {
            ...state,
            countries: state.countries.sort((a,b)=>(a.name>b.name ? 1 : -1))
        };
    }
    if (action.type === 'ZA') {
        return {
            ...state,
            countries: state.countries.sort((a,b)=>(a.name>b.name ? -1 : 1))
        };
    }
    if(action.type === 'POP_ASC'){
        return {
            ...state,
            countries: state.countries.sort((a,b)=> a.population>b.population ? 1 : -1)
        }
    }
    if(action.type === 'POP_DES'){
        return {
            ...state,
            countries: state.countries.sort((a,b)=> a.population>b.population ? -1 : 1)
        }
    }
	
    return state;
}
export default rootReducer;