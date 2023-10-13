import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  Backdrop,
  Modal,
  Title,
  CloseButton,
  Form,
  Label,
  FormSelect,
  Input,
  CloseIcon,
} from '../Modal.styles';
import { MainButton } from 'components/Global/Global.styled';
import { MenuItem, Checkbox } from '@mui/material';

import { getAllServices } from 'redux/services/servicesOperations';
import { getAllEmployees } from 'redux/employees/employeesOperations';

import { selectGetAllServices } from 'redux/services/servicesSelectors';
import { selectEmployees } from 'redux/employees/employeesSelectors';

import { addNewOrder } from 'redux/orders/ordersOperations';
import { getAdministrators } from 'redux/auth/authOperations';
import { selectAdministrators } from 'redux/auth/authSelectors';

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
      orderDate: '',
      services: [],
      washer: '',
      administrator: '',
      urgently: false,
    },
    onSubmit: values => {
      const filteredValues = {};
      for (const key in values) {
        if (values[key] !== '') {
          filteredValues[key] = values[key];
        }
      }
      dispatch(addNewOrder(filteredValues));
      handleExitModal();
    },
  });

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <Title>Створити замовлення</Title>
        <CloseButton type="button" onClick={handleExitModal}>
          <CloseIcon />
        </CloseButton>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            required
            type="text"
            id="clientName"
            name="clientName"
            label="Ім'я клієнта"
            value={formik.values.clientName}
            onChange={formik.handleChange}
            variant="outlined"
          />
          <Input
            required
            type="text"
            id="clientPhone"
            name="clientPhone"
            label="Телефон клієнта"
            value={formik.values.clientPhone}
            onChange={formik.handleChange}
            variant="outlined"
          />
          <Input
            type="text"
            id="clientComment"
            name="clientComment"
            label="Коментар клієнта"
            value={formik.values.clientComment}
            onChange={formik.handleChange}
            variant="outlined"
          />
          <Input
            required
            type="text"
            id="serviceObject"
            name="serviceObject"
            label="Об'єкт послуг"
            value={formik.values.serviceObject}
            onChange={formik.handleChange}
            variant="outlined"
          />
          <Label>
            Час заїзду:
            <Input
              required
              type="datetime-local"
              id="orderDate"
              name="orderDate"
              value={formik.values.orderDate}
              onChange={formik.handleChange}
              variant="outlined"
            />
          </Label>
          <Label>
            Послуги:
            <FormSelect
              multiple
              id="services"
              name="services"
              value={formik.values.services}
              onChange={formik.handleChange}
              variant="outlined"
            >
              {services.map(service => (
                <MenuItem value={service} key={service._id}>
                  {`${service.category}. ${service.name}. ${service.price}грн`}
                </MenuItem>
              ))}
            </FormSelect>
          </Label>
          <Label>
            Працівник:
            <FormSelect
              id="washer"
              name="washer"
              value={formik.values.washer}
              onChange={formik.handleChange}
              variant="outlined"
            >
              {employees.map(washer => (
                <MenuItem value={washer.name} key={washer._id}>
                  {washer.name}
                </MenuItem>
              ))}
            </FormSelect>
          </Label>
          <Label>
            Адміністратор:
            <FormSelect
              id="administrator"
              name="administrator"
              value={formik.values.administrator}
              onChange={formik.handleChange}
              variant="outlined"
            >
              {admins.map(admin => (
                <MenuItem value={admin.name} key={admin._id}>
                  {admin.name}
                </MenuItem>
              ))}
            </FormSelect>
          </Label>
          <Label>
            <Checkbox
              checked={formik.values.urgently}
              onChange={() =>
                formik.setFieldValue('urgently', !formik.values.urgently)
              }
            />
            Терміново!
          </Label>

          <MainButton type="submit" color="var(--black-color)" margin={true}>
            Додати
          </MainButton>
        </Form>
      </Modal>
    </Backdrop>
  );
};
