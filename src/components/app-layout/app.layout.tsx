import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@components";

export const AppLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
