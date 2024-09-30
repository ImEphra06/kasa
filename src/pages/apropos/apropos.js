import React from "react";

import './apropos.scss'
import Banner from "../../components/banner/banner"
import Dropdown from "../../components/dropdown/dropdown";

function Apropos() {
    const contenuFiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const contenuRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const contenuService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const contenuSecurite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <React.Fragment>
            <Banner page="Apropos" texte="" />
            <div className="AproposContainer">
                <Dropdown page="apropos" titre="Fiabilité" contenu={contenuFiabilite} />
                <Dropdown page="apropos" titre="Respect" contenu={contenuRespect} />
                <Dropdown page="apropos" titre="Service" contenu={contenuService} />
                <Dropdown page="apropos" titre="Sécurité" contenu={contenuSecurite} />
            </div>
        </React.Fragment>
    );
}

export default Apropos;