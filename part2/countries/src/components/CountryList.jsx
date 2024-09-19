import { useState } from "react"
import axios from 'axios'

const CountryList = ({countries, setSearchTerm}) => {
    const ulStyle = {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }

    const [weather, setWeather] = useState(null)

    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (countries.length === 1) {
        const country = countries[0]

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital.toString()},${country.flag}&appid=${import.meta.env.VITE_WEATHERAPI_KEY}`).then(response => {
            setWeather(response.data)
        })


        const displayWeatherInfo = type => {
            if (typeof weather?.main?.temp !== 'undefined') {
                if (type === 'temperature') {
                    return (weather.main.temp - 273).toFixed(2)
                } else if (type === 'wind') {
                    return (weather.wind.speed.toString())
                } else if (type === 'icon') {
                    return (weather.weather[0].icon)
                }
            }
        }
        

        return (
            <div>
                <h1>{country.name.common}</h1>

                <p>capital {country.capital}<br />area {country.area}</p>

                <h3>Languages:</h3>
                <ul>
                    {(Object.values(country.languages)).map(language => <li key={language}>{language}</li>)}
                </ul>

                <img src={country.flags.png} />

                <h1>{country.capital}</h1>
                <p>temperature {displayWeatherInfo('temperature')} Celcius</p>
                <img src={`https://openweathermap.org/img/wn/${displayWeatherInfo('icon')}@2x.png`} />
                <p>wind {displayWeatherInfo('wind')} m/s</p>
            </div>
        )
    }

    return(
        <ul style={ulStyle}>
            {countries.map(country => <li key={country.name.common}>{country.name.common}<button onClick={() => setSearchTerm(country.name.common)}>show</button></li>)}
        </ul>
    )
}

export default CountryList