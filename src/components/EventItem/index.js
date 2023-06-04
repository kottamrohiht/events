import './index.css'

const EventItem = props => {
  const {item, updateEventStatus, acitveEventId} = props
  const {id, imageUrl, name, location, registrationStatus} = item
  const eventVal = acitveEventId === id
  const eventCss = eventVal ? 'active-item' : ''

  const eventClicked = () => {
    updateEventStatus(id, registrationStatus)
  }

  return (
    <li className="list-item">
      <button onClick={eventClicked} type="button" className="button-el">
        <img src={imageUrl} className={`imageUrl ${eventCss}`} alt="event" />
        <p className="name"> {name} </p>
        <p className="location"> {location} </p>
      </button>
    </li>
  )
}
export default EventItem
