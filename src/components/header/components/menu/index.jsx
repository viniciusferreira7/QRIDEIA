import React from 'react';

import './styles.css';

function Menu() {
  return (
    <nav>
      <ul className="menuDesktop">
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Eventos
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Usuários
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Relatórios
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
