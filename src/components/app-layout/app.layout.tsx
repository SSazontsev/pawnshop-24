import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, MetaHead } from "@components";
import { footerData } from '@utils-constants';

export const AppLayout: FC = () => {
  return (
    <>
      <MetaHead
        lang={'ru'}
        title={'Ломбард24'}
        description={{en: '', ru: 'Ломбард24 в Ачинск - быстрые займы под залог золота, техники и других ценностей. Выгодные условия, минимальные проценты, прозрачные условия. Получите деньги за 15 минут!'}}
        keywords={'ломбард Ачинск, займ под залог, сдать золото Ачинск, залог техники, быстрые деньги, кредит под залог, ломбард адрес, выкуп золота, скупка часов Ачинск'}
        name={'Ломбард24'}
        type={'website'}
        googleVerificationCode={''}
      />
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
