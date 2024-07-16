// ** Hooks Imports
import { useLogin } from '../../hooks/useLogin';

// ** Material UI Imports
import { Box, Typography, Button } from '@mui/material';

// ** Component Imports
import CircularProgress from '@mui/material/CircularProgress';
import Spinner from '../spinner/Spinner';

export const LoginForm: React.FC = () => {
  // ** Hooks
  const { onFocusHandler, onBlurHandler, isLoading, startSession } = useLogin();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
        <img style={{ width: '160px' }} src="https://i.postimg.cc/bNy9QWtG/logo.jpg" />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px', marginTop: '25px' }}>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '17px',
            fontWeight: '700',
            fontStyle: 'italic',
            textAlign: 'center',
            width: '100%',
            maxWidth: '450px',
          }}
        >
          Secret chat is a private chat encrypted end to end with private and public keys SHA256
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          borderRadius: '7px',
          width: 'fit-content',
          height: 'fit-content',
          margin: '25px auto 20px auto',
        }}
      >
        <form className="formLogin" onSubmit={startSession}>
          <input
            className="nickNameInputLogin"
            name="nickNameInput"
            type="text"
            placeholder="Insert a nick name"
            autoComplete="off"
            autoCapitalize="none"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          ></input>
          <Button
            sx={{
              width: '100%',
              height: '60px',
              fontFamily: 'Montserrat',
              fontSize: '22px',
              textTransform: 'none',
              backgroundColor: '#0f4478',
              color: '#F09F18',

              border: '1px solid transparent',
              borderRadius: '10px',
              boxShadow: '1px 2px 5px 0px #0f4478',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#0f4478',
                color: '#F09F18',
              },
            }}
            type="submit"
          >
            Start session
          </Button>
        </form>
      </Box>
    </>
  );
};
