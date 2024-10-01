import './footer.scss'
import logo2 from '../../assets/logo.png'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo2} alt='Logo Kasa' className='logo2' />
            <h1>© 2020 Kasa. All rights reserved</h1>
        </div>
    )
}

export default Footer