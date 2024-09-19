import { useState, useEffect } from 'react'
import Notification from './components/Notification'
import contactService from './services/contacts'
import AddContact from './components/AddContact'
import ContactsArea from './components/ContactsArea'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState('')

  useEffect(() => {
    contactService.getAll().then(initialContacts => {
      setPersons(initialContacts)
    })
  }, [])

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value)
  }

  //console.log(persons)
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterTerm.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} messageColor={notificationType}/>
      filter shown with <input value={filterTerm} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <AddContact newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setNotificationMessage={setNotificationMessage} setNotificationType={setNotificationType} />
      <h2>Numbers</h2>
      <ContactsArea filteredPersons={filteredPersons} persons={persons} setPersons={setPersons} setNotificationMessage={setNotificationMessage} setNotificationType={setNotificationType} />
    </div>
  )
}

export default App