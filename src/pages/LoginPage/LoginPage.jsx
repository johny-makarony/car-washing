import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { login } from 'redux/Auth/AuthOperations';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/admin');
    }
  }, [isLoggedIn, navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(login(values));
    },
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          gap: '30px',
          padding: '50px',
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '12px',
        }}
      >
        <TextField
          required
          type="text"
          id="email"
          name="email"
          label="Електронна пошта"
          value={formik.values.email}
          onChange={formik.handleChange}
          variant="standard"
          className="field"
        />

        <TextField
          required
          type="text"
          id="password"
          name="password"
          label="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          variant="standard"
          className="field"
        />

        <button type="submit" className="btn">
          Увійти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
