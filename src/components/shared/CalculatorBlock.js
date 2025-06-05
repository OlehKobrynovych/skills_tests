import React, { memo, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import CustomTextField from '../forms/theme-elements/CustomTextField';
import { setIsPhoneModalOpen } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { PHONENUMBER } from '../../helpers/Config';

function CalculatorBlock() {
  
  const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);
  const [area, setArea] = useState('');
  const [price, setPrice] = useState(null);
  const dispatch = useDispatch();

  const handleAreaChange = (event) => {
    const inputArea = event.target.value;
    setArea(inputArea); 
    if (inputArea) {
      const calculatedPrice = inputArea * 1200; 
      setPrice(calculatedPrice); 
    } else {
      setPrice(null); 
    }
  };
   
  return (
    <Box 
      sx={{
        width: '100%',
      }}
    >
      <Typography
        mb='20px'
        sx={{
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '40px',
        color: '#000',
        textAlign: 'center',
        '@media (min-width: 768px)': {
          fontSize: '48px',
          lineHeight: '56px',
          pb:'40px'
        },
        }}
      >
        Ціна робіт
      </Typography>
      <Box 
        sx={{
          width: '100%',
          backgroundColor: 'rgba(243, 250, 253, 1)',
					borderRadius: 0,
          padding: '20px',
					gap: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '@media (min-width: 640px)': {
            flexDirection: 'row',
          }
        }}
      >
        <Box
          sx={{
            width: '100%',
            '@media (min-width: 640px)': {
              width: '50%',
            }
          }}
        >
          <Stack mb={1}>
            <Typography mb={1}>Площа робіт в кв.м</Typography>
            <CustomTextField 
              placeholder="кв.м"
              value={area}
              onChange={handleAreaChange}
              type="number"
              name='area'
            />
          </Stack>
        </Box>
        <Box 
					sx={{
            display: 'flex',
						flexDirection: 'column',
						gap: '30px',
						width: '100%',
            '@media (min-width: 640px)': {
              width: '50%',
            }
					}}
				>
          <Typography
						sx={{
							color:'rgba(17, 16, 0, 1)',
							fontSize: '16px',
							fontWeight: 500,
						}}
					>
						Приблизна ціна
					</Typography>
					<Typography 
						sx={{
							fontSize: '64px',
							fontWeight: 600,
							color:'rgba(255, 175, 2, 1)',
						}}
					>
						₴{price || 0} 
					</Typography>
					<Button 
            onClick={() => {
              if (windowInnerWidth < 640) {
                window.location.href = PHONENUMBER;
              } else {
                dispatch(setIsPhoneModalOpen(true));
              }
            }}
            sx={{
              width: '100%',
              height: '50px',
              backgroundColor: 'rgba(255, 175, 2, 1)',
              color: 'rgba(17, 16, 0, 1)',
              fontSize: '14px',
              fontWeight: 700,
              padding: '20px',
              borderRadius: 0,
              lineHeight: 'unset',
              gap: "10px",
              ':hover': {
                backgroundColor: 'rgba(255, 175, 2, 1)',
                color: 'rgba(17, 16, 0, 1)',
              },
              '@media (min-width: 640px)': {
                width: '306px',
              }
            }}
          >
            <PhoneInTalkIcon /> Замовити
          </Button>

        </Box>
      </Box>
    </Box>
  );
}

export default memo(CalculatorBlock);