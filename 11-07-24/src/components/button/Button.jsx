<<<<<<< HEAD
import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ children, text = "Add to cart" }) {
  return (
    <button className={classNames(styles.button)}>
      {children}
      {text}
    </button>
  );
}

export default Button;
=======
import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ children, text = "Add to cart" }) {
  return (
    <button className={classNames(styles.button)}>
      {children}
      {text}
    </button>
  );
}

export default Button;
>>>>>>> f5516dda867c56536613e003d050e9e758f98dfc
