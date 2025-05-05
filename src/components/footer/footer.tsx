import { FC } from "react";
import { FooterUI } from "@ui";
import { FooterProps } from "./type";

export const Footer: FC<FooterProps> = ({
  contacts,
  at,
  description,
}) => <FooterUI contacts={contacts} at={at} description={description} />;
