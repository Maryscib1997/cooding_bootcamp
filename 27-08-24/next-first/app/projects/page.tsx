'use client';

import React from 'react';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer'; 
import styles from '../styles/styles.module.css'; 

const Project: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h1 className={styles.heading}>Il Progetto</h1> 
      <Footer /> {/* Usa componente Footer */}
    </div>
  );
};

export default Project;
