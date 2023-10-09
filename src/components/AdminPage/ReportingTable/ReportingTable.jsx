import { useSelector } from 'react-redux';
import {
  selectOrders,
  selectEmployees,
  selectPayments,
} from 'redux/reporting/reportingSelectors';

import { formatedDate } from 'utils/formatedDate';

import {
  TableContainer,
  TableThumb,
  Title,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
  TableCellServices,
} from './ReportingTable.styled';

export const ReportingTable = () => {
  const orders = useSelector(selectOrders);
  const employees = useSelector(selectEmployees);
  const payments = useSelector(selectPayments);

  return (
    <TableContainer>
      {orders && orders.length > 0 && (
        <>
          <Title>Звітність за обраний період</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Час заїзду</TableHeader>
                <TableHeader>Марка ДНЗ</TableHeader>
                <TableHeader>Контакти клієнта</TableHeader>
                <TableHeader>Послуги</TableHeader>
                <TableHeader>Вартість, грн</TableHeader>
                <TableHeader>Спосіб оплати</TableHeader>
                <TableHeader>Адміністратор</TableHeader>
                <TableHeader>Працівник</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {orders.map(order => (
                <TableRow key={order._id}>
                  <TableData>{formatedDate(order.orderDate)}</TableData>
                  <TableData>{order.serviceObject}</TableData>
                  <TableData>{order.clientPhone}</TableData>
                  <TableCellServices>
                    {order.services.map(service => (
                      <p key={service._id}>{service.name}</p>
                    ))}
                  </TableCellServices>
                  <TableData>{order.discountedCostOrder}</TableData>
                  <TableData>{order.payment}</TableData>
                  <TableData>{order.administrator}</TableData>
                  <TableData>{order.washer}</TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      )}

      {employees && employees.length > 0 && (
        <TableThumb>
          <Title>Заробітна плата</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Ім'я</TableHeader>
                <TableHeader>грн</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {employees.map(employee => (
                <TableRow key={employee.name}>
                  <TableData>{employee.name}</TableData>
                  <TableData>{employee.payment}</TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableThumb>
      )}
      {payments && (
        <TableThumb>
          <Title>Розрахунок</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Категорія</TableHeader>
                <TableHeader>грн</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableData>Всього каса:</TableData>
                <TableData>{payments.totalPayments}</TableData>
              </TableRow>
              <TableRow>
                <TableData>Всього готівкою:</TableData>
                <TableData>{payments.totalCash}</TableData>
              </TableRow>
              <TableRow>
                <TableData>Всього терміналом:</TableData>
                <TableData>{payments.totalCard}</TableData>
              </TableRow>
              <TableRow>
                <TableData>Всього заробітна плата:</TableData>
                <TableData>{payments.totalEmployeesPayments}</TableData>
              </TableRow>
              <TableRow>
                <TableData>Прибуток:</TableData>
                <TableData>{payments.profit}</TableData>
              </TableRow>
            </tbody>
          </Table>
        </TableThumb>
      )}
    </TableContainer>
  );
};
