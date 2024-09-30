import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useFetch } from "../../utils/hook";
import { LoaderWrapper, Loader } from "../../utils/loader";

import "./logement.scss";
import Carrousel from "../../components/carrousel/carrousel";
import Rating from "../../components/rating/rating";
import Dropdown from "../../components/dropdown/dropdown";

function Logement() {
	const { userId } = useParams();
	const { locationList, isLoading, error } = useFetch("/data/data.json");

	if (error) {
		return <span>Oups il y a eu un problème</span>;
	}

	if (isLoading) {
		return (
			<LoaderWrapper>
				<Loader />
			</LoaderWrapper>
		);
	} else {
		const locationSelected = locationList.find((elt) => elt.id === userId);

		if (locationSelected === undefined) {
			return <Navigate to="/*" />;
		}

		return (
			<React.Fragment>
				<Carrousel images={locationSelected.pictures} titre={locationSelected.title} />
				<Rating logement={locationSelected} />
				<div className="LogementContainer">
					<Dropdown page="logement" titre="Description" contenu={locationSelected.description} />
					<Dropdown page="logement" titre="Equipements" contenu={locationSelected.equipments} />
				</div>
			</React.Fragment>
		);
	}
}

export default Logement;