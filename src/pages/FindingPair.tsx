// ** Hooks imports
import { useFindingPair } from '../hooks/useFindingPair';

// ** Icons Imports
import { AiOutlineCopy } from 'react-icons/ai';

// ** Material UI Imports
import { Box, Button, Typography } from '@mui/material';

// Icons Imports
import { AiOutlineCloseCircle } from 'react-icons/ai';

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

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'fit-content',
          padding: '20px',
          marginTop: '15px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '17px',
            fontWeight: '700',
            fontStyle: 'italic',
            textAlign: 'center',
            width: '100%',
            maxWidth: '550px',
            margin: '2px 0',
          }}
        >
          Share your public key by whatsapp or similar with the person you want and wait for his/her
          invitation
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '24px',
            fontWeight: '900',
            fontStyle: 'italic',
            textAlign: 'center',
            width: '100%',
            maxWidth: '550px',
            margin: '2px 0',
          }}
        >
          or
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '17px',
            fontWeight: '700',
            fontStyle: 'italic',
            textAlign: 'center',
            width: '100%',
            maxWidth: '550px',
            margin: '2px 0',
          }}
        >
          Insert the public key which you received of the person who you want have a private talk and send
          his/her an invitation
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
          margin: '15px auto 20px auto',
        }}
      >
        <form className="formFindingPair" onSubmit={tryPairingHandler}>
          <input
            className="nickNameInputFindingPair"
            type="text"
            name="findingPairInput"
            placeholder="Insert a public key of your peer"
            autoComplete="off"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          ></input>
          <Button
            sx={{
              width: '100%',
              height: '60px',
              marginBottom: '8px',
              fontFamily: 'Montserrat',
              fontSize: '22px',
              backgroundColor: '#0f4478',
              color: '#F09F18',
              border: '1px solid transparent',
              borderRadius: '10px',
              boxShadow: '1px 2px 5px 0px #0f4478',
              fontWeight: '500',
              cursor: 'pointer',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#0f4478',
                color: '#F09F18',
              },
            }}
            type="submit"
          >
            Start chat
          </Button>
          <Box sx={{ margin: 'auto', cursor: 'pointer' }} onClick={copyToClipboard}>
            <AiOutlineCopy className="copyIcon" />
            <Typography
              sx={{
                display: 'inline',
                margin: 'auto',
                fontFamily: 'Montserrat',
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
