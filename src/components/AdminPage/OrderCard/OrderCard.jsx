import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';

import { Select, MenuItem } from '@mui/material';

import { OrderServicesItem } from '../OrderServicesItem/OrderServicesItem';
import { ModaAddServiceToOrder } from '../Modals/ModaAddServiceToOrder/ModaAddServiceToOrder';
import { ModalUpdateOrderStatus } from '../Modals/ModalUpdateOrderStatus/ModalUpdateOrderStatus';
import { ModalAddDiscount } from '../Modals/ModalAddDiscount/ModalAddDiscount';

import {
  getOrderByNumber,
  updateOrderByNumber,
} from 'redux/orders/ordersOperations';
import { getAllEmployees } from 'redux/employees/employeesOperations';
import {
  selectEmployees,
  selectIsLoadingEmployees,
} from 'redux/employees/employeesSelectors';
import {
  selectIsLoadingOrders,
  selectOrderByNumber,
} from 'redux/orders/ordersSelectors';

export const OrderCard = () => {
  const [isEdit, setEdit] = useState(false);
  const [isOpenModalServices, setOpenModalServices] = useState(false);
  const [isOpenModalStatus, setOpenModalStatus] = useState(false);
  const [isOpenModalDiscount, setOpenModalDiscount] = useState(false);

  const order = useSelector(selectOrderByNumber);
  const employees = useSelector(selectEmployees);
  const isLoadingOrder = useSelector(selectIsLoadingOrders);
  const isLoadingEmployees = useSelector(selectIsLoadingEmployees);

  const { id: number } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees());
    dispatch(getOrderByNumber(number));
  }, [dispatch, number]);

  const handleExitModal = () => {
    setOpenModalServices(false);
    setOpenModalStatus(false);
    setOpenModalDiscount(false);
  };

  const statusStyles = () => {
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

  const formik = useFormik({
    initialValues: {
      washer: '',
    },
    onSubmit: values => {
      const data = { ...values };
      dispatch(updateOrderByNumber({ number, data }));
      setEdit(false);
    },
  });

  if (isLoadingOrder || isLoadingEmployees) {
    return <div>Loading...</div>;
  }

  return (
    <div className="order">
      <div className="info__container">
        <div className="status__container">
          <h2>{`Замовлення: ${order.orderNumber}`}</h2>

          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '8px',
            }}
          >
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '8px',
              }}
            >
              Працівник: {!isEdit && order.washer}
              {isEdit && (
                <Select
                  required
                  id="washer"
                  name="washer"
                  value={formik.values.washer}
                  onChange={formik.handleChange}
                  disabled={!isEdit}
                  variant="standard"
                >
                  {employees &&
                    employees.map(employee => (
                      <MenuItem value={employee.name} key={employee._id}>
                        {employee.name}
                      </MenuItem>
                    ))}
                </Select>
              )}
            </label>
            <button type="button" onClick={() => setEdit(!isEdit)}>
              {isEdit ? 'Скасувати' : 'Змінити'}
            </button>
            <button type="submit" disabled={!isEdit}>
              Зберегти
            </button>
          </form>

          <button
            type="button"
            onClick={() => setOpenModalStatus(true)}
            className={statusStyles(order.status)}
          >
            {order.status}
          </button>
          {isOpenModalStatus && (
            <ModalUpdateOrderStatus
              handleExitModal={handleExitModal}
              orderNumber={order.orderNumber}
            />
          )}
        </div>

        {order.urgently && <b>Терміново!</b>}
        {order.clientComment && (
          <p>{`Коментар клієнта: ${order.clientComment}`}</p>
        )}
        <p>{`Клієнт: ${order.clientName}`}</p>
        <p>{`Контакти: ${order.clientPhone}`}</p>
        <p>{`Об'єкт замовлення: ${order.serviceObject}`}</p>
        <p>{`Дата та час послуги: ${order.orderDate}`}</p>
        {order.orderExecutionDate && (
          <p>{`Дата та час виконання: ${order.orderExecutionDate}`}</p>
        )}
      </div>

      <div className="order__block">
        <h3 className="order__title">Послуги:</h3>
        <ul className="list order__list">
          {order.services &&
            order.services.map(service => (
              <OrderServicesItem key={service._id} service={service} />
            ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpenModalServices(true)}
          className={'order__btn--add'}
        >
          Додати послугу
        </button>
        {isOpenModalServices && (
          <ModaAddServiceToOrder handleExitModal={handleExitModal} />
        )}
      </div>

      <div className="order__block">
        <h3 className="order__title">Розрахунок:</h3>
        <ul className="list order__list">
          <li className="order__list-item">
            <p className="order__calculation">Загальна вартість:</p>
            <p>{`${order.totalCostOrder} грн`}</p>
          </li>
          <li className="order__list-item">
            <p className="order__calculation">Вартість зі знижкою:</p>
            <p>{`${order.discountedCostOrder} грн`}</p>
          </li>
          <li className="order__list-item">
            <p className="order__calculation">Виплата працівнику:</p>
            <p>{`${order.washerPayment} грн`}</p>
          </li>
          <li className="order__list-item">
            <p className="order__calculation">Виплата адміністратору:</p>
            <p>{`${order.administratorPayment} грн`}</p>
          </li>
          <li className="order__list-item">
            <p className="order__calculation">Залишок:</p>
            <p>{`${order.revenue} грн`}</p>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setOpenModalDiscount(true)}
          className="order__btn--add"
        >
          Додати знижку
        </button>
        {isOpenModalDiscount && (
          <ModalAddDiscount handleExitModal={handleExitModal} />
        )}
      </div>
    </div>
  );
};
