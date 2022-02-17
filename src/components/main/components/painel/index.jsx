import React from 'react';
import EventBtn from '../buttons/eventBtn';

import './styles.css';

function Interface() {
  return (
    <article>
      <p>
        Olá <strong>Igor Gonçalves</strong>, selecione uma das opções abaixo:
      </p>
      <section className="buttons">
        <EventBtn />
      </section>
    </article>
  );
}

export default Interface;
