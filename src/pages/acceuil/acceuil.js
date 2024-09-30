import React from "react";
import { useFetch } from "../../utils/hook";
import { LoaderWrapper, Loader } from "../../utils/loader";

import './acceuil.scss';
import Banner from "../../components/banner/banner"
import Card from "../../components/card/card";
import Error from '../error/error'

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
            <div className="LocationContainer">
                {locationList.map((location) => (
                    <Card key={location.id} id={location.id} title={location.title} cover={location.cover} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default Accueil;