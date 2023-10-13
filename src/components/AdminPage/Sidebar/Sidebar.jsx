import { PageLink } from './Sidebar.styled';
import { FiUser } from 'react-icons/fi';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user">
        <FiUser className="user__icon" />
        <p className="user__name">Admin</p>
      </div>
      <nav className="sidebar__nav">
        <PageLink to="orders" className="sidebar__item">
          Замовлення
        </PageLink>
        <PageLink to="gallery" className="sidebar__item">
          Галерея зображень
        </PageLink>
        <PageLink to="employees" className="sidebar__item">
          Працівники
        </PageLink>
        <PageLink to="services" className="sidebar__item">
          Послуги
        </PageLink>
        <PageLink to="reports" className="sidebar__item">
          Звітність
        </PageLink>
      </nav>
    </div>
  );
};
