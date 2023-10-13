import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Section } from 'components/Global/Global.styled';
import { OrderHeader } from 'components/AdminPage/OrderPage/OrderHeader/OrderHeader';
import { OrderForm } from 'components/AdminPage/OrderPage/OrderForm/OrderForm';
import { OrderServices } from 'components/AdminPage/OrderPage/OrderServices/OrderServices';
import { OrderPayments } from 'components/AdminPage/OrderPage/OrderPayments/OrderPayments';
import { Loading } from 'components/Loading/Loading';

import { getOrderByNumber } from 'redux/orders/ordersOperations';
import { getAllEmployees } from 'redux/employees/employeesOperations';
import { getAdministrators } from 'redux/auth/authOperations';

import {
  selectEmployees,
  selectIsLoadingEmployees,
} from 'redux/employees/employeesSelectors';
import {
  selectIsLoadingOrders,
  selectOrderByNumber,
} from 'redux/orders/ordersSelectors';
import { selectAdministrators } from 'redux/auth/authSelectors';
import { OrderCardContainer } from './Order.styled';

const OrderPage = () => {
  const { id: number } = useParams();
  const dispatch = useDispatch();

  const order = useSelector(selectOrderByNumber);
  const employees = useSelector(selectEmployees);
  const admins = useSelector(selectAdministrators);
  const isLoadingOrder = useSelector(selectIsLoadingOrders);
  const isLoadingEmployees = useSelector(selectIsLoadingEmployees);

  useEffect(() => {
    dispatch(getAllEmployees());
    dispatch(getAdministrators());
    dispatch(getOrderByNumber(number));
  }, [dispatch, number]);

  if (isLoadingOrder || isLoadingEmployees) {
    return <Loading />;
  }

  return (
    <Section>
      <OrderCardContainer>
        <OrderHeader order={order} />
        <OrderForm order={order} employees={employees} admins={admins} />
        <OrderServices
          services={order.services}
          orderNumber={order.orderNumber}
        />
        <OrderPayments order={order} />
      </OrderCardContainer>
    </Section>
  );
};

export default OrderPage;
