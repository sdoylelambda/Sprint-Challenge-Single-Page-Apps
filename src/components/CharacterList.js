import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
  axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      const data = res.data.results
      console.log(data)
      setCharacters(data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <section className='character-list grid-view'>
     {characters.map((character) => (
     <CharacterCard key={character.id} character={character}/>))
      }
    </section>
    );
};

