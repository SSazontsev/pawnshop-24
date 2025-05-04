import { FC } from "react";
import { OurAdvantagesSection } from "@components";
import { TPageProps } from "../types-pages";
import commonStyles from '@ui/common.module.scss';
import { LineSeparationUI } from "@ui";
import styles from './home-page.module.scss';

export const HomePageUI: FC<TPageProps> = ({ classes }) => (
  <div className={`
    ${commonStyles['common__wrapper-container']}
    ${classes ? classes : ''}
    ${styles['home-page']}
  `}>
    <LineSeparationUI positionFlag claases={styles['line-up']}/>
    <OurAdvantagesSection />
  </div>
);
