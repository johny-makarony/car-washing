import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { updateOrderByNumber } from 'redux/orders/ordersOperations';
import { formatedDate } from 'utils/formatedDate';

import {
  Form,
  EditButton,
  EditIcon,
  Label,
  TextArea,
  Input,
  Select,
} from './OrderForm.styled';
import { MainButton } from 'components/Global/Global.styled';

export const OrderForm = ({ order, employees, admins }) => {
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      washer: order.washer || '',
      clientComment: order.clientComment || '',
      clientName: order.clientName || '',
      clientPhone: order.clientPhone || '',
      serviceObject: order.serviceObject || '',
      orderDate: order.orderDate || '',
      administrator: order.administrator || '',
      payment: order.payment || '',
    },
    onSubmit: values => {
      dispatch(
        updateOrderByNumber({ number: order.orderNumber, data: values })
      );
      setEdit(false);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <EditButton type="button" onClick={() => setEdit(!isEdit)}>
        <EditIcon />
      </EditButton>
      <Label>
        Коментар:
        <TextArea
          disabled={!isEdit}
          cols="60"
          type="text"
          id="clientComment"
          name="clientComment"
          value={formik.values.clientComment}
          onChange={formik.handleChange}
          variant="standard"
        />
      </Label>
      <Label>
        Клієнт:
        <Input
          disabled={!isEdit}
          type="text"
          id="clientName"
          name="clientName"
          value={formik.values.clientName}
          onChange={formik.handleChange}
          variant="standard"
        />
      </Label>
      <Label>
        Контакти:
        <Input
          disabled={!isEdit}
          type="text"
          id="clientPhone"
          name="clientPhone"
          value={formik.values.clientPhone}
          onChange={formik.handleChange}
          variant="standard"
        />
      </Label>
      <Label>
        Об'єкт послуг:
        <Input
          disabled={!isEdit}
          type="text"
          id="serviceObject"
          name="serviceObject"
          value={formik.values.serviceObject}
          onChange={formik.handleChange}
          variant="standard"
        />
      </Label>
      <Label>
        Дата та час заїзду:
        <Input
          disabled={!isEdit}
          type="datetime-local"
          id="orderDate"
          name="orderDate"
          value={formik.values.orderDate}
          onChange={formik.handleChange}
          variant="standard"
        />
      </Label>
      {order.orderExecutionDate && (
        <p>{`Дата та час виконання: ${formatedDate(
          order.orderExecutionDate
        )}`}</p>
      )}
      <Label>
        Оплата:
        <Select
          disabled={!isEdit}
          id="payment"
          name="payment"
          value={formik.values.payment}
          onChange={formik.handleChange}
          variant="standard"
        >
          <option value=""> </option>
          <option value="Готівка">Готівка </option>
          <option value="Безготівка">Безготівка </option>
        </Select>
      </Label>
      <Label>
        Адміністратор:
        <Select
          disabled={!isEdit}
          required
          id="administrator"
          name="administrator"
          value={formik.values.administrator}
          onChange={formik.handleChange}
          variant="standard"
        >
          <option value=""> </option>
          {admins &&
            admins.map(admin => (
              <option value={admin.name} key={admin._id}>
                {admin.name}
              </option>
            ))}
        </Select>
      </Label>

      <Label>
        Працівник:
        <Select
          disabled={!isEdit}
          required
          id="washer"
          name="washer"
          value={formik.values.washer}
          onChange={formik.handleChange}
          variant="standard"
        >
          <option value=""> </option>
          {employees &&
            employees.map(employee => (
              <option value={employee.name} key={employee._id}>
                {employee.name}
              </option>
            ))}
        </Select>
      </Label>
      {isEdit && <MainButton type="submit">Зберегти зміни</MainButton>}
    </Form>
  );
};
