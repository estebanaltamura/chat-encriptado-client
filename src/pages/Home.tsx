// ** Hooks Imports
import { useLogin } from '../hooks/useLogin';

// ** Material UI Imports
import { Box, Button, TextField, Typography } from '@mui/material';

// ** Spinner Import
import { useState } from 'react';
import Spinner from '../componentes/spinner/Spinner';

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
        width: '700px',
        height: 'fit-content',
        border: '1px solid black',
        margin: '70px 0px',
        borderRadius: '20px',
        padding: '40px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '140px' }}>
        <img className="findingPairLogoImage" src="/logo.png" style={{ width: '100%' }} />
      </Box>

      {/*Test mode instructions */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #1D61CF',
          borderRadius: '10px',
          width: '522px',
          padding: '18px',
          marginTop: '20px',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            textAlign: 'left',
            lineHeight: '19px',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: 'Work Sans',
          }}
        >
          Si estás en esta página para testear el chat, seguí los pasos
        </Typography>

        {/*paso */}
        <Box sx={{ display: 'flex', marginTop: '15px', padding: '0 15px' }}>
          <Typography
            sx={{
              fontFamily: 'Work Sans',
              textAlign: 'center',
              lineHeight: '19px',
              fontSize: '17px',
              fontWeight: '700',
            }}
          >
            1
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Work Sans',

              textAlign: 'left',
              lineHeight: '19px',
              fontSize: '14px',
              fontWeight: '400',
              marginLeft: '10px',
            }}
          >
            Clickeá este{' '}
            <a href="https://www.encrypted-chat.xyz/home" target="_black">
              link
            </a>
            . Te va a abrir una nueva pestaña con otro inicio de chat
          </Typography>
        </Box>

        {/*paso */}
        <Box sx={{ display: 'flex', marginTop: '15px', padding: '0 15px' }}>
          <Typography
            sx={{
              fontFamily: 'Work Sans',
              textAlign: 'center',
              lineHeight: '19px',
              fontSize: '17px',
              fontWeight: '700',
            }}
          >
            2
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Work Sans',

              textAlign: 'left',
              lineHeight: '19px',
              fontSize: '14px',
              fontWeight: '400',
              marginLeft: '10px',
            }}
          >
            En cada pestaña elegí un avatar y escribí un nickname
          </Typography>
        </Box>

        {/*paso */}
        <Box sx={{ display: 'flex', marginTop: '15px', padding: '0 15px' }}>
          <Typography
            sx={{
              fontFamily: 'Work Sans',
              textAlign: 'center',
              lineHeight: '19px',
              fontSize: '17px',
              fontWeight: '700',
            }}
          >
            3
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Work Sans',

              textAlign: 'left',
              lineHeight: '19px',
              fontSize: '14px',
              fontWeight: '400',
              marginLeft: '10px',
            }}
          >
            Hacé click en continuar
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '30px',
          backgroundColor: 'rgba(29,97,207,0.05)',
          borderRadius: '20px',
          padding: '60px 40px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Work Sans',
            fontSize: '17px',
            lineHeight: '17px',
            fontWeight: '600',
            textAlign: 'center',
            width: '100%',
            maxWidth: '450px',
          }}
        >
          Seleccioná un avatar y escribí tu nickname
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Work Sans',
            fontSize: '17px',
            lineHeight: '17px',
            fontWeight: '600',
            textAlign: 'center',
            width: '100%',
            maxWidth: '600px',
            marginTop: '5px',
          }}
        >
          Luego hacé click en continuar
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
              border: avatarType === 1 ? '4px solid #1D61CF' : '',
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
              border: avatarType === 2 ? '4px solid #1D61CF' : '',
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
              border: avatarType === 3 ? '4px solid #1D61CF' : '',
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
              border: avatarType === 4 ? '4px solid #1D61CF' : '',
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
              border: avatarType === 5 ? '4px solid #1D61CF' : '',
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
              placeholder={!focused && value === '' ? 'Escribí un nickname' : ''}
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
                '& .MuiOutlinedInput-input::placeholder': {
                  color: 'grey', // Aquí se establece el color del placeholder
                  textAlign: 'center',
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
                fontFamily: 'Work Sans',
                fontSize: '14px',
                textTransform: 'none',
                backgroundColor: '#1D61CF',
                color: 'white',
                marginTop: '20px',
                border: '1px solid #8FDEFF',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: '700',
                '&:hover': {
                  backgroundColor: '#0f4478',
                  color: '#34B9FA',
                },
              }}
              type="submit"
            >
              CONTINUAR
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
