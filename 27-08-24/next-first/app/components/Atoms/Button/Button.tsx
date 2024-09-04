import style from './Button.module.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string; // Aggiungi questa proprietà per i link
}

const Button = (props: ButtonProps) => {
  const { label, onClick, disabled, href } = props;

  if (href) {
    // Se href è fornito, rendi il componente un link
    return (
      <a className={style.main} href={href} onClick={onClick}>
        {label}
      </a>
    );
  }

  // Altrimenti, rendi il componente un pulsante
  return (
    <button className={style.main} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
