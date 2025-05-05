import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@components";
import { footerData } from '@utils-constants';

export const AppLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer 
        contacts={footerData.contacts}
        at={footerData.at}
        description={footerData.description}
      />
    </>
  );
}
