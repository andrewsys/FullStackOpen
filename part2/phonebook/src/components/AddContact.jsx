const AddContact = ({newName, newNumber, persons, setNewName, setNewNumber, setPersons}) => {
    const newContact = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
    
        const existingPersons = persons.map(person => person.name)
        if (existingPersons.indexOf(personObject.name) == -1) {
            setPersons(persons.concat(personObject))
        } else {
            alert(`${newName} is already added to the phonebook`)
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