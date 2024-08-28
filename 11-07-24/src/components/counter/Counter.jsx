<<<<<<< HEAD
import styles from "./Counter.module.css";

import classNames from "classnames";
import IconMinus from "../icons/IconMinus";
import IconPlus from "../icons/IconPlus";

function Counter() {
  return (
    <div className={classNames(styles.counter)}>
      <button>
        <IconMinus />
      </button>
      <div>0</div>
      <button>
        <IconPlus />
      </button>
    </div>
  );
}

=======
import styles from "./Counter.module.css";

import classNames from "classnames";
import IconMinus from "../icons/IconMinus";
import IconPlus from "../icons/IconPlus";

function Counter() {
  return (
    <div className={classNames(styles.counter)}>
      <button>
        <IconMinus />
      </button>
      <div>0</div>
      <button>
        <IconPlus />
      </button>
    </div>
  );
}

>>>>>>> f5516dda867c56536613e003d050e9e758f98dfc
export default Counter;