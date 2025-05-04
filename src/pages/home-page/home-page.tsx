import { FC } from "react";
import commonStyles from '../common.module.scss';
import styles from './home-page.module.scss';

export const HomePage: FC = () => {
  return (
    <h1 className={`${commonStyles['common-page']} ${styles['home-page__title']}`}>Привет мир!</h1>
  );
}