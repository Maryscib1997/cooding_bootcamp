'use client';

import Link from 'next/link';
import styles from '../styles/styles.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
      <img 
        src="/img/sight music_marchiobianco.png"  
        alt="Sight Music Logo"  
        className={styles.navLogo} 
      />
      </Link>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/projects">Il progetto</Link></li>
        <li className={styles.navItem}><Link href="/songs">Brani Musicali</Link></li>
        <li className={styles.navItem}><a href="#contatti">Contatti</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
