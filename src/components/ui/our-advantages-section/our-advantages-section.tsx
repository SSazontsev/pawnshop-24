import { FC } from "react";
import commonStyles from '../common.module.scss';
import { NumbersCard } from "@components";
import { cardsNumbersData } from '@utils-constants';
import styles from './our-advantages-section.module.scss';
import { LineSeparationUI } from "../line-separation";

export const OurAdvantagesSectionUI: FC = () => (
  <section className={styles['our-advantages-section']}>
    <div className={`${commonStyles['common__wrapper-container']} ${styles['our-advantages-section__wrapper-container']}`}>
      <LineSeparationUI positionFlag claases={styles['line-up']}/>
      <div className={styles['our-advantages-section__title-container']}>
        <h1 id='about-me' className={`${commonStyles.common__title}`}>
          Наши преимущества
        </h1>
      </div>
      <div className={styles['our-advantages-section__cards-container']}>
        {cardsNumbersData.map((card) => {
          return (
            <NumbersCard title={card.title} number={card.number} info={card.info} />
          );
        })}
      </div>
      <LineSeparationUI positionFlag={false} />
    </div>
  </section>
);
