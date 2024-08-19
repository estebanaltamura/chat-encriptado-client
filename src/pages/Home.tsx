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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid black',
        marginTop: '70px',
        borderRadius: '20px',
        padding: '40px',
      }}
    >
      <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center', width: '120px' }}>
        <img
          className="findingPairLogoImage"
          src="https://i.postimg.cc/bNy9QWtG/logo.jpg"
          style={{ width: '100%' }}
        />
      </Box>

      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: '14px',
          lineHeight: '16px',
          fontWeight: '400',
          textAlign: 'center',
          width: '100%',
          maxWidth: '300px',
          margin: '10px auto 0 auto',
        }}
      >
        Secret chat is a private chat encrypted end to end with private and public keys SHA256
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '30px',
          backgroundColor: 'rgba(100, 26, 169, 0.10)',
          borderRadius: '20px',
          padding: '60px 40px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '17px',
            lineHeight: '19px',
            fontWeight: '700',
            textAlign: 'center',
            width: '100%',
            maxWidth: '450px',
          }}
        >
          Please select an avatar and write your nickname
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '17px',
            lineHeight: '19px',
            fontWeight: '700',
            textAlign: 'center',
            width: '100%',
            maxWidth: '600px',
            marginTop: '5px',
          }}
        >
          Then click &quot;start session&quot; button
        </Typography>

        {/* Selector de avatars */}
        <Box
          sx={{
            display: 'flex',
            width: '380px',
            height: 'fit-content',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '30px',
          }}
        >
          <Box
            onClick={() => setAvatarType(1)}
            sx={{
              display: 'flex',
              width: '60px',
              height: '60px',
              justifyContent: 'center',
              alignItems: 'center',
              border: avatarType === 1 ? '4px solid #5E00B6' : '',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            <img src="/avatar1.svg" style={{ width: '100%' }} />
          </Box>

          <Box
            onClick={() => setAvatarType(2)}
            sx={{
              display: 'flex',
              width: '60px',
              height: '60px',
              justifyContent: 'center',
              alignItems: 'center',
              border: avatarType === 2 ? '4px solid #5E00B6' : '',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            <img src="/avatar2.svg" style={{ width: '100%' }} />
          </Box>

          <Box
            onClick={() => setAvatarType(3)}
            sx={{
              display: 'flex',
              width: '60px',
              height: '60px',
              justifyContent: 'center',
              alignItems: 'center',
              border: avatarType === 3 ? '4px solid #5E00B6' : '',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            <img src="/avatar3.svg" style={{ width: '100%' }} />
          </Box>

          <Box
            onClick={() => setAvatarType(4)}
            sx={{
              display: 'flex',
              width: '60px',
              height: '60px',
              justifyContent: 'center',
              alignItems: 'center',
              border: avatarType === 4 ? '4px solid #5E00B6' : '',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            <img src="/avatar4.svg" style={{ width: '100%' }} />
          </Box>

          <Box
            onClick={() => setAvatarType(5)}
            sx={{
              display: 'flex',
              width: '60px',
              height: '60px',
              justifyContent: 'center',
              alignItems: 'center',
              border: avatarType === 5 ? '4px solid #5E00B6' : '',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            <img src="/avatar5.svg" style={{ width: '100%' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            borderRadius: '7px',
            width: '380px',
            height: 'fit-content',
            marginTop: '20px',
          }}
        >
          <form className="formLogin" onSubmit={(event: any) => startSession(event, avatarType)}>
            <TextField
              name="nickNameInput"
              type="text"
              placeholder={!focused && value === '' ? 'Write a nickname' : ''}
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
                backgroundColor: 'white',
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
                fontSize: '14px',
                textTransform: 'none',
                backgroundColor: '#5E00B6',
                color: 'white',
                marginTop: '25px',
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
              START SESSION
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
