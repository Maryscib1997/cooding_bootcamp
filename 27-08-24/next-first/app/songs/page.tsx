'use client';

import React from 'react';
import NavBar from '../components/Molecules/NavBar/NavBar'; 
import Footer from '../components/Molecules/Footer/Footer'; 
import CardList from '../components/Organism/Card/CardList';
import styles from './page.module.css'; 

const Project: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.contentContainer}>
      <h1 className={`${styles.heading} ${styles.h1}`}>I nostri brani</h1> 
      <CardList />
      </div>
      <Footer /> {/* Usa componente Footer */}
    </div>
  );
};

export default Project;
