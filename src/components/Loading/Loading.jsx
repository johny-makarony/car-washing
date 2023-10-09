import { Backdrop } from 'components/AdminPage/Modals/Modal.styles';
import { Hourglass } from 'react-loader-spinner';

export const Loading = () => (
  <Backdrop>
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    />
  </Backdrop>
);
