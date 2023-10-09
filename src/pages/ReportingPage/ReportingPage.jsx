import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { SearchForm, DateLabel } from './ReportingPage.styled';
import { Loading } from 'components/Loading/Loading';
import { ReportingTable } from 'components/AdminPage/ReportingTable/ReportingTable';
import { Container } from 'components/Container/Container.styled';

import { selectIsLoading } from 'redux/reporting/reportingSelectors';
import { getReportingByDates } from 'redux/reporting/reportingOperations';

const ReportingPage = () => {
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      startDate: '',
      endDate: '',
    },
    onSubmit: values => {
      dispatch(getReportingByDates(values));
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <Container>
        <SearchForm onSubmit={formik.handleSubmit}>
          <DateLabel>
            Початок
            <TextField
              required
              type="date"
              id="startDate"
              name="startDate"
              value={formik.values.startDate}
              onChange={formik.handleChange}
              variant="standard"
              className="field"
            />
          </DateLabel>
          <DateLabel>
            Кінець
            <TextField
              required
              type="date"
              id="endDate"
              name="endDate"
              value={formik.values.endDate}
              onChange={formik.handleChange}
              variant="standard"
              className="field"
            />
          </DateLabel>
          <button type="submit" className="btn">
            Пошук
          </button>
        </SearchForm>
        <ReportingTable />
      </Container>
    </section>
  );
};

export default ReportingPage;
