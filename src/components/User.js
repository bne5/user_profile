import React from 'react';
import { Card, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';


const User = () => (
  <UserConsumer>
    { upValue => (
      <Card>
      <Card.Content>
        <Card.Header>
          { upValue.username }
        </Card.Header>
        <Card.Header>
          { upValue.firstName }
        </Card.Header>
        <Card.Header>
          { upValue.lastName }
        </Card.Header>
        <Card.Meta>
          { upValue.email }
        </Card.Meta>
        <Card.Meta>
          { upValue.hobbies }
        </Card.Meta>
      </Card.Content>
    </Card>
    )}
  </UserConsumer>
)

export default User;

