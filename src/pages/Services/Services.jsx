import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Section,
  HeaderContainer,
  SectionTitle,
  MainButton,
} from 'components/Global/Global.styled';
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
    <Section>
      <HeaderContainer>
        <SectionTitle>Послуги</SectionTitle>
        <MainButton type="button" onClick={() => setOpenModal(true)}>
          Додати послугу
        </MainButton>
      </HeaderContainer>

      <ul
        className="list"
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        {services.map(service => (
          <li key={service._id}>
            <p>{`Об'єкт послуги: ${service.category}`}</p>
            <p>{`Назва послуги: ${service.name}`}</p>
            <p>{`Вартість: ${service.price} грн${
              service.pricePerMeter ? '/м²' : ''
            }`}</p>
            <p>{`Відсоток працівника: ${service.employeePercent}%`}</p>
          </li>
        ))}
      </ul>
      {isOpenModal && <ModalAddService handleExitModal={handleExitModal} />}
    </Section>
  );
};

export default ServicesPage;
