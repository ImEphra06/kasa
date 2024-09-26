//import Data from "../data/data.json"; // Assurez-vous d'importer votre fichier JSON local
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

/*function Card() {
	const { locationList, isLoading, error } = useFetch("../../data/data.json");

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error occurred!</p>;

	return (
		<div className="card-container">
			{locationList.map((data) => (
				<div className="card" key={data.id}>
					<img src={data.cover} alt={data.title} className="card-cover" />
					<h2 className="card-title">{data.title}</h2>
				</div>
			))}
		</div>
	);
}*/