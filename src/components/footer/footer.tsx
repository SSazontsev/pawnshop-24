import { FC } from "react";
import { FooterUI } from "@ui";
import { FooterProps } from "./type";

export const Footer: FC<FooterProps> = ({
  phoneNumber,
  email,
  address,
  at,
  description,
}) => <FooterUI phoneNumber={phoneNumber} email={email} address={address} at={at} description={description} />;
