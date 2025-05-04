import { FC } from "react";
import commonStyles from '../common.module.scss';
import { NumbersCard } from "@components";
import { cardsNumbersData } from '@utils-constants';
import styles from './our-advantages-section.module.scss';
import { LineSeparationUI } from "../line-separation";

export const OurAdvantagesSectionUI: FC = () => (
  <section className={styles['our-advantages-section']}>
    <div className={styles['our-advantages-section__title-container']}>
      <h1 className={`${commonStyles.common__title}`}>
        Наши преимущества
      </h1>
    </div>
    <div className={styles['our-advantages-section__cards-container']}>
      {cardsNumbersData.map((card) => {
        return (
          <NumbersCard title={card.title} number={card.number} list={card.list} />
        );
      })}
    </div>
    <LineSeparationUI positionFlag={false} />
  </section>
);
