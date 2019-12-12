import React, { useContext } from 'react';
import { Card, } from 'semantic-ui-react';
import { UserContext, } from '../providers/UserProvider';


const User = () => {
  const user = useContext(UserContext);

return (
  <Card>
    <Card.Content>
      <Card.Header>
        { user.username }
      </Card.Header>
      <Card.Header>
        { user.firstName }
      </Card.Header>
      <Card.Header>
        { user.lastName }
      </Card.Header>
      <Card.Meta>
        { user.email }
      </Card.Meta>
      <Card.Meta>
        { user.hobbies }
      </Card.Meta>
    </Card.Content>
  </Card>
  );
};

export default User;

