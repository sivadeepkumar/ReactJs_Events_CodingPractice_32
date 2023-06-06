import './index.css'

const apiRegistrationStatus = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const renderRegistrationStatusInitial = () => (
    <div className="right-card">
      <p className="head-right">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderRegistrationStatusYetToRegister = () => (
    <div>
      <img
        className="yet-to-register"
        src="
  https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance.</p>

      <button className="btn1" type="button">
        Register Here
      </button>
    </div>
  )
  const renderRegistrationRegistered = () => (
    <div className="registered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="closed-registertion">
      <img
        className="img-registertion"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const renderStatus = () => {
    switch (status) {
      case apiRegistrationStatus.initial:
        return renderRegistrationStatusInitial()
      case apiRegistrationStatus.yetToRegister:
        return renderRegistrationStatusYetToRegister()
      case apiRegistrationStatus.registered:
        return renderRegistrationRegistered()
      case apiRegistrationStatus.registrationsClosed:
        return renderRegistrationClosed()
      default:
        return null
    }
  }

  return renderStatus()
}

export default ActiveEventRegistrationDetails

/*

 const renderRegistrationStatusInitial = () => (
    <div className="right-card">
      <h1 className="head-right">
        Click on an event, to view its registrations details
      </h1>
    </div>
  )

 const  renderRegistrationStatusYetToRegister = () => (
    <div>
      <img
        className="yet-to-register"
        src="
  https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance.</p>

      <button className="btn1" type="button">
        Register Here
      </button>
    </div>
  )

 const renderRegistrationRegistered = () => (
    <div className="registered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p>You have already Registered for the event</p>
    </div>
  )

 const  renderRegistrationClosed = () => (
    <div className="closed-registertion">
      <img
        className="img-registertion"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registerations are Closed now!</h1>
      <p>Stay tunned.We will reopen the registrations soon!</p>
    </div>
  )

  */
