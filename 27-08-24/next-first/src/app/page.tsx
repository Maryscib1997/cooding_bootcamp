'use client';

import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
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

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <img 
          src="/img/sight music_marchiobianco.png"  
          alt="Sight Music Logo"  
          className={styles.navLogo} 
        />
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/project">Il progetto</Link></li>
          <li className={styles.navItem}><a href="#branimusicali">Brani Musicali</a></li>
          <li className={styles.navItem}><a href="#contatti">Contatti</a></li>
        </ul>
      </nav>

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
        ) : cards.length > 0 ? (
          cards.map(card => (
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
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <img 
            src="/img/sight music_marchiobianco.png"  
            alt="Sight Music Logo"  
            className={styles.footerLogoImage} 
          />
        </div>
        <nav className={styles.footerNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link href="/project">Il progetto</Link></li>
            <li className={styles.navItem}><a href="#branimusicali">Brani Musicali</a></li>
            <li className={styles.navItem}><a href="#contatti">Contatti</a></li>
            <li className={styles.navItem}><a href="#terminiecondizioni">Termini e condizioni</a></li>
            <li className={styles.navItem}><a href="#privacypolicy">Privacy Policy</a></li>
          </ul>
        </nav>
        <div className={styles.footerText}>
          <p>©2024 Sight Music | Tutti i diritti sono riservati</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
