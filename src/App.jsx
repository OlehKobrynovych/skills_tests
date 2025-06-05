import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeSettings } from './theme/Theme';
import RTL from './layouts/full/shared/customizer/RTL';
import ScrollToTop from './components/shared/ScrollToTop';
import Router from './routes/Router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { setIsPhoneModalOpen } from './store/userSlice';
import { useDispatch } from 'react-redux';
import PhoneModal from './components/shared/PhoneModal';

function App() {
  const routing = useRoutes(Router);
  const theme = ThemeSettings();
  const customizer = useSelector((state) => state.customizer);
  const dispatch = useDispatch();
  const isPhoneModalOpen = useSelector((state) => state.userSlice.isPhoneModalOpen);

  return (
    <ThemeProvider theme={theme}>
      <RTL direction={customizer.activeDir}>
        <CssBaseline />
        <ScrollToTop>{routing}</ScrollToTop>
        <PhoneModal 
          open={isPhoneModalOpen} 
          onCancel={() => dispatch(setIsPhoneModalOpen(false))}
        />
      </RTL>
    </ThemeProvider>
  );
}

export default App
