import ShowContact from './ShowContact'
import contactService from '../services/contacts'

const ContactsArea = ({filteredPersons, setPersons, persons, setNotificationMessage, setNotificationType}) => {
    const deleteContactId = (id) => {
        const personToDelete = filteredPersons.find(p => p.id === id)
        if (confirm(`Do you really want to delete '${personToDelete.name}'?`)) {
            contactService.deleteOne(id, personToDelete).then(returnedPerson => {

                console.log(`${returnedPerson.name} was sucessfully deleted.`)
                setPersons(persons.filter(p => p.id !== id))

            }).catch(error => {
                setNotificationMessage(`${personToDelete.name} has already been removed from server`)
                setNotificationType('red')
                setPersons(persons.filter(n => n.id !== id))
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 5000)
            })
        }
    }

    return (
        <ul>
            {filteredPersons.map(person => <ShowContact key={person.id} person={person} deleteContact={() => deleteContactId(person.id)} />)}
        </ul>
    )
}

export default ContactsArea