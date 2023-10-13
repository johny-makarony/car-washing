import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { Backdrop, Modal, Form, Title, CloseButton } from '../Modal.styles';
import { MainButton } from 'components/Global/Global.styled';
import { TextField } from '@mui/material';

import { addPhotosGroup } from 'redux/gallery/galleryOperations';
import { useState } from 'react';

export const ModalAddPhotos = props => {
  const [before, setBefore] = useState(null);
  const [after, setAfter] = useState(null);

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
      beforeAlt: '',
      afterAlt: '',
    },
    onSubmit: values => {
      const formData = new FormData();
      formData.append('before', before);
      formData.append('after', after);
      formData.append('beforeAlt', values.beforeAlt);
      formData.append('afterAlt', values.afterAlt);
      dispatch(addPhotosGroup(formData));
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
          <Title>Додати фото</Title>

          <TextField
            required
            type="file"
            id="beforePhoto"
            name="beforePhoto"
            label="Фото до"
            value={formik.values.beforePhoto}
            onChange={e => setBefore(e.currentTarget.files[0])}
            variant="standard"
            className="field"
          />
          <TextField
            type="text"
            id="beforeAlt"
            name="beforeAlt"
            label="Назва зображення"
            value={formik.values.beforeAlt}
            onChange={formik.handleChange}
            variant="standard"
            className="field"
          />
          <TextField
            required
            type="file"
            id="afterPhoto"
            name="afterPhoto"
            label="Фото після"
            value={formik.values.afterPhoto}
            onChange={e => setAfter(e.currentTarget.files[0])}
            variant="standard"
            className="field"
          />
          <TextField
            type="text"
            id="afterAlt"
            name="afterAlt"
            label="Назва зображення"
            value={formik.values.afterAlt}
            onChange={formik.handleChange}
            variant="standard"
            className="field"
          />

          <MainButton type="submit" color="var(--black-color)">
            Додати
          </MainButton>
        </Form>
      </Modal>
    </Backdrop>
  );
};
