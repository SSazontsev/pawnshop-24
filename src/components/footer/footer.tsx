import { FC } from "react";
import { FooterUI } from "@ui";
import { FooterProps } from "./type";

export const Footer: FC<FooterProps> = ({
  phoneNumber,
  address,
  at,
  description,
}) => <FooterUI phoneNumber={phoneNumber} address={address} at={at} description={description} />;
