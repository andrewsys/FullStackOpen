import ShowContact from './ShowContact'

const ContactsArea = ({filteredPersons}) => {
    return (
        <ul>
            {filteredPersons.map(person => <ShowContact key={person.id} person={person} />)}
        </ul>
    )
}

export default ContactsArea