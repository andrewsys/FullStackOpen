import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getWeather = ({capital, country}) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital},${country}&appid=04a13a95cd2135aa78a4416332515ca9`)
    return request.then(response => response.data)
}

export default { getAll, getWeather }