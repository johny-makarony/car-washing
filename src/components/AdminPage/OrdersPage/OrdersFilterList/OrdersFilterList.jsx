import { useLocation, useNavigate } from 'react-router-dom';

import {
  FilterList,
  FilterItem,
  FilterButton,
} from './OrdersFilterList.styled';

export const OrdersFilterList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const handleStatusFilter = e => {
    let updatedStatus = '';

    if (e.target.textContent === 'Всі') {
      updatedStatus = '';
    } else if (e.target.textContent === 'Нові') {
      updatedStatus = 'Нове';
    } else if (e.target.textContent === 'В роботі') {
      updatedStatus = 'В роботі';
    } else if (e.target.textContent === 'Виконані') {
      updatedStatus = 'Виконане';
    } else if (e.target.textContent === 'Скасовані') {
      updatedStatus = 'Скасоване';
    }

    queryParams.set('status', updatedStatus);

    navigate(
      `/admin/orders?${
        updatedStatus.length > 0 ? `status=${updatedStatus}` : ''
      }&page=1`
    );
  };

  return (
    <FilterList>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-all-color)"
          onClick={e => {
            handleStatusFilter(e);
          }}
        >
          Всі
        </FilterButton>
      </FilterItem>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-new-color)"
          onClick={e => {
            handleStatusFilter(e);
          }}
        >
          Нові
        </FilterButton>
      </FilterItem>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-inProcess-color)"
          onClick={e => {
            handleStatusFilter(e);
          }}
        >
          В роботі
        </FilterButton>
      </FilterItem>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-completed-color)"
          onClick={e => {
            handleStatusFilter(e);
          }}
        >
          Виконані
        </FilterButton>
      </FilterItem>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-cancelled-color)"
          onClick={e => {
            handleStatusFilter(e);
          }}
        >
          Скасовані
        </FilterButton>
      </FilterItem>
    </FilterList>
  );
};
