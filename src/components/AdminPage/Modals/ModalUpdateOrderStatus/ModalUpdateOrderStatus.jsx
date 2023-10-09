import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { Backdrop, Modal, Form, Title, CloseButton } from '../Modal.styles';
import { Select, MenuItem } from '@mui/material';
import { updateOrderByNumber } from 'redux/orders/ordersOperations';

export const ModalUpdateOrderStatus = props => {
  const { handleExitModal, orderNumber } = props;
  const dispatch = useDispatch();

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleExitModal(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      status: '',
    },
    onSubmit: values => {
      const data = { ...values };
      dispatch(updateOrderByNumber({ number: orderNumber, data }));
      handleExitModal(true);
    },
  });

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <CloseButton type="button" onClick={handleExitModal}>
          Закрити
        </CloseButton>
        <Form onSubmit={formik.handleSubmit}>
          <Title>Оберіть статус</Title>
          <Select
            required
            id="status"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          >
            <MenuItem value="В роботі"> В роботі </MenuItem>
            <MenuItem value="Виконане"> Виконане </MenuItem>
            <MenuItem value="Скасоване"> Скасоване </MenuItem>
          </Select>
          <button type="submit" className="btn">
            Змінити
          </button>
        </Form>
      </Modal>
    </Backdrop>
  );
};
