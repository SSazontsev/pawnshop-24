import { FC } from "react";
import { TNumberCardsProps } from './type';
import { NumbersCardsUI } from "@ui";

export const NumbersCard: FC<TNumberCardsProps> = ({
  title,
  number,
  list,
}) => <NumbersCardsUI 
  title={title} 
  number={number} 
  list={list} 
/>;
