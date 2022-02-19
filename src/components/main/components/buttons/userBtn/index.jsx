import React, { useContext } from 'react';
import { Context } from '../../../../../contexts/homeContext';

import iconeUsuarios from '../../../../../images/icone-usuarios.png';

import './styles.css';

function UserBtn() {
  const context = useContext(Context);

  return (
    <div onClick={() => context.dispatch({ type: ['user', '3'] })} className="userBtn">
      <img src={iconeUsuarios} alt="usuarios" />
      <p>Usuários</p>
    </div>
  );
}

export default UserBtn;
