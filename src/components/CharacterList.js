import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';

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
  }, [])

  return (
  
    <section className='character-list grid-view'>

      {Array.from(characters).map((character) => {
       <CharacterCard character ={character} key={character.id} />
      })}
    </section>
    );
};

