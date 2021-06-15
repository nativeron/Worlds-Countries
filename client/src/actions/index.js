import axios from 'axios';
export  const GET_COUNTRIES= 'GET_COUNTRIES'
export const GET_COUNTRY= 'GET_COUNTRY'
export const AZ = 'AZ'
export const ZA = 'ZA'
export const SORT = 'SORT'


export function getCountries() {
    return (dispatch) => {
        return axios.get('http://localhost:3001/countries')
            .then(response =>{
                dispatch({ type: GET_COUNTRIES, payload: response.data })
            })
    }
}


export function getCountry(id) {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/countries/${id}`)
            .then(response =>{
                dispatch({ type: GET_COUNTRY, payload: response.data })
            })
    }
}


export function sort(order) {
    return {
        type: order,
    
    }
}

export function populationSort(order){
    return{
        type:order
    }
}




// export function sort(order, paises) {
//     let paisesordenados = paises

// 	paises.sort((a,b) => {

// 		// Para el filtro de población por km2
// 		// var nombreA = (a.habitantes || 1) / (a.area ||  1);
//   		// var nombreB = (b.habitantes || 1) / (b.area || 1);

//   		var nombreA = a.name.toUpperCase()
//   		var nombreB = b.name.toUpperCase()


// 		if(order === AZ){
//             if(nombreA < nombreB){
//                 return -1;
//             }
//             if(nombreA > nombreB){
//                 return 1
//             }
//             return 0
//         }
//         if(order === ZA){
//             if(nombreA < nombreB){
//                 return 1;
//             }
//             if(nombreA > nombreB){
//                 return -1
//             }
//             return 0
//         }
// 	})
// 	return function(dispatch){
//         dispatch({type: SORT, payload: paisesordenados})
//     }
// }
