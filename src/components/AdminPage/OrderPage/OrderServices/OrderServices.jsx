import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from 'redux/services/servicesOperations';
import { selectGetAllServices } from 'redux/services/servicesSelectors';
import { updateOrderByNumber } from 'redux/orders/ordersOperations';
// import throttle from 'lodash.throttle';

import {
  ServicesContainer,
  Header,
  PartTitle,
  AddServices,
  AddServicesButton,
  ServicesSelect,
  Table,
  TableHead,
  TableRow,
  TableNameHeader,
  TableHeader,
  TableData,
  AmountInput,
  DeleteBtn,
  DeleteIcon,
} from './OrderServices.styled';

export const OrderServices = ({ services, orderNumber }) => {
  const allServices = useSelector(selectGetAllServices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const handleAddService = service => {
    if (
      !services.some(existingService => existingService._id === service._id)
    ) {
      const updatedServices = [...services, service];
      dispatch(
        updateOrderByNumber({
          number: orderNumber,
          data: { services: updatedServices },
        })
      );
    }
  };

  const handleDeleteService = serviceId => {
    const updatedServices = services.filter(
      preService => preService._id !== serviceId
    );
    dispatch(
      updateOrderByNumber({
        number: orderNumber,
        data: { services: updatedServices },
      })
    );
  };

  const handleChangeAmount = (serviceId, newAmount) => {
    const updatedServices = services.map(service => {
      if (service._id === serviceId) {
        return { ...service, amount: newAmount };
      }
      return service;
    });
    dispatch(
      updateOrderByNumber({
        number: orderNumber,
        data: { services: updatedServices },
      })
    );
  };

  return (
    <ServicesContainer>
      <Header>
        <PartTitle>Послуги:</PartTitle>
        <AddServices>
          <AddServicesButton>Додати послугу</AddServicesButton>
          <ServicesSelect
            onChange={e => handleAddService(JSON.parse(e.target.value))}
          >
            <option value=""></option>
            {allServices.map(service => (
              <option value={JSON.stringify(service)} key={service._id}>
                {`${service.category}. ${service.name}. ${service.price}грн`}
              </option>
            ))}
          </ServicesSelect>
        </AddServices>
      </Header>

      {services && (
        <Table>
          <TableHead>
            <TableRow>
              <TableNameHeader>Назва</TableNameHeader>
              <TableHeader>Кількість</TableHeader>
              <TableHeader>Вартість</TableHeader>
              <TableHeader>Сума</TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {services.map(service => (
              <TableRow key={service._id}>
                <TableData>{service.name}</TableData>
                <TableData>
                  {service.pricePerMeter ? (
                    <AmountInput
                      type="number"
                      defaultValue={service.amount || 1}
                      min="1"
                      onChange={e =>
                        handleChangeAmount(service._id, e.target.value)
                      }
                    />
                  ) : (
                    1
                  )}
                </TableData>

                <TableData>{service.price}</TableData>
                <TableData>{service.price * (service.amount || 1)}</TableData>
                <TableData>
                  <DeleteBtn onClick={() => handleDeleteService(service._id)}>
                    <DeleteIcon />
                  </DeleteBtn>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </ServicesContainer>
  );
};
