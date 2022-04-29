// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Oval } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={50}
      width={50}
      strokeWidth={3}
      color="red"
      secondaryColor="green"
    />
  );
}
