import { useState, useEffect } from "react";

export function useFetch(url) {
    const [locationList, setLocationList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;

        async function fetchData() {
            try {
                const response = await fetch(url);

                // Vérification de la réponse
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                // Assurez-vous que 'data' contient un tableau dans 'data.data'
                if (data && Array.isArray(data.data)) {
                    setLocationList(data.data);  // Assurez-vous que vous accédez correctement aux données
                } else {
                    throw new Error("Le format des données JSON est incorrect");
                }
            } catch (err) {
                console.error("Erreur lors de la récupération des données:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { locationList, isLoading, error };
}