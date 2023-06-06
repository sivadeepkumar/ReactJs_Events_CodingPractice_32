import './index.css'

const EventItem = props => {
  const {eachItem, onClicked} = props
  const {name, location, imageUrl, registrationStatus} = eachItem

  const clickedImage = () => {
    onClicked(registrationStatus)
  }
  return (
    <li>
      <button type="button" onClick={clickedImage}>
        <div className="each-card">
          <img className="img-in-card" src={imageUrl} alt="event" />
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </button>
    </li>
  )
}

export default EventItem
