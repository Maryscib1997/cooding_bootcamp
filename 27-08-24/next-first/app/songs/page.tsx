'use client';

import React from 'react';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer'; 
import CardList from '../components/CardList';
import styles from '../styles/styles.module.css';
 

const Project: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h1 className={styles.heading}>I nostri brani</h1> 
      <CardList />
      <Footer /> {/* Usa componente Footer */}
    </div>
  );
};

export default Project;
