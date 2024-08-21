// ** Hooks imports
import { useFindingPair } from '../hooks/useFindingPair';

// ** Icons Imports
import { AiOutlineCopy } from 'react-icons/ai';

// ** Material UI Imports
import { Box, Button, Divider, TextField, Typography } from '@mui/material';

// Icons Imports
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ContentCopy } from '@mui/icons-material';

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
        padding: '25px 40px',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '20px',
        margin: '70px 0',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '120px' }}>
        <img className="findingPairLogoImage" src="/logo.png" style={{ height: '100%' }} />
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
          marginTop: '25px',
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
            4
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
            Copiá la clave pública de uno de los usuarios, que se encuentra debajo, y pegala en el navegador
            contrario en la sección de “pegá aca la clave pública”{' '}
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
            5
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
            En el navegador donde pegaste la clave, clickeá “enviar invitación”
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
            6
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
            Aceptá la invitación en el navegador contrario
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
            7
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
            Ya podés empezar a chatear
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '30px',
          backgroundColor: 'rgba(29,97,207,0.05)',
          borderRadius: '20px',
          padding: '30px 40px',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Work Sans',
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: '500',
            textAlign: 'center',
            width: '100%',
            maxWidth: '450px',
          }}
        >
          Hay dos metodos para usar Encryted chat
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            justifyContent: 'center',
            borderRadius: '7px',
            width: 'fit-content',
            height: 'fit-content',
            margin: '20px auto 0 auto',
          }}
        >
          {/* Paso 1 */}
          <Box
            sx={{
              display: 'flex',
              border: '1px solid #1D61CF',
              borderRadius: '10px',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '64px',
                minWidth: '64px',
                minHeight: '100%',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
                backgroundColor: 'rgba(29,153,206,0.20)',
              }}
            >
              <Typography
                sx={{ fontFamily: 'Work Sans', fontSize: '14px', fontWeight: '500', color: '#1D61CF' }}
              >
                Metodo
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Work Sans',
                  fontSize: '34px',
                  lineHeight: '38px',
                  fontWeight: '700',
                  color: '#1D61CF',
                }}
              >
                1
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 40px',
                backgroundColor: 'white',
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Work Sans',
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: '500',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                Copiá tu clave pública, compartila con el destinatario y esperá su invitación
              </Typography>

              <Button
                onClick={copyToClipboard}
                endIcon={<ContentCopy />}
                sx={{
                  display: 'flex',
                  border: '1px solid #1D61CF',
                  borderRadius: '5px',
                  padding: '10px',
                  marginTop: '19px',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    lineHeight: '18px',
                    fontFamily: 'Work Sans',
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#1D61CF',
                    textTransform: 'none',
                  }}
                >
                  {copyPublicKeyText}
                </Typography>
              </Button>
            </Box>
          </Box>

          <Divider sx={{ border: '1px dotted #4c4c4c', marginTop: '30px' }} />

          {/* Paso 2 */}

          <Box sx={{ display: 'flex', border: '1px solid #1D61CF', borderRadius: '10px', marginTop: '30px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '64px',
                minWidth: '64px',
                minHeight: '100%',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
                backgroundColor: 'rgba(29,153,206,0.20)',
              }}
            >
              <Typography
                sx={{ fontFamily: 'Work Sans', fontSize: '14px', fontWeight: '500', color: '#1D61CF' }}
              >
                Metodo
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Work Sans',
                  fontSize: '34px',
                  lineHeight: '38px',
                  fontWeight: '700',
                  color: '#1D61CF',
                }}
              >
                2
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 40px',
                backgroundColor: 'white',
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Work Sans',
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: '500',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                Pegá abajo la clave pública que te compartieron y presioná &apos;enviar invitación&apos;
              </Typography>
              <form className="formFindingPair" onSubmit={tryPairingHandler}>
                <TextField
                  name="findingPairInput"
                  type="text"
                  placeholder={!focused && value === '' ? 'Pegá aca la clave pública' : ''}
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

                <Button
                  disabled={!value}
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
                    '&.Mui-disabled': {
                      backgroundColor: '#E0E0E0', // Gris claro
                      color: '#A0A0A0', // Gris oscuro
                      borderColor: '#E0E0E0', // Opcional: cambiar el borde también
                    },
                  }}
                  type="submit"
                >
                  ENVIAR INVITACION
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
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
          fontFamily: 'Work Sans',
        }}
        onClick={closeConnectionHandler}
      >
        VOLVER
      </Box>
    </Box>
  );
};
