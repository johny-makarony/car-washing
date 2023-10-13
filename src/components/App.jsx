import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Loading } from './Loading/Loading';

const Home = lazy(() => import('pages/Home/Home'));
const Admin = lazy(() => import('pages/Admin/Admin'));
const Login = lazy(() => import('pages/Login/Login'));
const Orders = lazy(() => import('pages/Orders/Orders'));
const Order = lazy(() => import('pages/Order/Order'));
const Employees = lazy(() => import('pages/Employees/Employees'));
const Services = lazy(() => import('pages/Services/Services'));
const Report = lazy(() => import('pages/Report/Report'));
const Gallery = lazy(() => import('pages/Gallery/Gallery'));

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="orders" element={<Orders />} />
          <Route path="order/:id" element={<Order />} />
          <Route path="employees" element={<Employees />} />
          <Route path="services" element={<Services />} />
          <Route path="reports" element={<Report />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Route>
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </Suspense>
  );
};
