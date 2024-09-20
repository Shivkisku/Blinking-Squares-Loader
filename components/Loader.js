import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.form1}>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
      </div>
      <div className={styles.form2}>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
      </div>
    </div>
  );
};

export default Loader;
