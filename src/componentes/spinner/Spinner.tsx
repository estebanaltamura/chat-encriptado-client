// ** Material UI Imports
import { CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <CircularProgress
      sx={{
        position: 'absolute',
        width: '40px',
        height: '40px',
        top: 'calc(50% - 20px)',
        left: 'calc(50% - 20px)',
        margin: 'auto',
      }}
    />
  );
};

export default Spinner;
