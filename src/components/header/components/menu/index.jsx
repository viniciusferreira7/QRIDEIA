import React, { useContext } from 'react';
import { Context } from '../../../../contexts/homeContext';

import './styles.css';

function Menu() {
  const context = useContext(Context);

  return (
    <nav>
      <ul className="menuDesktop">
        <li>
          <a className={context.state.home ? 'active' : ''} href="#" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li>
          <a className={context.state.events ? 'active' : ''} href="#" target="_blank" rel="noopener noreferrer">
            Eventos
          </a>
        </li>
        <li>
          <a className={context.state.users ? 'active' : ''} href="#" target="_blank" rel="noopener noreferrer">
            Usuários
          </a>
        </li>
        <li>
          <a className={context.state.reports ? 'active' : ''} href="#" target="_blank" rel="noopener noreferrer">
            Relatórios
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
