// ** Hooks Imports
import { useLogin } from '../hooks/useLogin';

// ** Material UI Imports
import { Box, Typography, Button, TextField } from '@mui/material';

// ** Spinner Import
import Spinner from '../componentes/spinner/Spinner';
import { useContext, useEffect, useState } from 'react';
import { ErrorContext } from '../contexts/ErrorContextProvider';
import { ErrorTypes } from '../types';

export const Home: React.FC = () => {
  // ** Hooks
  const { isLoading, startSession } = useLogin();
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const { error, setError } = useContext(ErrorContext);

  useEffect(() => {
    setTimeout(() => {
      setError(ErrorTypes.NickNameError);
    }, 1000);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
        <img style={{ width: '140px' }} src="https://i.postimg.cc/bNy9QWtG/logo.jpg" />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15px' }}>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '18px',
            lineHeight: '22px',
            fontWeight: '400',
            textAlign: 'center',
            width: '100%',
            maxWidth: '400px',
            marginTop: '0px',
          }}
        >
          Secret chat is a private chat encrypted end to end with private and public keys SHA256.
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '18px',
            lineHeight: '22px',
            fontWeight: '700',
            textAlign: 'center',
            width: '100%',
            maxWidth: '600px',
            marginTop: '65px',
          }}
        >
          Please enter a nickname and then click start session button
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
          margin: '0px auto 20px auto',
        }}
      >
        <form className="formLogin" onSubmit={startSession}>
          <TextField
            name="nickNameInput"
            type="text"
            placeholder={!focused && value === '' ? 'Insert a nick name' : ''}
            variant="outlined"
            autoComplete="off"
            autoCapitalize="none"
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            fullWidth
            InputLabelProps={{
              style: {
                textAlign: 'center',
              },
            }}
            inputProps={{
              style: {
                textAlign: 'center',
              },
            }}
            sx={{
              borderRadius: '10px',
              color: 'black !important',

              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderRadius: '10px',

                  borderColor: 'gray', // Color del borde por defecto
                },
                '&:hover fieldset': {
                  borderColor: '#8F9FB8', // Color del borde en hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#8F9FB8', // Color del borde en focus
                },
                '&.Mui-focused.Mui-focusedVisible fieldset': {
                  borderColor: '#8F9FB8', // Color del borde en focusVisible
                },
              },
              '& .MuiInputLabel-root': {
                color: 'black', // Color del label por defecto
                '&.Mui-focused': {
                  color: 'green', // Color del label en focus
                },
              },
              '& input::placeholder': {
                textAlign: 'center', // Centrar el placeholder
              },
            }}
          />
          <Button
            sx={{
              width: '100%',
              height: '58px',
              fontFamily: 'Inter',
              fontSize: '16px',
              textTransform: 'none',
              backgroundColor: '#0f4478',
              color: 'white',
              marginTop: '12px',
              border: '1px solid transparent',
              borderRadius: '10px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#0f4478',
                color: '#34B9FA',
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
