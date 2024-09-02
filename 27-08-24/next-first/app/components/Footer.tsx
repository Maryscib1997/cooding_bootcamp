'use client';

import Link from 'next/link';
import styles from '../styles/styles.module.css'; 

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
      <Link href="/">
        <img
          src="/img/sight music_marchiobianco.png"
          alt="Sight Music Logo"
          className={styles.footerLogoImage} />
      </Link>
      </div>
      <nav className={styles.footerNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/projects">Il progetto</Link></li>
          <li className={styles.navItem}><Link href="/songs">Brani Musicali</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contatti</Link></li>
          <li className={styles.navItem}><a href="#terminiecondizioni">Termini e condizioni</a></li>
          <li className={styles.navItem}><a href="#privacypolicy">Privacy Policy</a></li>
        </ul>
      </nav>
      <div className={styles.footerText}>
        <p>©2024 Sight Music | Tutti i diritti sono riservati</p>
      </div>
    </footer>
  );
}

export default Footer;
