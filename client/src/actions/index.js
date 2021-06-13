import axios from 'axios';
export  const GET_COUNTRIES= 'GET_COUNTRIES'
export const GET_COUNTRY= 'GET_COUNTRY'
export const POST_ACTIVITY= 'POST_ACTIVITY'

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

