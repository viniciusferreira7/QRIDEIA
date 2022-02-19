import React from 'react';
import ModalWindow from './components/modal';
import Painel from './components/painel';

import './styles.css';

function Main() {
  return (
    <main>
      <section className="background-orange"></section>
      <section className="background-gray"></section>
      <Painel />
      <ModalWindow />
    </main>
  );
}

export default Main;
