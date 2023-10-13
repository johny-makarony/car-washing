import { useSelector } from 'react-redux';

import { Section } from 'components/Global/Global.styled';
import { Loading } from 'components/Loading/Loading';
import { ReportingTable } from 'components/AdminPage/ReportPage/ReportTable/ReportTable';
import { ReportSearchForm } from 'components/AdminPage/ReportPage/ReportSearchForm/ReportSearchForm';

import { selectIsLoading } from 'redux/reporting/reportingSelectors';

const ReportingPage = () => {
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Section>
      <ReportSearchForm />
      <ReportingTable />
    </Section>
  );
};

export default ReportingPage;
