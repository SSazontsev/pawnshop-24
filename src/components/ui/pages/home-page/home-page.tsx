import { FC } from "react";
import { OurAdvantagesSection, SecuredLoans, Footer } from "@components";
import { TPageProps } from "../types-pages";
import commonStyles from '@ui/common.module.scss';
import styles from './home-page.module.scss';

export const HomePageUI: FC<TPageProps> = ({ classes }) => (
  <div className={`
    ${commonStyles['common__wrapper-content']}
    ${classes ? classes : ''}
    ${styles['home-page']}
  `}>
    <OurAdvantagesSection />
    <SecuredLoans />
  </div>
);
