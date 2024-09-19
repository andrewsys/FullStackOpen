import axios from 'axios'
import contactService from '../services/contacts'

const AddContact = ({newName, newNumber, persons, setNewName, setNewNumber, setPersons, setNotificationMessage, setNotificationType}) => {
    const newContact = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: `${parseInt(persons[persons.length - 1].id) + 1}`
        }
    
        const existingPersons = persons.map(person => person.name)
        if (existingPersons.indexOf(personObject.name) == -1) {
            contactService.create(personObject).then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNotificationMessage(`Added ${returnedPerson.name}`)
                setNotificationType('green')
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 5000)
            })
        } else {
            if (confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                const samePerson = persons.find(p => p.name === personObject.name)
                const changedPerson = {...samePerson, number: personObject.number}
                
                contactService.updateOne(changedPerson.id, changedPerson).then(returnedPerson => {
                    setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
                    setNotificationMessage(`${returnedPerson.name} phone number has changed`)
                    setNotificationType('green')
                    setTimeout(() => {
                        setNotificationMessage(null)
                        setNotificationType(null)
                    }, 5000)
                }).catch(error => {
                    setNotificationMessage(`Information of ${changedPerson.name} has already been removed from server`)
                    setNotificationType('red')
                    setTimeout(() => {
                        setNotificationMessage(null)
                        setNotificationType(null)
                    }, 5000)
                })
                
                //console.log(existingPersons)
            }
        }
        
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={newContact}>
            <div>name: <input value={newName} onChange={handleNameChange}/></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
            <div><button type="submit">add</button></div>
        </form>
    )
}

export default AddContact