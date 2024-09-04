'use client';

import React from 'react';
import NavBar from '../components/Molecules/NavBar/NavBar';
import Footer from '../components/Molecules/Footer/Footer';
import styles from './page.module.css';

const Project: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.contentContainer}>
      <h1 className={styles.heading}>Sinfonia n.5</h1> 
      <h2 className={styles.heading}>Ludwig van Beethoven</h2> 
      </div>
      <Footer /> {/* Usa componente Footer */}
    </div>
  );
};

export default Project;