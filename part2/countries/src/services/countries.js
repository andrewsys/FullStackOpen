import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

<<<<<<< HEAD
=======
const getWeather = ({capital, country}) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital},${country}&appid=04a13a95cd2135aa78a4416332515ca9`)
    return request.then(response => response.data)
}

>>>>>>> 272e8b555fa3608d642c67b8129ed5db450e596f
export default { getAll, getWeather }