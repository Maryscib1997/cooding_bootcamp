import styles from './Card.module.css';
import Button from '../../Atoms/Button/Button'; 

interface CardProps {
  id: number;
  image: string;
  title: string;
  author: string;
}

const Card: React.FC<CardProps> = ({ id, image, title, author }) => {
  return (
    <div key={id} className={styles.card}>
      <img 
        src={image} 
        alt={`Card ${id}`} 
        className={styles.cardImage} 
      />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardAuthor}>{author}</p>
      {/* Usa il componente Button con href per i link */}
      <Button label="Play" href="/pagessongs" />
    </div>
  );
};

export default Card;
