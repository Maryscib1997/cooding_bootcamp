import styles from './Home.module.css';

const Home = () => {
  // Dati per le card
  const cards = [
    { id: 1, image: '/img/card/sinfonia.jpg', title: 'Sinfonia n. 5', author: 'Ludwig van Beethoven' },
    { id: 2, image: '/img/card/sinfonia.jpg', title: 'Sinfonia n. 5', author: 'Ludwig van Beethoven' },
    { id: 3, image: '/img/card/sinfonia.jpg', title: 'Sinfonia n. 5', author: 'Ludwig van Beethoven' },
    { id: 4, image: '/img/card/sinfonia.jpg', title: 'Sinfonia n. 5', author: 'Ludwig van Beethoven' },
    { id: 5, image: '/img/card/sinfonia.jpg', title: 'Sinfonia n. 5', author: 'Ludwig van Beethoven' },
    { id: 6, image: '/img/card/sinfonia.jpg', title: 'Sinfonia n. 5', author: 'Ludwig van Beethoven' },   
  ];

  return (
    <div className={styles.container}>
      <img 
        src="/img/sight music_marchio.png"  
        alt="Sight Music Logo"  
        className={styles.logo} 
      />
      <p>Ascolta e osserva la musica</p>
      <div className={styles.cardContainer}>
        {cards.map(card => (
          <div key={card.id} className={styles.card}>
            <img 
              src={card.image} 
              alt={`Card ${card.id}`} 
              className={styles.cardImage} 
            />
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardAuthor}>{card.author}</p>
            <button className={styles.playButton}>Play</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
