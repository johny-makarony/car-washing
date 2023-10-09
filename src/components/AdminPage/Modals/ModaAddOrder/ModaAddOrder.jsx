import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { Backdrop, Modal, Form, Title, CloseButton } from '../Modal.styles';
import { Select, MenuItem, TextField } from '@mui/material';

import { getAllServices } from 'redux/services/servicesOperations';
import { getAllEmployees } from 'redux/employees/employeesOperations';

import { selectGetAllServices } from 'redux/services/servicesSelectors';
import { selectEmployees } from 'redux/employees/employeesSelectors';

import { addNewOrder } from 'redux/orders/ordersOperations';
import { getAdministrators } from 'redux/Auth/AuthOperations';
import { selectAdministrators } from 'redux/Auth/AuthSelectors';

export const ModaAddOrder = props => {
  const services = useSelector(selectGetAllServices);
  const employees = useSelector(selectEmployees);
  const admins = useSelector(selectAdministrators);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
    dispatch(getAllEmployees());
    dispatch(getAdministrators());
  }, [dispatch]);

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
      clientName: '',
      clientPhone: '',
      clientComment: '',
      serviceObject: '',
      payment: '',
      orderDate: '',
      services: '',
      washer: '',
      administrator: '',
      discountPercent: '',
      urgently: '',
    },
    onSubmit: values => {
      const filteredValues = {};
      for (const key in values) {
        if (values[key] !== '') {
          filteredValues[key] = values[key];
        }
      }
      if (filteredValues.services) {
        filteredValues.services = [filteredValues.services];
      }
      dispatch(addNewOrder(filteredValues));
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
          <Title>Створити замовлення</Title>
          <TextField
            required
            type="text"
            id="clientName"
            name="clientName"
            label="Ім'я клієнта"
            value={formik.values.clientName}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          />
          <TextField
            required
            type="text"
            id="clientPhone"
            name="clientPhone"
            label="Телефон клієнта"
            value={formik.values.clientPhone}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          />
          <TextField
            type="text"
            id="clientComment"
            name="clientComment"
            label="Коментар клієнта"
            value={formik.values.clientComment}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          />
          <TextField
            required
            type="text"
            id="serviceObject"
            name="serviceObject"
            label="Об'єкт послуг"
            value={formik.values.serviceObject}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          />
          <TextField
            required
            type="datetime-local"
            id="orderDate"
            name="orderDate"
            value={formik.values.orderDate}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          />
          <TextField
            type="number"
            id="discountPercent"
            name="discountPercent"
            label="Відсоток знижки, %"
            value={formik.values.discountPercent}
            onChange={formik.handleChange}
            inputProps={{ min: '1' }}
            variant="standard"
            style={{ width: '100%' }}
          />
          <Select
            id="payment"
            name="payment"
            value={formik.values.payment}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          >
            <MenuItem value="Готівка">Готівка</MenuItem>
            <MenuItem value="Безготівка">Безготівка</MenuItem>
          </Select>

          <Select
            id="services"
            name="services"
            value={formik.values.services}
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
          <Select
            id="washer"
            name="washer"
            value={formik.values.washer}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          >
            {employees.map(washer => (
              <MenuItem value={washer.name} key={washer._id}>
                {washer.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            id="administrator"
            name="administrator"
            value={formik.values.administrator}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          >
            {admins.map(admin => (
              <MenuItem value={admin.name} key={admin._id}>
                {admin.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            id="urgently"
            name="urgently"
            value={formik.values.urgently}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          >
            <MenuItem value={true}>Так</MenuItem>
            <MenuItem value={false}>Ні</MenuItem>
          </Select>
          <button type="submit" className="btn">
            Додати
          </button>
        </Form>
      </Modal>
    </Backdrop>
  );
};
