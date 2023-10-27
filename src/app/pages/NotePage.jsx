
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import { ModalAddNote } from '../components/apunte/ModalAddNote'
import { ListNote } from '../components/apunte/ListNote'
import { TotalNote } from '../components/apunte/TotalNote'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NotePage = () => {
  return (
    <div className="note__content d-flex flex-column justify-content-between align-items-center">
      <div className="note__modal">
        <ModalAddNote />
      </div>

      <div className="note__listNote">
        <ListNote />
      </div>

      <div className="note__total d-flex justify-content-between">
        <TotalNote />
      </div>

      <div className="note__options">
        <Link className="btn btn-danger" to="/">
          Reiniciar <FontAwesomeIcon icon={faRotate} />
        </Link>
      </div>
    </div>
  )
}
