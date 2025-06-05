import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';
import ourServicesImg1 from '../../assets/ourServicesImg1.webp';
import ourServicesImg2 from '../../assets/ourServicesImg2.webp';
import ourServicesImg3 from '../../assets/ourServicesImg3.png';
import OurServicesCard from './OurServicesCard';

const ourServicesArr = [
  {
    id: 1,
    img: ourServicesImg1,
    description: 'Утеплення будинків',
  },
  {
    id: 2,
    img: ourServicesImg2,
    description: 'Пекриття дахів',
  },
  {
    id: 3,
    img: ourServicesImg3,
    description: 'Суміжні роботи',
  }
]

const OutServicesBlock = () => {

  return (
    <>
      <Box
        sx={{
          width: '100%',
          gap: '20px',
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
          Наші сервіси
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap:'20px',
          }}
        >
          {ourServicesArr.map((card) => (
            <OurServicesCard key={card.id} description={card.description} image={card.img} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default memo(OutServicesBlock);
