import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectOrders } from 'redux/orders/ordersSelectors';
import { getAllOrders } from 'redux/orders/ordersOperations';

import { List } from './OrdersList.styled';
import { OrdersItem } from '../OrdersItem/OrdersItem';

export const OrdersList = () => {
  const orders = useSelector(selectOrders);

  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get('status') || '';
  const page = queryParams.get('page') || 1;

  useEffect(() => {
    dispatch(getAllOrders({ status, page }));
  }, [dispatch, status, page]);

  return (
    <List>
      {orders.map(order => (
        <OrdersItem key={order._id} order={order} />
      ))}
    </List>
  );
};
