import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

// export default function CharacterCard ({ character }) {
//   return (<span>todo: location{character.name}</span>)
// }

const CharacterCard = ({character}) => (
  <Card>
    <Image src={character.image} wrapped ui={false} alt="test" />
    <Card.Content>
      <Card.Header>{character.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{character.status}</span>
      </Card.Meta>
      <Card.Description>
      {character.location.name}
      </Card.Description>
      <Card.Description>
      {character.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='video' />
        {character.episode.length}
      </a>
    </Card.Content>
  </Card>
)

export default CharacterCard