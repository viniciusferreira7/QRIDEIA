import React from 'react';

import iconeEventos from '../../../../../images/icone-eventos.png';

import './styles.css';

function EventBtn() {
  return (
    <div className="eventBtn">
      <img src={iconeEventos} alt="meus eventos" />
      <p>Meus Eventos</p>
    </div>
  );
}

export default EventBtn;
