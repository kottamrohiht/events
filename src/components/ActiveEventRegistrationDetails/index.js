import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const yetToRegister = () => (
    <div className="yetToRegister-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegisterImg"
      />
      <p className="yetToPara">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="registrationButton">
        Register Here
      </button>
    </div>
  )

  const registered = () => (
    <div className="yetToRegister-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registeredImg"
      />
      <h1 className="registeredHeading">
        {' '}
        You have already registered for the event{' '}
      </h1>
    </div>
  )
  const registrationClosed = () => (
    <div className="yetToRegister-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yetToRegisterImg"
      />
      <h1 className="registeredHeading">Registrations Are Closed Now!</h1>
      <p className="yetToPara">
        Stay tuned. We will reopen <br /> the registration soon!
      </p>
    </div>
  )

  const renderNormalView = () => (
    <div className="yetToRegister-container">
      <p className="yetToPara">
        Click on an event, to view its <br /> registration details{' '}
      </p>
    </div>
  )

  switch (eventStatus) {
    case 'YET_TO_REGISTER':
      return yetToRegister()
    case 'REGISTERED':
      return registered()
    case 'REGISTRATIONS_CLOSED':
      return registrationClosed()
    default:
      return renderNormalView()
  }
}

export default ActiveEventRegistrationDetails
