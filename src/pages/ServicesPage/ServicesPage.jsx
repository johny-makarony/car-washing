import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModalAddService } from 'components/AdminPage/Modals/ModalAddService/ModalAddService';

import { getAllServices } from 'redux/services/servicesOperations';
import { selectGetAllServices } from 'redux/services/servicesSelectors';

const ServicesPage = () => {
  const services = useSelector(selectGetAllServices);

  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  return (
    <section>
      <div
        style={{
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h2>Послуги</h2>
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="btn"
          style={{ color: 'var(--white-color)' }}
        >
          Додати послугу
        </button>
      </div>

      <ul
        className="list"
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        {services.map(service => (
          <li key={service._id}>
            <p>{`Об'єкт послуги: ${service.category}`}</p>
            <p>{`Назва послуги: ${service.name}`}</p>
            {service.pricePerMeter && <p>Вартість за м²: Так</p>}
            <p>{`Вартість: ${service.price} грн`}</p>
            <p>{`Відсоток працівника: ${service.employeePercent}%`}</p>
          </li>
        ))}
      </ul>
      {isOpenModal && <ModalAddService handleExitModal={handleExitModal} />}
    </section>
  );
};

export default ServicesPage;
