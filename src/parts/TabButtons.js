import React from "react";
import styles from "root/app.css";

const TabButtons = (props) => {

  const {
    tab,
    clickTabAction,
  } = props;

  return (
    <nav className={styles.tabButtonBox}>
      <button
        onClick={() => clickTabAction(0)}
        disabled={tab === 0}
        className={styles.tabButton}
      >GET
      </button>
      <button
        onClick={() => clickTabAction(1)}
        disabled={tab === 1}
        className={styles.tabButton}
      >POST
      </button>
      <button
        onClick={() => clickTabAction(2)}
        disabled={tab === 3}
        className={styles.tabButton}
      >DELETE
      </button>
    </nav>
  );
};

export default TabButtons;