// ** Hooks Imports
import { LoginFormElement, LoginFormElements, useLogin } from '../hooks/useLogin';

// ** Material UI Imports
import { Box, Typography, Button, TextField } from '@mui/material';

// ** Spinner Import
import Spinner from '../componentes/spinner/Spinner';
import { useContext, useEffect, useState } from 'react';
import { ErrorContext } from '../contexts/ErrorContextProvider';
import { ErrorTypes } from '../types';
import { UsersDataContext } from '../contexts/UsersDataProvider';
import { LastActivityTimeContext } from '../contexts/LastActivityTimeProvider';
import { ChatHistoryContext } from '../contexts/ChatHistoryProvider';
import { RequestStatusContext } from '../contexts/RequestStatusProvider';
import { LifeCycleContext } from '../contexts/LifeCycleProvider';

export const Home: React.FC = () => {
  // ** Hooks
  const { isLoading, startSession } = useLogin();
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [avatarType, setAvatarType] = useState<number>(1);

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

        <Box
          sx={{
            display: 'flex',
            width: '600px',
            height: '140px',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #2a3942',
            marginTop: '40px',
            gap: '25px',
          }}
        >
          <Box
            onClick={() => setAvatarType(1)}
            sx={{
              display: 'flex',
              border: '1px solid #4c4c4c',
              borderRadius: '50px',
              width: '60px',
              height: '60px',
            }}
          ></Box>

          <Box
            onClick={() => setAvatarType(2)}
            sx={{
              display: 'flex',
              border: '1px solid #4c4c4c',
              borderRadius: '50px',
              width: '60px',
              height: '60px',
            }}
          ></Box>

          <Box
            onClick={() => setAvatarType(3)}
            sx={{
              display: 'flex',
              border: '1px solid #4c4c4c',
              borderRadius: '50px',
              width: '60px',
              height: '60px',
            }}
          ></Box>

          <Box
            onClick={() => setAvatarType(4)}
            sx={{
              display: 'flex',
              border: '1px solid #4c4c4c',
              borderRadius: '50px',
              width: '60px',
              height: '60px',
            }}
          ></Box>

          <Box
            onClick={() => setAvatarType(5)}
            sx={{
              display: 'flex',
              border: '1px solid #4c4c4c',
              borderRadius: '50px',
              width: '60px',
              height: '60px',
            }}
          ></Box>
        </Box>

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
        <form className="formLogin" onSubmit={(event: any) => startSession(event, avatarType)}>
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
                  borderColor: 'gray',
                },
                '&:hover fieldset': {
                  borderColor: '#8F9FB8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#8F9FB8',
                },
                '&.Mui-focused.Mui-focusedVisible fieldset': {
                  borderColor: '#8F9FB8',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'black',
                '&.Mui-focused': {
                  color: 'green',
                },
              },
              '& input::placeholder': {
                textAlign: 'center',
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
