import React from 'react';
import { Box, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import { useSelector } from 'react-redux';


function HomeView() {
  const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);

  return (
    <PageContainer title={'Львівська Ротонда'} description={'Львівська Ротонда - Професійні послуги утеплення фасадів у Львові. Пропонуємо енергоефективні рішення для вашого дому чи офісу.'} keywords={'утеплення фасадів, фасади Львів, енергоефективність, ремонт фасадів, теплоізоляція, фасадні роботи Львів'}>
      
    </PageContainer>
  );
}

export default HomeView;
