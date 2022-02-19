import React, { useContext } from 'react';

import { Context } from '../../../../contexts/homeContext';
import EventBtn from '../buttons/eventBtn';
import ReportBtn from '../buttons/reportBtn';
import UserBtn from '../buttons/userBtn';

import './styles.css';

function Interface() {
  const context = useContext(Context);

  return (
    <article>
      {context.state.name == '' || context.state.lastName == '' ? (
        <h4>Sem usuário cadastrado</h4>
      ) : (
        <p>
          Olá{' '}
          <strong>
            {context.state.name} {context.state.lastName}
          </strong>
          , selecione uma das opções abaixo:
        </p>
      )}
      <section className="buttons">
        <EventBtn />
        <UserBtn />
        <ReportBtn />
      </section>
    </article>
  );
}

export default Interface;
