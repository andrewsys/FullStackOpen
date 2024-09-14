import { useState, useEffect } from 'react'
import axios from 'axios'
import AddContact from './components/AddContact'
import ContactsArea from './components/ContactsArea'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterTerm, setFilterTerm] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
    setPersons(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterTerm.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={filterTerm} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <AddContact newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ContactsArea filteredPersons={filteredPersons} />
    </div>
  )
}

export default App