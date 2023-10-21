import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { ListTeam } from '../components/team/ListTeam'
import { ModalAddTeam } from '../components/team/ModalAddTeam'

export const HomePage = () => {
  return (
    <>
      <div className="home__content d-flex flex-column justify-content-between align-items-center">

        <div className="home__add">
          <ModalAddTeam />
        </div>

        <div className="home__box-teams">

          <div className="d-flex justify-content-center align-items-center mb-2">
            <span className="fw-bold">
              Equipos :
            </span>
          </div>

          <div className="home__list">
            <ListTeam />
          </div>
        </div>

        <div className="home__opciones mb-2 d-flex flex-column justify-content-between align-items-center">
          <span className="mb-2">Inicio <FontAwesomeIcon icon={faCirclePlay} /></span>

          <div className="">
            <button className="btn btn-primary me-4">
              Tradicional
            </button>

            <button className="btn btn-primary">
              Aleatorio
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
