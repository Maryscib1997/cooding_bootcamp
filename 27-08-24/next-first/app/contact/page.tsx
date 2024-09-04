'use client';

import React from 'react';
import NavBar from '../components/Molecules/NavBar/NavBar';
import Footer from '../components/Molecules/Footer/Footer';
import styles from './page.module.css';

const ContactPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.contentContainer}>
        <h1 className={`${styles.heading} ${styles.h1}`}>Contatti</h1>
        <div className={styles.contactDetails}>
          <p>Telefono: +39 042 333 6345</p>
          <p>Email: info@singhtmusic</p>
          <p>Indirizzo: Via Roma 13, 00100 Roma RM, Italia</p>
        </div>
        
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Messaggio</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Invia</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
