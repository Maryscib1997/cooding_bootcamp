'use client';

import styles from './styles/styles.module.css'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardList from './components/CardList';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <NavBar />

      {/* Contenuto principale */}
      <img 
        src="/img/imghome.jpg"  
        alt="Sight Music home"  
        className={styles.logo} 
      />
      <p className={styles.imageText}>Ascolta e osserva la musica</p>

      {/* CardList con limite di 6 card */}
      <CardList limit={6} />

      {/* Footer */}
      <Footer />  {/* Usa il componente Footer */}
    </div>
  );
};

export default Home;
