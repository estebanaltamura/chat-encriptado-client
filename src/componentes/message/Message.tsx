import React from 'react';

// ** Material Imports
import { Box, Typography } from '@mui/material';

interface IMessageProps {
  message: string;
  type: string;
  time: string;
}

export const Message: React.FC<IMessageProps> = ({ message, type, time }) => {
  return (
    <Box
      sx={{
        display: 'block',
        width: '100%',
        height: 'fit-content',
        marginTop: '15px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          paddingLeft: '15px',
          justifyContent: type === 'messageReceived' ? 'left' : 'right',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'right',
            width: 'fit-content',
            height: 'fit-content',
            padding: '6px 17px 15px 8px',
            boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)',
            borderRadius: '10px',
            backgroundColor: type === 'messageReceived' ? '#b9b9b9' : '#7BACDD',
          }}
        >
          <Typography
            sx={{
              display: 'inline-block',
              fontSize: '14px',
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
              height: 'auto',
              overflowWrap: 'anywhere',
              width: 'fit-content',
              maxWidth: 'min(70vw, 650px)',
              userSelect: 'text',
            }}
          >
            {message}
          </Typography>
          <Typography
            sx={{
              position: 'absolute',
              height: 'fit-content',
              width: 'fit-content',
              bottom: '1px',
              right: '5px',
              fontSize: '11px',
            }}
          >
            {time}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
