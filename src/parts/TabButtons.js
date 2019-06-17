import React from "react";
import styles from "root/app.css";

// 関数を作成します
// propsは先ほど入れた引数ですobject形式で渡されます style部分はcss modulesを使用
const TabButtons = (props) => {

  // 同じ名前であれば このように変数宣言できます
  const {
    tab,
    clickTabAction,
  } = props;

  return (
    <nav className={styles.tabButtonBox}>
      {/* onClick={} これはjavascriptの .onclick() です */}
      {/* disabled HTMLの属性 disabled を付与するかしないか */}
      {/* className クラス名を付けます */}
      {/* styles.tabButton は css modulesを使うときの指定方法 */}
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
        disabled={tab === 2}
        className={styles.tabButton}
      >DELETE
      </button>
    </nav>
  );
};

export default TabButtons;