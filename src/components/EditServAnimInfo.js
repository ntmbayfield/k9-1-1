import React from 'react'
import { List } from 'semantic-ui-react'

const EditServAnimInfo = ({servAnimInfo}) => (
  <List as='ul' className="editServAnimInfo">
    <List.Item as='li'>
      Add A New Service Animal
    </List.Item>
    <List.Item as='li'>
      Remove A Service Animal
    </List.Item>
  </List>
)

export default EditServAnimInfo;
