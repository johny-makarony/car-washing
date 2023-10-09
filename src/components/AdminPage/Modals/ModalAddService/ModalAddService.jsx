import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { Backdrop, Modal, Form, Title, CloseButton } from '../Modal.styles';
import { TextField, Select, MenuItem, InputLabel } from '@mui/material';

import { addService } from 'redux/services/servicesOperations';

export const ModalAddService = props => {
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
      category: '',
      name: '',
      pricePerMeter: '',
      price: '',
      employeePercent: '',
    },
    onSubmit: values => {
      dispatch(addService(values));
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
          <Title>Додати послугу</Title>
          <InputLabel id="category-label">Оберіть об'єкт послуги</InputLabel>
          <Select
            required
            labelId="category-label"
            id="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          >
            <MenuItem value="Авто">Авто</MenuItem>
            <MenuItem value="Килим">Килим</MenuItem>
          </Select>

          <TextField
            required
            type="text"
            id="name"
            name="name"
            label="Назва послуги"
            value={formik.values.name}
            onChange={formik.handleChange}
            variant="standard"
            className="field"
          />
          <InputLabel id="pricePerMeter-label">Вартість за м²?</InputLabel>
          <Select
            required
            labelId="pricePerMeter-label"
            id="pricePerMeter"
            name="pricePerMeter"
            value={formik.values.pricePerMeter}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          >
            <MenuItem value="Так">Так</MenuItem>
            <MenuItem value="Ні">Ні</MenuItem>
          </Select>
          <TextField
            required
            type="text"
            id="price"
            name="price"
            label="Ціна послуги"
            value={formik.values.price}
            onChange={formik.handleChange}
            variant="standard"
            className="field"
          />
          <TextField
            required
            type="text"
            id="employeePercent"
            name="employeePercent"
            label="Відсоток працівнику"
            value={formik.values.employeePercent}
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
