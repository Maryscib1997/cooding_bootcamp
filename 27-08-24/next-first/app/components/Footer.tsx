'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../styles/styles.module.css'; 

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
