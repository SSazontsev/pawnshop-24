import { FC } from "react";

import commonStyles from '../common.module.scss';
import styles from './footer.module.scss';

export const FooterUI: FC = () => (
  <footer className={styles.footer}>
    <div className={commonStyles['common__wrapper-container']}>
      Компоненте ContactsUI
    </div>
  </footer>
);
