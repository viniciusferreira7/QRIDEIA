import React, { useContext, useRef, useState } from 'react';
import Modal from 'react-modal';
import { Context } from '../../../../contexts/homeContext';

import './styles.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    width: '100%',
    maxWidth: '400px',
    padding: '4% 2%',
    textAlign: 'center',
    border: '2px solid #f08910',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
  },
};

function ModalWindow() {
  const [modalIsOpen, setIsOpen] = useState(true);

  const context = useContext(Context);

  const handleIsClose = () => {
    setIsOpen(!modalIsOpen);
  };

  const inputName = useRef();
  const inputLastName = useRef();
  const inputPassword = useRef();

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={handleIsClose} style={customStyles}>
      <form>
        <h2>Cadastrar</h2>
        <input ref={inputName} type="text" id="inputText" placeholder="Digite seu nome" required />
        <input ref={inputLastName} type="text" id="inputText2" placeholder="Digite seu sobrenome" required />
        <input ref={inputPassword} type="password" id="inputPassword" placeholder="Digite sua senha" required />
        <input
          id="inputButton"
          type="button"
          value="Cadastrar"
          onClick={() => {
            setIsOpen(
              inputName.current.value == '' || inputLastName.current.value == '' || inputPassword.current.value == ''
                ? modalIsOpen
                : !modalIsOpen,
            ),
              context.dispatch({
                type: ['newUser', inputName.current.value, inputLastName.current.value, inputPassword.current.value],
              });
          }}
        />
      </form>
    </Modal>
  );
}

export default ModalWindow;
