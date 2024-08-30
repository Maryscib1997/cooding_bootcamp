'use client';

import React from 'react';
import styles from '../styles/styles.module.css';

interface CardProps {
  id: number;
  image: string;
  title: string;
  author: string;
}

const Card: React.FC<CardProps> = ({ id, image, title, author }) => {
  return (
    <div key={id} className={styles.card}>
      <img 
        src={image} 
        alt={`Card ${id}`} 
        className={styles.cardImage} 
      />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardAuthor}>{author}</p>
      <button className={styles.playButton}>Play</button>
    </div>
  );
};

export default Card;
