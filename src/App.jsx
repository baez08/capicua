import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { AppRouter } from './routers/AppRouter';

//Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './styles/styles.scss';
import { Footer } from './app/layout/Footer';

export const App = () => {
  return (
    <>
      <div className="app__content d-flex">

        <div className="app__logo d-flex justify-content-center align-items-center d-none d-md-flex">
          <img src="./assets/domino.png" alt="domino" />
        </div>

        <div className=" app__main container d-flex flex-column justify-content-around align-items-center">

          <div className="app__title container mt-3 mb-3 d-flex justify-content-center align-items-center">
            Capicua Apunte <span className="ms-2"><FontAwesomeIcon icon={faPencil} /></span>
          </div>

          <div className="app__box container">
            <AppRouter />
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

