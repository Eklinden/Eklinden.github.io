import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import plus from '../../images/plus-icon.svg'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
        <figure className="logo-container">
            <img className="logo" src={logo} alt="" />
        </figure>
        <section>
            <div className="cName-wrapper">
                <h1><span>R</span>ewind</h1>
                <span className="line"></span>
                <h2>Padel Tracker</h2>
            </div>
            <nav>
                <Link className="home-button" to="/">Hemskärm</Link>
                <Link className="add-score" to="/addScore">Lägg till resultat <img src={plus} alt="" /></Link>
            </nav>
        </section>
    </header>
  )
}

export default Header