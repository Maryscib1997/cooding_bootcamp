'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../styles/styles.module.css';

const NavBar: React.FC = () => {
  return (
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
  );
};

export default NavBar;
