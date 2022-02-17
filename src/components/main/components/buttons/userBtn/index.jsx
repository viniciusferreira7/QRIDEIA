import React from 'react';

import iconeUsuarios from '../../../../../images/icone-usuarios.png';

import './styles.css';

function UserBtn() {
  return (
    <div className="userBtn">
      <img src={iconeUsuarios} alt="usuarios" />
      <p>Usuários</p>
    </div>
  );
}

export default UserBtn;
