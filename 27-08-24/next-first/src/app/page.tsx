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
                  {/* Navbar */}
                  <nav className={styles.navbar}>
                    <img 
                      src="/img/sight music_marchiobianco.png"  
                      alt="Sight Music Logo"  
                      className={styles.navLogo} 
                    />
                    <ul className={styles.navList}>
                      <li className={styles.navItem}><a href="#ilprogetto">Il progetto</a></li>
                      <li className={styles.navItem}><a href="#branimusicali">Brani Musicali</a></li>
                      <li className={styles.navItem}><a href="#contatti">Contatti</a></li>
                    </ul>
                  </nav>
            
                  {/* Contenuto principale */}
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
            
                  {/* Footer */}
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
                        <li className={styles.navItem}><a href="#ilprogetto">Il progetto</a></li>
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
                </div>
              );
            };
            
            export default Home;
            