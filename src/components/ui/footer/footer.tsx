import { FC } from "react";
import { FooterUIProps } from "./type";
import commonStyles from '../common.module.scss';
import styles from './footer.module.scss';

export const FooterUI: FC<FooterUIProps> = ({
  contacts,
  at,
  description
}) => (
  <footer className={styles.footer}>
    <div className={`${commonStyles['common__wrapper-container']} ${styles['footer__wrapper-container']}`}>
      <div className={`${styles['footer__contacts']} ${styles['footer__content-container']}`}>
        <h2 id='contacts' className={commonStyles.common__title}>
          Контакты
        </h2>
        <address className={styles['footer__address-container']}>
          <ul className={styles['footer__address-list']}>
            {contacts.map((contact) => (
                <li className={styles['footer__item-element']}>
                  {contact}
                </li>
              )
            )}
          </ul>
        </address>
        <ul className={styles['footer__all-info']}>
          <li className={`${styles['footer__description-info']} ${styles['footer__item-element']}`}>
            {description}
          </li>
          <li className={styles['footer__item-element']}>
            {at}
          </li>
        </ul>
      </div>
      <div className={styles['footer__content-container']}>
        <iframe 
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A64b253fcd68f5d21404d81118bace8536773f3b25815065098eade445a496ae4&amp;source=constructor"
          width="100%"
          height="100%"
          className={styles.footer__map}
        ></iframe>
      </div>
    </div>
  </footer>
);
