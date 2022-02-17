import React from 'react';
import Logo from './components/logo';
import Menu from './components/menu';
import User from './components/user';

import './styles.css';

function Header() {
  return (
    <header>
      <Logo />
      <Menu />
      <User />
    </header>
  );
}

export default Header;
