import React, { useContext } from 'react';
import { Context } from '../../../../contexts/homeContext';

import userImage from '../../../../images/user.png';

import './styles.css';

function User() {
  const context = useContext(Context);

  const {
    state: { name, lastName },
  } = context;

  return (
    <div className="userWrapper">
      {context.state.name == '' || context.state.lastName == '' ? (
        <h4></h4>
      ) : (
        <>
          <img src={userImage} alt="user photo" />

          <div className="userLogin">
            <h4>
              {name} {lastName}
            </h4>
            <p onClick={() => context.dispatch({ type: ['des', 4] })}>Desconectar</p>
          </div>
        </>
      )}
    </div>
  );
}

export default User;
