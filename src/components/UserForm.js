import React from 'react';
import { Form, Dropdown, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

class UserForm extends React.Component {
  state = {
    username: this.props.username, 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    email: this.props.email, 
    hobbies: this.props.hobbies, 
  };

  handleChange = (e, { name, value }) => this.setState({
    [name]: value,
  });

  handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...this.state, };
    this.props.updateUser(user);
  }

  render() {
    const {
      username, 
      firstName, 
      lastName, 
      email, 
      hobbies,
    } = this.state;

    return (
      <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Input
          label="New First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="New Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="New Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Dropdown placeholder='Hobbies' fluid multiple selection
          label="New Hobby"
          type="text"
          name="hobbies"
          value={hobbies}
          onChange={this.handleChange}
          options={hobbyOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
        </>
    )
  }
}

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { upValue => (
        <UserForm 
          { ...props }
          username={upValue.username}
          firstName={upValue.firstName}
          lastName={upValue.lastName}
          email={upValue.email}
          hobbies={upValue.hobbies}
          updateUser={upValue.updateUser}
        />
      )}
    </UserConsumer>
  )
}


const hobbyOptions =[
  { key: "a", text: "Basketball", value: "basketball", },
  { key: "b", text: "Baseball", value: "baseball", },
  { key: "c", text: "Video Games", value: "video games", },
  { key: "d", text: "Snowboard", value: "snowboard", },
  { key: "e", text: "Knitting", value: "knitting", },
  { key: "f", text: "Reading", value: "reading", },
]

export default ConnectedUserForm;

