import { FC } from "react";
import commonStyles from '../common.module.scss';
import styles from './header.module.scss';

export const HeaderUI: FC = () => (
  <header className={styles.header}>
    <div className={`${commonStyles['common__wrapper-container']} ${styles['header__wrapper']}`}>
      <a
        href="#"
        className={`${commonStyles['common__link']} ${commonStyles['common__title']}`}
        aria-label="На главную Ломбард24"
      >
        Ломбард24
      </a>
      <nav
        className={styles['header__nav-container']}
        aria-label="Основная навигация"
      >
        <ul className={styles.header__list}>
          <li>
            <a href="#" className={commonStyles.common__link} aria-label="Связаться с нами">
              контакты
            </a>
          </li>
          <li>
            <a href="#" className={commonStyles.common__link} aria-label="Условия залога">
              залог
            </a>
          </li>
          <li>
            <a href="#" className={commonStyles.common__link} aria-label="Информация о нас">
              о нас
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
