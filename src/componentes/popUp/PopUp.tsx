// ** React Imports
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

interface PopUpProps {
  title: string;
  message: string;
  type: string;
  seconds: number;
  acceptButtonText?: string;
  rejectButtonText?: string;
  handlerAccept?: () => void;
  handlerReject?: () => void;
  handlerTimeOut: () => void;
  CTAtext?: string;
}

export const PopUp = ({
  title,
  message,
  type,
  CTAtext,
  acceptButtonText,
  rejectButtonText,
  seconds,
  handlerAccept,
  handlerReject,
  handlerTimeOut,
}: PopUpProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const gridStyles = {
    oneButtonAccept: {
      display: 'grid',
      height: 'auto',
      width: '100%',
      gridTemplateColumns: '100%',
      gridTemplateRows: isDesktop ? '80px 50px auto auto 60px' : '80px 80px auto auto 60px',
      gridTemplateAreas: `
        "logo"
        "titulo"
        "mensaje"
        "CTA"
        "boton2"
      `,
    },
    oneButtonCancel: {
      display: 'grid',
      height: 'auto',
      width: '100%',
      gridTemplateRows: isDesktop ? '80px 50px auto auto 60px' : '80px 80px auto auto 60px',
      gridTemplateAreas: `
        "logo"
        "titulo"
        "mensaje"
        "CTA"
        "boton1"
      `,
    },
    noButtons: {
      display: 'grid',
      height: 'auto',
      width: '100%',
      gridTemplateColumns: '100%',
      gridTemplateRows: isDesktop ? '80px 50px auto' : '80px 80px auto',
      gridTemplateAreas: `
        "logo"
        "titulo"
        "mensaje"
      `,
    },
    twoButtons: {
      display: 'grid',
      height: 'auto',
      width: '100%',
      gridTemplateColumns: '100%',
      gridTemplateRows: isDesktop ? '80px 50px auto auto 60px 60px' : '80px 80px auto auto 60px 60px',
      gridTemplateAreas: `
        "logo"
        "titulo"
        "mensaje"
        "CTA"
        "boton1"
        "boton2"
      `,
    },
  };

  useEffect(() => {
    const secondsToMiliSeconds = seconds * 1000;

    const timeOut = setTimeout(() => {
      handlerTimeOut();
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
          zIndex: '2',
          margin: 'auto',
          padding: '20px',
          top: '20%',
          maxWidth: '100%',
          width: '320px',
          height: 'fit-content',
          backgroundolor: 'white',
          borderRadius: '20px',
          boxShadow: '6px 6px 10px 0px #f8bf5e',
          '&:@media (min-width: 768px)': {
            width: '460px',
          },
        }}
      >
        <Box sx={gridStyles[type]}>
          <img src="https://i.postimg.cc/76bz30BG/logo-Miniatura.jpg" className="logoPopUp" />
          <Typography sx={{}}>{title}</Typography>

          {message !== undefined && (
            <Typography
              sx={{
                gridArea: 'mensaje',
                display: 'flex',
                whiteSpace: 'pre-line',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 0',
              }}
            >
              {message}
            </Typography>
          )}

          {CTAtext !== undefined && (
            <Typography
              sx={{
                gridArea: 'CTA',
                display: 'flex',
                whiteSpace: 'pre-line',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                padding: '5px 0 10px 0',
              }}
            >
              {CTAtext}
            </Typography>
          )}

          {type === 'oneButtonAccept' ? (
            <Button
              sx={{
                gridArea: 'boton2',
                backgroundColor: '#149ad9',
                margin: 'auto',
                height: '50px',
                width: '100%',
                maxWidth: '270px',
                fontWeight: '500',
                fontSize: '20px',
                fontFamily: 'Montserrat',
                border: '1px solid transparent',
                borderRadius: '10px',
                boxShadow: '1px 2px 5px 0px #5c5c5c',
                '&:focus-visible': {
                  outline: 'none',
                  textAlign: 'center',
                },
              }}
              onClick={handlerAccept}
              autoFocus
            >
              {acceptButtonText}
            </Button>
          ) : type === 'oneButtonCancel' ? (
            <Button
              sx={{
                gridArea: 'boton1',
                backgroundColor: '#eb5421',
                margin: 'auto',
                height: '50px',
                width: '100%',
                maxWidth: '270px',
                fontWeight: '500',
                fontSize: '20px',
                fontFamily: 'Montserrat',
                border: '1px solid transparent',
                borderRadius: '10px',
                boxShadow: '1px 2px 5px 0px #5c5c5c',
                '&:focus-visible': {
                  outline: 'none',
                  textAlign: 'center',
                },
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
                  gridArea: 'boton1',
                  backgroundColor: '#eb5421',
                  margin: 'auto',
                  height: '50px',
                  width: '100%',
                  maxWidth: '270px',
                  fontWeight: '500',
                  fontSize: '20px',
                  fontFamily: 'Montserrat',
                  border: '1px solid transparent',
                  borderRadius: '10px',
                  boxShadow: '1px 2px 5px 0px #5c5c5c',
                  '&:focus-visible': {
                    outline: 'none',
                    textAlign: 'center',
                  },
                }}
                onClick={handlerReject}
              >
                {rejectButtonText}
              </Button>
              <Button
                sx={{
                  gridArea: 'boton2',
                  backgroundColor: '#149ad9',
                  margin: 'auto',
                  height: '50px',
                  width: '100%',
                  maxWidth: '270px',
                  fontWeight: '500',
                  fontSize: '20px',
                  fontFamily: 'Montserrat',
                  border: '1px solid transparent',
                  borderRadius: '10px',
                  boxShadow: '1px 2px 5px 0px #5c5c5c',
                  '&:focus-visible': {
                    outline: 'none',
                    textAlign: 'center',
                  },
                }}
                onClick={handlerAccept}
                autoFocus
              >
                {acceptButtonText}
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
