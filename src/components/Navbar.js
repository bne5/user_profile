import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { NavLink, } from 'react-router-dom';
import { UserConsumer, } from '../providers/UserProvider';
//example wo context hook

const Navbar = () => (
  <UserConsumer>
    { upValue => (
    <Menu>
      <NavLink to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </NavLink>
      <NavLink to='/user/profile'>
        <Menu.Item>
          { upValue.username }
        </Menu.Item>
      </NavLink>
    </Menu>
  )}
  </UserConsumer>
)

export default Navbar;