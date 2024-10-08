import { useState } from "react";
import previousImg from "../../assets/previous.svg";
import nextImg from "../../assets/next.svg";
import "./carrousel.scss";

function Carrousel({ images, titre }) {
	/* initialisation du hook d'état associé à l'index dans la table pictures */
	let [id, setId] = useState(0);

	/* S'il n'y a qu'une seule image, on masque les flèches de navigation */
	let classStringPrevious = "previous";
	let classStringNext = "next";
	if (images.length === 1) {
		classStringPrevious += " hidden";
		classStringNext += " hidden";
	}

	/* fonctions associées aux flèches de navigation du carrousel */
	function next() {
		id === images.length - 1 ? setId(0) : setId(id + 1);
	}
	function previous() {
		id === 0 ? setId(images.length - 1) : setId(id - 1);
	}

	return (
		<section className="carrousel-container">
			<img src={previousImg} className={classStringPrevious} onClick={previous} alt="précédente" />
			<img src={images[id]} className="picture" alt={titre} />
			<p>
				{id + 1}/{images.length}
			</p>
			<img src={nextImg} className={classStringNext} onClick={next} alt="suivante" />
		</section>
	);
}

export default Carrousel;