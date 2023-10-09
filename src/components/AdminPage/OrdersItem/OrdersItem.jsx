import {
  Item,
  OrderHeader,
  OrderLink,
  MarkUrgency,
  StatusButton,
} from './OrdersItem.styled';

import { formatedDate } from 'utils/formatedDate';

export const OrdersItem = ({ order }) => {
  const statusStyles = ({ order }) => {
    if (order.status === 'Нове') {
      return 'status__btn status__btn--new';
    } else if (order.status === 'В роботі') {
      return 'status__btn status__btn--in-process';
    } else if (order.status === 'Скасоване') {
      return 'status__btn status__btn--canceled';
    } else {
      return 'status__btn status__btn--completed';
    }
  };

  return (
    <Item>
      {order.urgently && <MarkUrgency>Терміново!</MarkUrgency>}
      <OrderHeader>
        <OrderLink to={`/admin/order/${order.orderNumber}`}>
          {`Замовлення ${order.orderNumber}`}
        </OrderLink>
        <StatusButton type="button" className={statusStyles({ order })}>
          {`${order.status}`}
        </StatusButton>
      </OrderHeader>
      <hr />
      <p>{`Клієнт: ${order.clientName}`}</p>
      <p>{`Контакти: ${order.clientPhone}`}</p>
      <p>{`Об'єкт замовлення: ${
        order.serviceObject ? order.serviceObject : ''
      }`}</p>

      <p>{`Дата та час послуги: ${formatedDate(order.orderDate)}`}</p>
      {order.orderExecutionDate && (
        <p>{`Дата та час виконання: ${formatedDate(
          order.orderExecutionDate
        )}`}</p>
      )}
      <hr />
      <p>{`Працівник: ${order.washer ? order.washer : ''}`}</p>
      <p>{`Адміністратор: ${
        order.administrator ? order.administrator : ''
      }`}</p>
      <hr />
      <p>{`Вартість замовлення: ${order.discountedCostOrder} грн`}</p>
    </Item>
  );
};
