'use client';

import React, { useEffect, useState } from 'react';
import Card from './Card';
import styles from './Card.module.css';

// Definizione del tipo per le card
interface CardData {
  id: number;
  image: string;
  title: string;
  author: string;
}

interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/api/cards.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CardData[] = await response.json();
        setCards(data);
      } catch (error: any) {
        console.error('Errore nel fetch:', error.message);
        setError(`Impossibile caricare le card: ${error.message}`);
      }
    };

    fetchCards();
  }, []);

  // Limita il numero di card da visualizzare in base alla prop limit
  const displayedCards = limit ? cards.slice(0, limit) : cards;

  return (
    <div className={styles.cardContainer}>
      {error ? (
        <p>{error}</p>
      ) : displayedCards.length > 0 ? (
        displayedCards.map(card => (
          <Card 
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            author={card.author}
          />
        ))
      ) : (
        <p>Nessuna card disponibile.</p>
      )}
    </div>
  );
};

export default CardList;
