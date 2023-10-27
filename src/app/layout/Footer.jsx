import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <footer className="footer__content d-flex justify-content-center align-items-center">
        <span className="fw-bold">
            Vision Company <FontAwesomeIcon icon={faCopyright} />
        </span>
    </footer>
  )
}
