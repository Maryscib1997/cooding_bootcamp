'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/styles.module.css'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';  
import Link from 'next/link';

// Definizione del tipo per le card
interface Card {
  id: number;
  image: string;
  title: string;
  author: string;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/api/cards.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Card[] = await response.json();
        console.log('Data ricevuti:', data);
        setCards(data);
      } catch (error: any) {
        console.error('Errore nel fetch:', error.message);
        setError(`Impossibile caricare le card: ${error.message}`);
      }
    };

    fetchCards();
  }, []);

  // Limita il numero di card da visualizzare a 6
  const displayedCards = cards.slice(0, 6);

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
      <div className={styles.cardContainer}>
        {error ? (
          <p>{error}</p>
        ) : displayedCards.length > 0 ? (
          displayedCards.map(card => (
            <div key={card.id} className={styles.card}>
              <img 
                src={card.image} 
                alt={`Card ${card.id}`} 
                className={styles.cardImage} 
              />
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardAuthor}>{card.author}</p>
              <button className={styles.playButton}>Play</button>
            </div>
          ))
        ) : (
          <p>Nessuna card disponibile.</p>
        )}
      </div>

      {/* Footer */}
      <Footer />  {/* Usa componente Footer */}
    </div>
  );
};

export default Home;
