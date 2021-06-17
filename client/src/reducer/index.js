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
            countries: state.countries.sort((a,b)=>(a.name>b.name ? 1 : -1)),
            filteredcountries: state.filteredcountries.sort((a,b)=>(a.name>b.name ? 1 : -1)),
            searchedcountries: state.searchedcountries.sort((a,b)=>(a.name>b.name ? 1 : -1))
        };
    }
    if (action.type === 'ZA') {
        return {
            ...state,
            countries: state.countries.sort((a,b)=>(a.name>b.name ? -1 : 1)),
            filteredcountries: state.filteredcountries.sort((a,b)=>(a.name>b.name ? -1 : 1)),
            searchedcountries: state.searchedcountries.sort((a,b)=>(a.name>b.name ? -1 : 1))
        };
    }
    if(action.type === 'POP_ASC'){
        return {
            ...state,
            countries: state.countries.sort((a,b)=> a.population>b.population ? 1 : -1),
            filteredcountries: state.countries.sort((a,b)=> a.population>b.population ? 1 : -1),
            searchedcountries: state.countries.sort((a,b)=> a.population>b.population ? 1 : -1),
        }
    }
    if(action.type === 'POP_DES'){
        return {
            ...state,
            countries: state.countries.sort((a,b)=> a.population>b.population ? -1 : 1),
            filteredcountries: state.countries.sort((a,b)=> a.population>b.population ? -1 : 1),
            searchedcountries: state.countries.sort((a,b)=> a.population>b.population ? -1 : 1),
        }
    }
	
    return state;
}
export default rootReducer;