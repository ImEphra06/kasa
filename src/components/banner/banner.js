import './banner.scss'
import banniere from '../../assets/accueil.jpg'


function Banner() {
    return (
        <div className='banner'>
            <img src={banniere} alt='Banniere de l`acceueil'/>
            <h1>Chez vous, partout ailleurs</h1>
        </div>
    )
}

export default Banner