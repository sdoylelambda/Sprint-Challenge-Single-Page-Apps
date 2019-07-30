import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const description = [].join(' ')

const LocationCard = ({ name, type, dimension, residents }) => (
  <Card>
    <Card.Content header={name} />
    <Card.Content description={type} />
    <Card.Content description={dimension} />
    <Card.Content extra>
      <Icon name='user' />
      {residents} residents
    </Card.Content>
  </Card>
)

export default LocationCard;