import React from 'react';
import { Card } from 'semantic-ui-react';

const EpisodeCard = ({ episode }) => (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>{episode.name}</Card.Header>
          <Card.Meta>{episode.air_date}</Card.Meta>
          <Card.Description>
          {episode.episode}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        {episode.characters.length} episodes
        </Card.Content>
      </Card>
      </Card.Group>
  )
  export default EpisodeCard