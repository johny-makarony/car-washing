import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Loading } from './Loading/Loading';

const Home = lazy(() => import('pages/Home/Home'));
const Admin = lazy(() => import('pages/Admin/Admin'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const OrdersPage = lazy(() => import('pages/OrdersPage/OrdersPage'));
const OrderPage = lazy(() => import('pages/OrderPage/OrderPage'));
const EmployeesPage = lazy(() => import('pages/EmployeesPage/EmployeesPage'));
const ServicesPage = lazy(() => import('pages/ServicesPage/ServicesPage'));
const ReportingPage = lazy(() => import('pages/ReportingPage/ReportingPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="orders" element={<OrdersPage />} />
          <Route path="order/:id" element={<OrderPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="reporting" element={<ReportingPage />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Route>
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </Suspense>
  );
};
