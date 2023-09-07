import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { ReactComponent as MyLogo } from '../../../images/icons/logo-without-star.svg';

export const Reserve = () => {
  const day = new Date().getDate().toString().padStart(2, '0');
  const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
  const year = new Date().getFullYear();

  const formattedDate = `${year}-${month}-${day}`;

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      date: formattedDate,
      comment: '',
      //   checked: [],
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <section className="section" id="reserve">
      <div className="container">
        <div className="reserve">
          <div className="reserve__left-side">
            <MyLogo width="200px" height="200px" className="logo" />
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="reserve__right-side form"
          >
            <h2 className="section__title reserve__title">Замовити послугу</h2>
            <TextField
              required
              type="text"
              id="name"
              name="name"
              label="Ім'я"
              value={formik.values.name}
              onChange={formik.handleChange}
              variant="standard"
              className="field"
            />
            <TextField
              required
              type="text"
              id="phone"
              name="phone"
              label="Номер телефону"
              value={formik.values.phone}
              onChange={formik.handleChange}
              variant="standard"
              className="field"
            />

            <TextField
              required
              type="date"
              id="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              variant="standard"
              className="field"
            />

            <TextField
              type="text"
              id="comment"
              name="comment"
              label="Залишити коментар"
              variant="standard"
              multiline
              rows={4}
              value={formik.values.comment}
              onChange={formik.handleChange}
              className="field"
            />
            <button type="submit" className="btn">
              Відправити
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
