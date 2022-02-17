import React from 'react';

import iconeEventos from '../../../../../images/icone-eventos.png';
import './styles.css';

function EventBtn() {
  return (
    <article className="eventBtn">
      <img src={iconeEventos} alt="meus eventos" />
      <p>Meus Eventos</p>
    </article>
  );
}

export default EventBtn;
