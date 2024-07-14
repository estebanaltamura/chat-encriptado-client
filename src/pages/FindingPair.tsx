// ** React Imports
import { useContext } from 'react';

// Hooks Imports
import { useFindingPair } from '../hooks/useFindingPair';

// Icons Imports
import { AiOutlineCloseCircle } from 'react-icons/ai';

// ** Component Imports
import { FindingPairForm } from '../componentes/findingPairForm/FindingPairForm';

// ** Material UI Imports
import { Box, Typography } from '@mui/material';

export const FindingPair: React.FC = () => {
  const { closeConnectionHandler } = useFindingPair();

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

      <FindingPairForm />
    </Box>
  );
};
