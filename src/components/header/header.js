import { NavLink } from "react-router-dom";
import './header.scss'
import logo1 from '../../assets/logo_white.png'

function Header() {
    return (
        <div className='header'>
            <img src={logo1} alt='Logo Kasa' />
            <div className="link">
                <NavLink to="/" exact activeClassName="active"> <h1 className='acceuil'>Acceuil</h1> </NavLink>
                <NavLink to="/about" activeClassName="active"> <h1 className='propos'>A Propos</h1> </NavLink>
            </div>
        </div>
    )
}

export default Header;
