import React from 'react';
import Painel from './components/painel';

import './styles.css';

function Main() {
  return (
    <main>
      <section className="background-orange"></section>
      <section className="background-gray"></section>
      <Painel />
    </main>
  );
}

export default Main;
