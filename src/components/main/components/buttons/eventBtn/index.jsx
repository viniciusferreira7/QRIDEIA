import React, { useContext } from 'react';
import { Context } from '../../../../../contexts/homeContext';

import iconeEventos from '../../../../../images/icone-eventos.png';

import './styles.css';

function EventBtn() {
  const context = useContext(Context);

  return (
    <div onClick={() => context.dispatch({ type: ['event', '1'] })} className="eventBtn">
      <img src={iconeEventos} alt="meus eventos" />
      <p>Meus Eventos</p>
    </div>
  );
}

export default EventBtn;
