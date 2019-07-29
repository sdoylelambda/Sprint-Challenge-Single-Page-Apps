import React, { useState } from 'react';
import EpisodeCard from './EpisodeCard';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

const [episodes, setEpisodes] = setState([])

const EpisodeList = () => {
    axios
        .get(`https://rickandmortyapi.com/api/episodes/`)
        .then(res => res.data)
        consoleLog(res.data)
        episodes(res.data)
        .catch(err = console.log(err))


return (
    <section className="episodes">
        {episodes.map((episode, id) => {
            <EpisodeCard episode={episode} key={id}/>
        })}
    </section>
)
}

export default EpisodeList