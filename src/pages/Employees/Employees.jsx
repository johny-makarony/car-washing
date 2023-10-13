import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Section,
  HeaderContainer,
  SectionTitle,
  MainButton,
} from 'components/Global/Global.styled';
import { ModalAddEmployee } from 'components/AdminPage/Modals/ModalAddEmployee/ModalAddEmployee';
import { Loading } from 'components/Loading/Loading';

import { getAllEmployees } from 'redux/employees/employeesOperations';
import {
  selectEmployees,
  selectIsLoadingEmployees,
} from 'redux/employees/employeesSelectors';

const EmployeesPage = () => {
  const employees = useSelector(selectEmployees);
  const isLoading = useSelector(selectIsLoadingEmployees);

  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  function calculateAge(date) {
    const startDate = new Date(date);
    const endDate = new Date();
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} р. ${months} міс.`;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Section>
      <HeaderContainer>
        <SectionTitle>Працівники</SectionTitle>
        <MainButton
          type="button"
          onClick={() => setOpenModal(true)}
          color="var(--white-color)"
        >
          Додати працівника
        </MainButton>
      </HeaderContainer>

      <ul
        className="list"
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        {employees.map(employee => (
          <li key={employee._id}>
            <p>{`Ім'я: ${employee.name}`}</p>
            <p>{`Телефон: ${employee.phone}`}</p>
            {employee.criminal && <p>Є судимість</p>}
            <p>{`Працює: ${calculateAge(employee.worksFromDate)}`}</p>
          </li>
        ))}
      </ul>
      {isOpenModal && <ModalAddEmployee handleExitModal={handleExitModal} />}
    </Section>
  );
};

export default EmployeesPage;
