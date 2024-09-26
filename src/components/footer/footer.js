import './footer.scss'
import logo2 from '../../assets/logo.png'
import copy from '../../assets/copyright-regular.svg'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo2} alt='Logo Kasa' className='logo2' />
            <div className='copyright'>
                <img src={copy} alt='Logo Kasa' className='copy' />
                <h1 className='right'>2020 Kasa. All rights reserved</h1>
            </div>
            
        </div>
    )
}

export default Footer