import { useDispatch } from 'react-redux';
import { updateOrderByNumber } from 'redux/orders/ordersOperations';

import {
  Header,
  Title,
  MarkUrgency,
  Status,
  StatusSelect,
  StatusButton,
} from './OrderHeader.styled';

const statusColor = status => {
  if (status === 'Нове') {
    return 'var(--filter-new-color)';
  } else if (status === 'В роботі') {
    return 'var(--filter-inProcess-color)';
  } else if (status === 'Скасоване') {
    return 'var(--filter-cancelled-color)';
  } else {
    return 'var(--filter-completed-color)';
  }
};

export const OrderHeader = ({ order }) => {
  const dispatch = useDispatch();

  return (
    <Header>
      <Title>{`Замовлення: ${order.orderNumber}`}</Title>
      {order.urgently && <MarkUrgency>Терміново!</MarkUrgency>}

      <Status>
        <StatusButton color={statusColor(order.status)}>
          {order.status}
        </StatusButton>
        <StatusSelect
          onChange={e => {
            dispatch(
              updateOrderByNumber({
                number: order.orderNumber,
                data: { status: e.target.value },
              })
            );
          }}
        >
          <option value=""></option>
          <option value="В роботі"> В роботі </option>
          <option value="Виконане"> Виконане </option>
          <option value="Скасоване"> Скасоване</option>
        </StatusSelect>
      </Status>
    </Header>
  );
};
