import React from "react";
import styles from "../../styles/footer.module.css"; // Імпортуємо модуль стилів

const Footer = () => {
  return (
          <footer className={styles.footer}>
            <div className={styles.container}>
              <p className={styles.text}>
                &copy; {new Date().getFullYear()} Ваш сайт. Усі права захищені.
              </p>
              <div className={styles.social}>
                <a href="#" className={styles.socialLink}>Facebook</a>
                <a href="#" className={styles.socialLink}>Twitter</a>
                <a href="#" className={styles.socialLink}>Instagram</a>
              </div>
            </div>
          </footer>
  );
};

export default Footer;
