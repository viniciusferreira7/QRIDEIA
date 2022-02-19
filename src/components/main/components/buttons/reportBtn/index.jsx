import React, { useContext } from 'react';
import { Context } from '../../../../../contexts/homeContext';

import iconeRelatorios from '../../../../../images/icone-relatorios.png';

import './styles.css';

function ReportBtn() {
  const context = useContext(Context);

  return (
    <div onClick={() => context.dispatch({ type: ['report', '2'] })} className="reportBtn">
      <img src={iconeRelatorios} alt="relatorios" />
      <p>Relatórios</p>
    </div>
  );
}

export default ReportBtn;
