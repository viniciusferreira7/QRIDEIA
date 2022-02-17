import React from 'react';
import EventBtn from '../buttons/eventBtn';
import ReportBtn from '../buttons/reportBtn';
import UserBtn from '../buttons/userBtn';

import './styles.css';

function Interface() {
  return (
    <article>
      <p>
        Olá <strong>Igor Gonçalves</strong>, selecione uma das opções abaixo:
      </p>
      <section className="buttons">
        <EventBtn />
        <UserBtn />
        <ReportBtn />
      </section>
    </article>
  );
}

export default Interface;
