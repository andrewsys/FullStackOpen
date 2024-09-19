const ShowContact = ({person, deleteContact}) => {
    return (
        <li>
            {person.name} {person.number} <button onClick={deleteContact}>delete</button>
        </li>
    )
}

export default ShowContact