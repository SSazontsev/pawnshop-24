import { FC } from "react";
import { FooterUIProps } from "./type";
import commonStyles from '../common.module.scss';
import styles from './footer.module.scss';

export const FooterUI: FC<FooterUIProps> = ({
  phoneNumber,
  address,
  at,
  description
}) => (
  <footer className={styles.footer}>
    <div className={`${commonStyles['common__wrapper-container']} ${styles['footer__wrapper-container']}`}>
      <div className={`${styles['footer__contacts']} ${styles['footer__content-container']}`}>
        <h2 className={commonStyles.common__title}>
          Контакты
        </h2>
        <address className={styles['footer__address-container']}>
          <ul className={styles['footer__address-list']}>
            <li>
              {phoneNumber}
            </li>
            <li>
              {address}
            </li>
          </ul>
        </address>
        <ul className={styles['footer__all-info']}>
          <li className={styles['footer__description-info']}>
            {description}
          </li>
          <li>
            {at}
          </li>
        </ul>
      </div>
      <div className={styles['footer__content-container']}>
        {/* <div className={styles['footer__wrapper-map']}></div> */}
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
