import {
  Item,
  OrderHeader,
  MarkUrgency,
  OrderLink,
  StatusButton,
  PartContainer,
  Text,
  // Table,
  // TableHead,
  // TableRow,
  // TableHeader,
  // TableData,
  LeftSide,
} from './OrdersItem.styled';

import { formatedDate } from 'utils/formatedDate';

export const OrdersItem = ({ order }) => {
  const statusColor = ({ order }) => {
    if (order.status === 'Нове') {
      return 'var(--filter-new-color)';
    } else if (order.status === 'В роботі') {
      return 'var(--filter-inProcess-color)';
    } else if (order.status === 'Скасоване') {
      return 'var(--filter-cancelled-color)';
    } else {
      return 'var(--filter-completed-color)';
    }
  };

  return (
    <Item>
      <OrderHeader>
        <OrderLink to={`/admin/order/${order.orderNumber}`}>
          {`Замовлення ${order.orderNumber}`}
        </OrderLink>
        {order.urgently && <MarkUrgency>Терміново!</MarkUrgency>}
        <StatusButton type="button" color={statusColor({ order })}>
          {`${order.status}`}
        </StatusButton>
      </OrderHeader>

      <hr />

      <PartContainer>
        <LeftSide>
          <Text>{`Клієнт: ${order.clientName}`}</Text>
          <Text>{`Контакти: ${order.clientPhone}`}</Text>
          <Text>{`Об'єкт замовлення: ${
            order.serviceObject ? order.serviceObject : ''
          }`}</Text>
          <Text>{`Дата та час послуги: ${formatedDate(order.orderDate)}`}</Text>
          {order.orderExecutionDate && (
            <Text>{`Дата та час виконання: ${formatedDate(
              order.orderExecutionDate
            )}`}</Text>
          )}
        </LeftSide>

        {/* {order.services.length > 0 && (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Назва</TableHeader>
                <TableHeader>Кількість</TableHeader>
                <TableHeader>Вартість</TableHeader>
                <TableHeader>Сума</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {order.services.map(service => (
                <TableRow key={service._id}>
                  <TableData>{service.name}</TableData>
                  <TableData>{service.amount ? service.amount : 1}</TableData>
                  <TableData>{service.price}</TableData>
                  <TableData>{service.price * (service.amount || 1)}</TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        )} */}
      </PartContainer>

      <hr />

      <Text>{`Працівник: ${order.washer ? order.washer : ''}`}</Text>

      <hr />

      <Text>{`Вартість замовлення: ${order.discountedCostOrder} грн`}</Text>
    </Item>
  );
};
