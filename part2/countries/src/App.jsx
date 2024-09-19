import { useEffect, useState } from "react"
import countriesService from './services/countries'
import CountryList from './components/CountryList'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState('')

  useEffect(() => {
    countriesService.getAll().then(ReturnedCountries => {
      setCountries(ReturnedCountries)
    })
  }, [countries])
  if (!countries) {
    return null
  }

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }
  const visibleCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      find countries <input value={searchTerm} onChange={handleSearchTerm}/>
      <CountryList countries={visibleCountries} setSearchTerm={setSearchTerm}/>
    </>
  )
}

export default App