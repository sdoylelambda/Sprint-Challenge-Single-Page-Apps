import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';



const EpisodeList = () => {
    
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
    axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(res => {
        const data =  res.data.results
        console.log("episodes", res.data.results)
        setEpisodes(data)
        })
        .catch(err => console.log(err))
    }, [])

return (
    <section className="grid-view">
        {episodes && episodes.map((episode, id) => <EpisodeCard episode={episode} key={episode.id}/>)
        }
    </section>
    );
};

export default EpisodeList