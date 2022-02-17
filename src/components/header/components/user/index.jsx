import React from 'react';

import userImage from '../../../../images/user.png';

import './styles.css';

function User() {
  return (
    <div>
      <img src={userImage} alt="user" />
      <h4>Igor</h4>
      <p>Desconectar</p>
    </div>
  );
}

export default User;
