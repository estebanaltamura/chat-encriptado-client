// ** Hooks imports
import { useFindingPair } from '../hooks/useFindingPair';

// ** Icons Imports
import { AiOutlineCopy } from 'react-icons/ai';

// ** Material UI Imports
import { Box, Button, TextField, Typography } from '@mui/material';

// Icons Imports
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

export const FindingPair: React.FC = () => {
  // ** Hooks
  const {
    onFocusHandler,
    onBlurHandler,
    tryPairingHandler,
    copyToClipboard,
    copyPublicKeyText,
    closeConnectionHandler,
  } = useFindingPair();

  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        paddingTop: '20px',
        alignItems: 'center',
      }}
    >
      <Box sx={{ marginTop: '10px', cursor: 'pointer' }}>
        <AiOutlineCloseCircle className="closeConnectionButtonFindingPair" onClick={closeConnectionHandler} />
      </Box>
      <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <img className="findingPairLogoImage" src="https://i.postimg.cc/bNy9QWtG/logo.jpg" />
      </Box>

      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          lineHeight: '22px',
          fontWeight: '400',
          textAlign: 'center',
          width: '100%',
          maxWidth: '400px',
          marginTop: '15px',
        }}
      >
        You can talk with another user if you know their public key or the another user knows your public key.
      </Typography>

      <Box sx={{ border: '1px solid #2a3942', marginTop: '40px', width: '600px', height: '140px' }}>
        Elección del avatar
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
        If you know the public key of the person you want to talk with, insert it below and click start chat.
      </Typography>

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
        <form className="formFindingPair" onSubmit={tryPairingHandler}>
          <TextField
            name="findingPairInput"
            type="text"
            placeholder={!focused && value === '' ? 'Insert the plubic key of your peer' : ''}
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
            Start chat
          </Button>
          <Box sx={{ margin: 'auto', cursor: 'pointer', marginTop: '10px' }} onClick={copyToClipboard}>
            <AiOutlineCopy className="copyIcon" />
            <Typography
              sx={{
                display: 'inline',
                margin: 'auto',
                fontFamily: 'Inter',
                fontSize: '15px',
                fontWeight: 'bold',
                color: 'black',
              }}
            >
              {copyPublicKeyText}
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
