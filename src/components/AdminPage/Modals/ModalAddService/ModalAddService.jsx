import { useDispatch } from 'react-redux';
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
import { MenuItem, InputLabel, Checkbox } from '@mui/material';

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
      price: '',
      pricePerMeter: false,
      employeePercent: '',
    },
    onSubmit: values => {
      console.log(values);
      dispatch(addService(values));
      handleExitModal();
    },
  });

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <Title>Додати послугу</Title>
        <CloseButton type="button" onClick={handleExitModal}>
          <CloseIcon />
        </CloseButton>
        <Form onSubmit={formik.handleSubmit}>
          <InputLabel id="category-label">Оберіть об'єкт послуги</InputLabel>
          <FormSelect
            required
            labelId="category-label"
            id="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            variant="outlined"
          >
            <MenuItem value="Авто">Авто</MenuItem>
            <MenuItem value="Килим">Килим</MenuItem>
          </FormSelect>

          <Input
            required
            type="text"
            id="name"
            name="name"
            label="Назва послуги"
            value={formik.values.name}
            onChange={formik.handleChange}
            variant="outlined"
          />
          {/* <InputLabel id="pricePerMeter-label">Вартість за м²?</InputLabel> */}
          {/* <FormSelect
            required
            labelId="pricePerMeter-label"
            id="pricePerMeter"
            name="pricePerMeter"
            value={formik.values.pricePerMeter}
            onChange={formik.handleChange}
            variant="outlined"
          >
            <MenuItem value="Так">Так</MenuItem>
            <MenuItem value="Ні">Ні</MenuItem>
          </FormSelect> */}
          <Input
            required
            type="text"
            id="price"
            name="price"
            label="Ціна послуги"
            value={formik.values.price}
            onChange={formik.handleChange}
            variant="outlined"
            className="outlined"
          />
          <Label>
            <Checkbox
              checked={formik.values.pricePerMeter}
              onChange={() =>
                formik.setFieldValue(
                  'pricePerMeter',
                  !formik.values.pricePerMeter
                )
              }
            />
            Ціна за м²
          </Label>
          <Input
            required
            type="text"
            id="employeePercent"
            name="employeePercent"
            label="Відсоток працівнику"
            value={formik.values.employeePercent}
            onChange={formik.handleChange}
            variant="outlined"
            className="outlined"
          />

          <MainButton type="submit" color="var(--black-color)" margin={true}>
            Додати
          </MainButton>
        </Form>
      </Modal>
    </Backdrop>
  );
};
