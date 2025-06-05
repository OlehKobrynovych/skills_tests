import React, { useState } from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

const OurServicesCard = ({ description, image }) => {
  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: 'rgba(243, 250, 253, 1)',
        overflow: 'hidden',
        padding: '0px',
        cursor: 'pointer',
        '@media (min-width: 640px)': {
          width: 'calc(50% - 10px)',
        },
        '@media (min-width: 960px)': {
          width: 'calc(32.9% - 10px)',
        }
      }}
    >
      <CardContent
        sx={{
          textAlign: 'center',
        }}
      >
        <Box 
          component="img"
          src={image}
          alt="img"
          sx={{
            width: '100%',
          }} 
        />
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            textTransform: 'capitalize',
            marginTop: '20px',
            color: 'rgba(17, 16, 0, 1)',
            '@media (min-width: 768px)': {
              fontSize: '20px',
            },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OurServicesCard;
