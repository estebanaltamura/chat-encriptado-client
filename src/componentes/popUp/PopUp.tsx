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
    marginTop: '20px',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Inter',
    color: 'black',
    border: '1px solid transparent',
    borderRadius: '10px',
    boxShadow: '1px 2px 5px 0px #5c5c5c',
    '&:hover': {
      backgroundColor: '#0f4478',
      color: '#F09F18',
    },
    '&:focus-visible': {
      outline: 'none',
      textAlign: 'center',
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
        backgroundColor: '#0f4478',
        zIndex: '10',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          top: '20%',
          width: '520px',
          height: 'fit-content',
          padding: '30px 20px',
          margin: 'auto',
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '2px 2px 8px 0px #F09F18',
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
          <img src="https://i.postimg.cc/76bz30BG/logo-Miniatura.jpg" className="logoPopUp" />
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
                marginTop: '10px',
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
                backgroundColor: '#149ad9',
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
                backgroundColor: '#eb5421',
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
                  backgroundColor: '#149ad9',
                }}
                onClick={handlerAccept}
                autoFocus
              >
                {acceptButtonText}
              </Button>
              <Button
                sx={{
                  ...buttonStyles,
                  backgroundColor: '#eb5421',
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
