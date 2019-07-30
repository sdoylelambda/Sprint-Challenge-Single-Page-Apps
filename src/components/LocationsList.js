import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

const LocationsList = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(res => {
            const data = res.data.results
            console.log("locations", data)
            setLocations(data)
            })
        .catch(err => console.log(err))
    }, [])

    return (
        <section className="grid-view">
             {locations && locations.map(location => <LocationCard key={location.id} name={location.name} type={location.type} 
                dimension={location.dimension} residents={location.residents.length} />)}
        </section>
    )
}

export default LocationsList