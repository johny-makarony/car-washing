import { useState } from 'react';

import {
  PaymentsContainer,
  PartHeader,
  PartTitle,
  AddDiscountButton,
  PaymentsList,
  Payment,
  Text,
} from './OrderPayments.styled';
import { ModalAddDiscount } from '../../Modals/ModalAddDiscount/ModalAddDiscount';

export const OrderPayments = ({ order }) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleExitModal = () => {
    setOpenModal(false);
  };
  return (
    <PaymentsContainer>
      <PartHeader>
        <PartTitle>Розрахунок:</PartTitle>
        <AddDiscountButton onClick={() => setOpenModal(true)}>
          Додати знижку
        </AddDiscountButton>
      </PartHeader>
      <PaymentsList>
        <Payment>
          <Text>Загальна вартість:</Text>
          <Text>{`${order.totalCostOrder} грн`}</Text>
        </Payment>
        <Payment>
          <Text>Знижка:</Text>
          <Text>{`${order.discountPercent}%`}</Text>
        </Payment>
        <Payment>
          <Text>Вартість зі знижкою:</Text>
          <Text>{`${order.discountedCostOrder} грн`}</Text>
        </Payment>
        <Payment>
          <Text>Виплата працівнику:</Text>
          <Text>{`${order.washerPayment} грн`}</Text>
        </Payment>
        <Payment>
          <Text>Виплата адміністратору:</Text>
          <Text>{`${order.administratorPayment} грн`}</Text>
        </Payment>
        <Payment>
          <Text>Дохід:</Text>
          <Text>{`${order.revenue} грн`}</Text>
        </Payment>
      </PaymentsList>

      {isOpenModal && <ModalAddDiscount handleExitModal={handleExitModal} />}
    </PaymentsContainer>
  );
};
