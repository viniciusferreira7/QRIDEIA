import React from 'react';

import iconeRelatorios from '../../../../../images/icone-relatorios.png';

import './styles.css';

function ReportBtn() {
  return (
    <div className="reportBtn">
      <img src={iconeRelatorios} alt="relatorios" />
      <p>Relatórios</p>
    </div>
  );
}

export default ReportBtn;
