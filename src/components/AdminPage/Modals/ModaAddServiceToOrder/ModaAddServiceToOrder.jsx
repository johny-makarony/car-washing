import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { Backdrop, Modal, Form, Title, CloseButton } from '../Modal.styles';
import { Select, MenuItem } from '@mui/material';

import { getAllServices } from 'redux/services/servicesOperations';
import { selectGetAllServices } from 'redux/services/servicesSelectors';
import { selectOrderByNumber } from 'redux/orders/ordersSelectors';

import { updateOrderByNumber } from 'redux/orders/ordersOperations';

export const ModaAddServiceToOrder = props => {
  const services = useSelector(selectGetAllServices);
  const order = useSelector(selectOrderByNumber);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const handleAddService = ({ service }) => {
    const updatedServices = [...order.services, service];
    const data = { services: updatedServices };
    dispatch(updateOrderByNumber({ number: order.orderNumber, data }));
  };

  const handleExitModal = () => {
    props.handleExitModal(true);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleExitModal(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      service: '',
    },
    onSubmit: values => {
      handleAddService(values);
      handleExitModal();
    },
  });

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <CloseButton type="button" onClick={handleExitModal}>
          Закрити
        </CloseButton>
        <Form onSubmit={formik.handleSubmit}>
          <Title>Оберіть послугу</Title>
          <Select
            required
            id="service"
            name="service"
            value={formik.values.service}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          >
            {services.map(service => (
              <MenuItem value={service} key={service._id}>
                {`${service.category}. ${service.name}. ${service.price}грн`}
              </MenuItem>
            ))}
          </Select>
          <button type="submit" className="btn">
            Додати
          </button>
        </Form>
      </Modal>
    </Backdrop>
  );
};
