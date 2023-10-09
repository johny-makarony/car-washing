import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { Backdrop, Modal, Form, Title, CloseButton } from '../Modal.styles';
import { TextField } from '@mui/material';

import { selectOrderByNumber } from 'redux/orders/ordersSelectors';
import { updateOrderByNumber } from 'redux/orders/ordersOperations';

export const ModalAddDiscount = props => {
  const order = useSelector(selectOrderByNumber);

  const dispatch = useDispatch();

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
      discountPercent: '',
    },
    onSubmit: values => {
      dispatch(
        updateOrderByNumber({ number: order.orderNumber, data: { ...values } })
      );
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
          <Title>Додати знижку</Title>
          <TextField
            required
            type="text"
            id="discountPercent"
            name="discountPercent"
            label="Відсоток знижки"
            value={formik.values.discountPercent}
            onChange={formik.handleChange}
            variant="standard"
            className="field"
          />
          <button type="submit" className="btn">
            Додати
          </button>
        </Form>
      </Modal>
    </Backdrop>
  );
};
