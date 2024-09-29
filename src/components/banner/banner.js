import './banner.scss'
import banAcc from '../../assets/accueil.jpg'
import banApr from '../../assets/apropos.jpg'


function Banner({ page, texte }) {
    return (
        <div className='banner'>
            <img src={page === "Accueil" ? banAcc : banApr} className={page === "Apropos" ? "imgApropos" : "imgAccueil"} alt="bannière" />
            <h1>{texte}</h1>
        </div>
    )
}

export default Banner