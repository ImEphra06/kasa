import { Link } from "react-router-dom";
import "./card.scss";

function Card({ id, title, cover }) {
	return (
		<Link to={`./logement/${id}`}>
			<figure>
				<img src={cover} alt="location" />
				<figcaption> {title} </figcaption>
			</figure>
		</Link>
	);
}

export default Card;