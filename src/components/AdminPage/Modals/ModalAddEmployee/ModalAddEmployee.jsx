import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { Backdrop, Modal, Form, Title, CloseButton } from '../Modal.styles';
import { TextField, Select, MenuItem, InputLabel } from '@mui/material';

import { addEmployee } from 'redux/employees/employeesOperations';

export const ModalAddEmployee = props => {
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
      name: '',
      phone: '',
      criminal: '',
      worksFromDate: '',
    },
    onSubmit: values => {
      dispatch(addEmployee(values));
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
          <Title>Додати працівника</Title>
          <TextField
            required
            type="text"
            id="name"
            name="name"
            label="Ім'я працівника"
            value={formik.values.name}
            onChange={formik.handleChange}
            variant="standard"
            className="field"
          />
          <TextField
            required
            type="tel"
            id="phone"
            name="phone"
            label="Номер телефона"
            value={formik.values.phone}
            onChange={formik.handleChange}
            variant="standard"
            className="field"
          />

          <InputLabel id="criminal-label">Чи є судимість:</InputLabel>
          <Select
            required
            labelId="criminal-label"
            id="criminal"
            name="criminal"
            value={formik.values.criminal}
            onChange={formik.handleChange}
            variant="standard"
            style={{ width: '100%' }}
          >
            <MenuItem value="Так">Так</MenuItem>
            <MenuItem value="Ні">Ні</MenuItem>
          </Select>
          <TextField
            required
            type="date"
            id="worksFromDate"
            name="worksFromDate"
            value={formik.values.worksFromDate}
            onChange={formik.handleChange}
            variant="filled"
            className="field"
            style={{ width: '100%' }}
          />
          <button type="submit" className="btn">
            Додати
          </button>
        </Form>
      </Modal>
    </Backdrop>
  );
};
