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
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>Sinfonia n.5</h1>
          <h2 className={styles.heading}>Ludwig van Beethoven</h2>
          <p className={styles.paragraph}>
            Ludwig van Beethoven è stato un compositore e pianista tedesco, considerato uno dei più grandi geni della musica. La sua <i>Sinfonia n. 5</i> in do minore, op. 67, è uno dei brani più famosi e influenti della musica classica. Composta tra il 1804 e il 1808, questa sinfonia è celebre per il suo tema iniziale, che è stato descritto come uno dei più riconoscibili nella storia della musica. L'opera riflette la determinazione e la forza d'animo di Beethoven, ed è spesso interpretata come una rappresentazione della lotta dell'umanità verso la vittoria e la speranza.
          </p>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.videoContainer}>
            <video className={styles.video} controls>
              <source src="/video/Sinfonia5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
