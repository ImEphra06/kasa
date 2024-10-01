import { useState } from "react";
import "./dropdown.scss";
import up from '../../assets/up.svg';
import down from '../../assets/down.svg';

function Dropdown({ page, titre, contenu }) {
	/* gestion de l'article déroulant au click par le state openState */
	let [openState, setOpenState] = useState(false);

	function changeState() {
		setOpenState(!openState);
	}

	/* gestion de l'affichage du contenu suivant le type string ou non */
	return (
		<article className={page === "logement" ? "bloc-accueil" : "bloc-apropos"}>
			<summary className="titre" onClick={changeState}>
				{titre}
				<img src={openState === false ? up : down} alt={openState === false ? "Chevron up" : "Chevron down"} />
			</summary>

			<div className={openState === false ? "contenu hidden" : "contenu"}>
				{typeof contenu === "string" ? (
					<p>{contenu}</p>
				) : (
					contenu.map((elt, index) => <p key={index}>{elt}</p>)
				)}
			</div>
		</article>
	);
}

export default Dropdown;