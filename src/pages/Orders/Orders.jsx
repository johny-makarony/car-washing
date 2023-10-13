import { useState } from 'react';

import {
  Section,
  HeaderContainer,
  MainButton,
} from 'components/Global/Global.styled';
import { ModaAddOrder } from 'components/AdminPage/Modals/ModaAddOrder/ModaAddOrder';
import { OrdersList } from '../../components/AdminPage/OrdersPage/OrdersList/OrdersList';
import { OrdersFilterList } from 'components/AdminPage/OrdersPage/OrdersFilterList/OrdersFilterList';

const OrdersPage = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  return (
    <Section>
      <HeaderContainer>
        <OrdersFilterList />
        <MainButton type="button" onClick={() => setOpenModal(true)}>
          Створити замовлення
        </MainButton>
      </HeaderContainer>

      <OrdersList />
      {isOpenModal && <ModaAddOrder handleExitModal={handleExitModal} />}
    </Section>
  );
};

export default OrdersPage;
