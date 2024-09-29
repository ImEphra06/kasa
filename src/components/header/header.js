import { Link } from "react-router-dom";
import './header.scss'
import logo1 from '../../assets/logo_white.png'

function Header() {
    return (
        <div className='header'>
            <img src={logo1} alt='Logo Kasa' />
            <div className="link">
                <Link to="/"><h1 className='acceuil'>Acceuil</h1></Link>
                <Link to="/about"><h1 className='propos'>A Propos</h1></Link>
            </div>
        </div>
    )
}

export default Header