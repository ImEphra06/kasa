import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useFetch } from "../utils/hook";
import Carrousel from "../components/carrousel/carrousel";
import Rating from "../components/rating/rating";
import Dropdown from "../components/dropdown/dropdown";
import { LoaderWrapper, Loader } from "../utils/loader";

/* Définition du style du className LogementContainer */
const LogementContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 40px 7%;
	width: 86%;

	@media screen and (max-width: 780px) {
		flex-direction: column;
		margin: 10px 7% 40px 7%px;
	}
`;

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
				<LogementContainer>
					<Dropdown page="logement" titre="Description" contenu={locationSelected.description} />
					<Dropdown page="logement" titre="Equipements" contenu={locationSelected.equipments} />
				</LogementContainer>
			</React.Fragment>
		);
	}
}

export default Logement;