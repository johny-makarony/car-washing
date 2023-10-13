import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import {
  Backdrop,
  Modal,
  Title,
  CloseButton,
  Form,
  Label,
  Input,
  CloseIcon,
} from '../Modal.styles';
import { MainButton } from 'components/Global/Global.styled';
import { Checkbox } from '@mui/material';

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
      criminal: false,
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
        <Title>Додати працівника</Title>
        <CloseButton type="button" onClick={handleExitModal}>
          <CloseIcon />
        </CloseButton>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            required
            type="text"
            id="name"
            name="name"
            label="Ім'я працівника"
            value={formik.values.name}
            onChange={formik.handleChange}
            variant="outlined"
          />
          <Input
            required
            type="tel"
            id="phone"
            name="phone"
            label="Номер телефона"
            value={formik.values.phone}
            onChange={formik.handleChange}
            variant="outlined"
          />
          <Label>
            Працює з:
            <Input
              required
              type="date"
              id="worksFromDate"
              name="worksFromDate"
              value={formik.values.worksFromDate}
              onChange={formik.handleChange}
              variant="filled"
              style={{ width: '100%' }}
            />
          </Label>
          <Label>
            <Checkbox
              checked={formik.values.criminal}
              onChange={() =>
                formik.setFieldValue('criminal', !formik.values.criminal)
              }
            />
            Судимість
          </Label>

          <MainButton type="submit" color="var(--black-color)" margin={true}>
            Додати
          </MainButton>
        </Form>
      </Modal>
    </Backdrop>
  );
};
