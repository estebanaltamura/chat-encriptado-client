// ** Hooks imports
import { useFindingPair } from '../../hooks/useFindingPair';

// ** Icons Imports
import { AiOutlineCopy } from 'react-icons/ai';

// ** Material UI Imports
import { Box, Button, Typography } from '@mui/material';

export const FindingPairForm = () => {
  const { onFocusHandler, onBlurHandler, tryPairingHandler, copyToClipboard, copyPublicKeyText } =
    useFindingPair();

  return (
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
            background: '#0f4478',
            color: '#f8bf5e',
            border: '1px solid transparent',
            borderRadius: '10px',
            boxShadow: '1px 2px 5px 0px #0f4478',
            fontWeight: '500',
            cursor: 'pointer',
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
  );
};
