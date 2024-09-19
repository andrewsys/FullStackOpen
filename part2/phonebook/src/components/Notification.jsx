const Notification = ({message, messageColor}) => {
    const notificationStyle = {
        color: messageColor,
        backgroundColor: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
      }

    if (message === null || message === '') {
        return null
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}
 
export default Notification