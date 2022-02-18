import { useState } from 'react';
import Modal from 'react-modal';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Main from '../../components/main';
import HomeContext from '../../contexts/homeContext';
import './styles.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
  },
};

function Home() {
  const [modalIsOpen, setIsOpen] = useState(true);

  const handleModal = (e) => {
    e.PreventDefault();
    setIsOpen(!modalIsOpen);
  };

  console.log(!modalIsOpen);

  return (
    <HomeContext>
      <div className="container">
        <Modal isOpen={handleModal} onRequestClose={handleModal} style={customStyles}>
          <form>
            <div className="input">
              <label htmlFor="inputText">Nome</label>
              <input type="text" id="inputText" placeholder="Digite seu nome" />
            </div>
            <div className="input">
              <label htmlFor="inputPassword">Senha</label>
              <input type="text" id="inputPassword" placeholder="Digite sua senha" />
            </div>
            <button onClick={() => handleModal}>Entrar</button>
          </form>
        </Modal>
        <Header />
        <Main />
        <Footer />
      </div>
    </HomeContext>
  );
}

export default Home;
