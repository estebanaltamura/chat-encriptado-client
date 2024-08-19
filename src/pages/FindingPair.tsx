// ** Hooks imports
import { useFindingPair } from '../hooks/useFindingPair';

// ** Icons Imports
import { AiOutlineCopy } from 'react-icons/ai';

// ** Material UI Imports
import { Box, Button, Divider, TextField, Typography } from '@mui/material';

// Icons Imports
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const FindingPair: React.FC = () => {
  // ** Hooks
  const { tryPairingHandler, copyToClipboard, copyPublicKeyText, closeConnectionHandler } = useFindingPair();

  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '700px',
        height: 'fit-content',
        padding: '40px',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '20px',
        marginTop: '70px',
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
          marginTop: '15px',
        }}
      >
        You can talk with another user if you know their public key or the another user knows your public key
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
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: '700',
            textAlign: 'center',
            width: '100%',
            maxWidth: '450px',
          }}
        >
          There are two ways to use encrypted chat: either by pasting your peer&apos;s public key into the
          input or by sharing your key with your partner
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: '700',
            textAlign: 'center',
            width: '100%',
            maxWidth: '500px',
            marginTop: '15px',
          }}
        >
          If you have your peer&apos;s key, paste it below
        </Typography>

        <Box
          sx={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            borderRadius: '7px',
            width: 'fit-content',
            height: 'fit-content',
            margin: '20px auto 20px auto',
          }}
        >
          <form className="formFindingPair" onSubmit={tryPairingHandler}>
            <TextField
              name="findingPairInput"
              type="text"
              placeholder={!focused && value === '' ? 'Paste here the public key of your peer' : ''}
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

            <Divider sx={{ border: '1px solid #4c4c4c', marginTop: '30px' }} />
            <Box sx={{ margin: 'auto', cursor: 'pointer', marginTop: '30px' }} onClick={copyToClipboard}>
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
            <Button
              sx={{
                width: '100%',
                height: '58px',
                fontFamily: 'Inter',
                fontSize: '16px',
                textTransform: 'none',
                backgroundColor: '#0f4478',
                color: 'white',
                marginTop: '35px',
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
              START CHAT
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '15px',
                cursor: 'pointer',
                width: '100%',
                height: '40px',
                textAlign: 'center',
                fontSize: '16px',
                fontFamily: 'Inter',
              }}
              onClick={closeConnectionHandler}
            >
              CANCEL
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
