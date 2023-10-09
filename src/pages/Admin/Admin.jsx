import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Sidebar } from 'components/AdminPage/Sidebar/Sidebar';
import { Loading } from 'components/Loading/Loading';

import {
  selectIsLoggedIn,
  // selectIsAuthLoading,
} from 'redux/Auth/AuthSelectors';
import { refresh } from 'redux/Auth/AuthOperations';
// import { selectIsLoadingEmployees } from 'redux/employees/employeesSelectors';
// import { selectIsLoadingServices } from 'redux/services/servicesSelectors';
// import { selectIsLoadingOrders } from 'redux/orders/ordersSelectors';

const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isAuthLoading = useSelector(selectIsAuthLoading);
  // const isOrdersLoading = useSelector(selectIsLoadingOrders);
  // const isEmployeesLoading = useSelector(selectIsLoadingEmployees);
  // const isServicesLoading = useSelector(selectIsLoadingServices);

  useEffect(() => {
    const LocalStoreToken = localStorage.getItem('persist:auth');
    if (LocalStoreToken) {
      dispatch(refresh())
        .then(() => {
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error refreshing token:', error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate('/login');
    }
  }, [isLoading, isLoggedIn, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div
        style={{
          padding: '40px',
          width: '100%',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
