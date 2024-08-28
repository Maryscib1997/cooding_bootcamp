<<<<<<< HEAD
import classNames from "classnames";
import styles from "./ThumbNail.module.css";

function ThumbNail({ isSelected = false, thumbNail = "" }) {
  return (
    <div
      className={classNames(styles.thumbNail, isSelected && styles.selected)}
    >
      <img src={thumbNail} />
      <div className={classNames(isSelected && styles.over)}></div>
    </div>
  );
}

=======
import classNames from "classnames";
import styles from "./ThumbNail.module.css";

function ThumbNail({ isSelected = false, thumbNail = "" }) {
  return (
    <div
      className={classNames(styles.thumbNail, isSelected && styles.selected)}
    >
      <img src={thumbNail} />
      <div className={classNames(isSelected && styles.over)}></div>
    </div>
  );
}

>>>>>>> f5516dda867c56536613e003d050e9e758f98dfc
export default ThumbNail;