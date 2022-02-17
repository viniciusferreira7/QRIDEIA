import React from 'react';

import userImage from '../../../../images/user.png';

import './styles.css';

function User() {
  return (
    <div className="userWrapper">
      <img src={userImage} alt="user photo" />
      <div className="userLogin">
        <h4>Igor Gonçalves</h4>
        <p>Desconectar</p>
      </div>
    </div>
  );
}

export default User;
