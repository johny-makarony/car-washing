import { useState } from 'react';

import { ModaAddOrder } from 'components/AdminPage/Modals/ModaAddOrder/ModaAddOrder';
import { OrdersList } from '../../components/AdminPage/OrdersList/OrdersList';
import { OrdersFilterList } from 'components/AdminPage/OrdersFilterList/OrdersFilterList';

const OrdersPage = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  return (
    <section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="btn"
          style={{ marginLeft: 'auto', color: 'white' }}
        >
          Створити замовлення
        </button>
        <OrdersFilterList />
      </div>

      <OrdersList />
      {isOpenModal && <ModaAddOrder handleExitModal={handleExitModal} />}
    </section>
  );
};

export default OrdersPage;
