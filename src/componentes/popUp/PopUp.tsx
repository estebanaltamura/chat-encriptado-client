// ** React Imports
import { useEffect } from 'react';

// ** Material UI Imports
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { IPopDataByError } from '../../types';

interface IPopUpProps {
  props: IPopDataByError;
}
/* eslint-disable react/prop-types */
export const PopUp: React.FC<IPopUpProps> = ({ props }) => {
  const buttonStyles = {
    height: '50px',
    width: '270px',
    marginTop: '38px',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Work Sans',
    color: 'white',
    border: '1px solid #8FDEFF',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#1D61CF',

    '&:hover': {
      backgroundColor: '#0f4478',
      color: '#34B9FA',
    },
  };

  const {
    title,
    message,
    type,
    seconds,
    acceptButtonText,
    rejectButtonText,
    handlerAccept,
    handlerReject,
    handlerTimeOut,
    CTAtext,
  } = props;

  useEffect(() => {
    const secondsToMiliSeconds = seconds * 1000;

    const timeOut = setTimeout(() => {
      handlerTimeOut && handlerTimeOut();
    }, secondsToMiliSeconds);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '20px',
        backgroundColor: 'white',
        zIndex: '10',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          top: '20%',
          width: '520px',
          height: 'fit-content',
          padding: '45px 70px',
          margin: 'auto',
          backgroundColor: 'rgba(29,153,206,0.10)',
          border: '1.5px solid #1D61CF',
          borderRadius: '20px',
          zIndex: '20',
          '&:@media (min-width: 768px)': {
            width: '460px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '60px' }}>
            <img className="findingPairLogoImage" src="/logo.png" />
          </Box>
          <Typography
            sx={{
              display: 'flex',
              marginTop: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: '22px',
              fontWeight: '600',
            }}
          >
            {title}
          </Typography>

          {message !== undefined && (
            <Typography
              sx={{
                display: 'flex',
                marginTop: '5px',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'pre-line',
                textAlign: 'center',
              }}
            >
              {message}
            </Typography>
          )}

          {CTAtext !== undefined && (
            <Typography
              sx={{
                display: 'flex',
                marginTop: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: '700',
                whiteSpace: 'pre-line',
              }}
            >
              {CTAtext}
            </Typography>
          )}

          {type === 'oneButtonAccept' ? (
            <Button
              sx={{
                ...buttonStyles,
                backgroundColor: '#1D61CF',
              }}
              onClick={handlerAccept}
              autoFocus
            >
              {acceptButtonText}
            </Button>
          ) : type === 'oneButtonCancel' ? (
            <Button
              sx={{
                ...buttonStyles,
                color: 'black',
                backgroundColor: 'transparent',
                border: '1px solid #1D61CF',
                marginTop: '12px',
              }}
              onClick={handlerReject}
              autoFocus
            >
              {rejectButtonText}
            </Button>
          ) : type === 'twoButtons' ? (
            <>
              <Button
                sx={{
                  ...buttonStyles,
                  backgroundColor: '#1D61CF',
                }}
                onClick={handlerAccept}
                autoFocus
              >
                {acceptButtonText}
              </Button>
              <Button
                sx={{
                  ...buttonStyles,
                  color: 'black',
                  backgroundColor: 'transparent',
                  border: '1px solid #1D61CF',
                  marginTop: '12px',
                }}
                onClick={handlerReject}
              >
                {rejectButtonText}
              </Button>
            </>
          ) : (
            type === 'noButtons' && <></>
          )}
        </Box>
      </Box>
    </Box>
  );
};
