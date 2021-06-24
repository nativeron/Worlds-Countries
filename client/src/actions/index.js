import axios from 'axios';
export  const GET_COUNTRIES= 'GET_COUNTRIES'
export const GET_COUNTRY= 'GET_COUNTRY'
export const GET_ACTIVITIES= 'GET_ACTIVITIES'
export const GET_COUNTRIESREGION = 'GET_COUNTRIESREGION'
export const FILTER= 'FILTER'
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

export function getActivities() {
    return (dispatch)=>{
        return axios.get('http://localhost:3001/activities')
        .then(response => { 
            dispatch({ type: GET_ACTIVITIES, payload: response.data})
        })
    }
}

export function filtroReg(region) {
    return (dispatch)=>{
        return axios.get(`http://localhost:3001/countries?region=${region}`)
            .then(response =>{
                dispatch({ type: GET_COUNTRIESREGION, payload: response.data })
            })
    }
}

export function filter(payload){
    return{
        type: FILTER,
        payload
    }
}

export function sort(order,array) { 
    let sortArray = [...array]
    sortArray.sort((a, b) => {
        var countryA = a.name.toUpperCase()
        var countryB = b.name.toUpperCase()

        if (order === 'AZ') {
            if (countryA < countryB) { return -1 }
            if (countryA > countryB) { return 1 }
            return 0
        }
        if (order === 'ZA') {
            if (countryA < countryB) { return 1 }
            if (countryA > countryB) { return -1 }
            return 0
        }
    })
    return function (dispatch) {
        dispatch({ type: order, payload: sortArray })
    }
}

export function populationSort(order, array){
    let sortArray = [...array]
    sortArray.sort(function (a, b) {
        var countryA = parseFloat(a.population)
        var countryB = parseFloat(b.population)
//Convierte (parsea) un argumento de tipo cadena y devuelve un número de punto flotante.
        if (order === 'POP_ASC') {
            if (countryA < countryB) { return -1 }
            if (countryA > countryB) { return 1  }
            return 0
        }
        if (order === 'POP_DES') {
            if (countryA < countryB) { return 1 }
            if (countryA > countryB) { return -1 }
            return 0
        }
    })

    return function (dispatch) {
        dispatch({ type: order, payload: sortArray })
    }
}


