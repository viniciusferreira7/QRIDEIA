import Footer from '../../components/footer';
import Header from '../../components/header';
import Main from '../../components/main';
import HomeContext from '../../contexts/homeContext';
import './styles.css';

function Home() {
  return (
    <HomeContext>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </HomeContext>
  );
}

export default Home;
