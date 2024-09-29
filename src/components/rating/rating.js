import "./rating.scss";
import emptyStar from "../../assets/emptyStar.svg";
import filledStar from "../../assets/filledStar.svg";

function Rating({ logement }) {
	/* initialisation de la table de rating */
	const ratingTab = [];
	for (let i = 0; i < 5; i++) {
		ratingTab.push(i < logement.rating ? filledStar : emptyStar);
	}

	return (
		<section className="rating-container">
			<article className="caracteristics">
				<h1>{logement.title}</h1>
				<p>{logement.location}</p>
				<div className="tagsList">
					{logement.tags.map((tag) => (
						<p key={tag}>{tag}</p>
					))}
				</div>
			</article>

			<article className="owner">
				<div className="profil">
					<p>{logement.host.name}</p>
					<img src={logement.host.picture} alt="" />
				</div>
				<div className="rating">
					{ratingTab.map((elt, index) => (
						<img key={index} src={elt} alt="rating star" />
					))}
				</div>
			</article>
		</section>
	);
}

export default Rating;