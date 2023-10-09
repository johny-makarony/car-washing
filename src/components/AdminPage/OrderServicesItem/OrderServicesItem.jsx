import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import { selectOrderByNumber } from 'redux/orders/ordersSelectors';
import { updateOrderByNumber } from 'redux/orders/ordersOperations';

import {
  ServiceItem,
  ServiceRightSide,
  ServiceText,
  DeleteButton,
  AmountForm,
  AmountInput,
  SubmitButton,
} from './OrderServicesItem.styled';
import { BsFillTrash3Fill } from 'react-icons/bs';

export const OrderServicesItem = props => {
  const { service: currentService } = props;
  const order = useSelector(selectOrderByNumber);

  const dispatch = useDispatch();

  const handleDeleteService = serviceId => {
    const updatedServices = order.services.filter(
      service => service._id !== serviceId
    );
    const data = { services: updatedServices };
    dispatch(updateOrderByNumber({ number: order.orderNumber, data }));
  };

  const formik = useFormik({
    initialValues: {
      amount: currentService.amount || '1',
    },
    onSubmit: values => {
      const filteredServices = order.services.filter(
        service => service._id !== currentService._id
      );
      const data = {
        services: [...filteredServices, { ...currentService, ...values }],
      };
      dispatch(updateOrderByNumber({ number: order.orderNumber, data }));
    },
  });

  const amount = currentService.amount ? currentService.amount : 1;

  return (
    <ServiceItem>
      <ServiceText>{currentService.name}</ServiceText>
      {currentService.pricePerMeter === 'Так' && (
        <AmountForm onSubmit={formik.handleSubmit}>
          <label>
            <AmountInput
              required
              id="amount"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              type="number"
              min="1"
            />{' '}
            м²
          </label>
          <SubmitButton type="submit">Зберегти</SubmitButton>
        </AmountForm>
      )}

      <ServiceRightSide>
        <ServiceText>{`${currentService.price * amount} грн`}</ServiceText>
        <DeleteButton
          type="button"
          onClick={() => handleDeleteService(currentService._id)}
        >
          <BsFillTrash3Fill />
        </DeleteButton>
      </ServiceRightSide>
    </ServiceItem>
  );
};
