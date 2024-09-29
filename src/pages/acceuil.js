import React from "react";
import styled from "styled-components";
import Banner from "../components/banner/banner"
import Card from "../components/card/card";
import Error from '../components/error/error'
import { useFetch } from "../utils/hook";
import { LoaderWrapper, Loader } from "../utils/loader";

const LocationContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	background-color: #f6f6f6;
	padding: 20px 0;
	border-radius: 25px;
	margin: 40px 7%;
	width: 86%;
`;

function Accueil() {
    const { locationList, isLoading, error } = useFetch("/data/data.json");

    if (error) {
        return <Error/>;
    }

    return isLoading ? (
        <React.Fragment>
            <LoaderWrapper>
                <Loader />
            </LoaderWrapper>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <Banner page="Accueil" texte="Chez vous, partout ailleurs"/>
            <LocationContainer>
                {locationList.map((location) => (
                    <Card key={location.id} id={location.id} title={location.title} cover={location.cover} />
                ))}
            </LocationContainer>
        </React.Fragment>
    )
}

export default Accueil;