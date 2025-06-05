import { styled, Container, Box, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './vertical/header/Header';
import HorizontalHeader from '../full/horizontal/header/Header';
import Sidebar from './vertical/sidebar/Sidebar';
import Navigation from './horizontal/navbar/Navbar';
import { useEffect } from 'react';
import Footer from '../../components/shared/Footer';
import { setWindowInnerWidth } from '../../store/userSlice';

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  width: '100%',
  backgroundColor: 'transparent',
}));

const FullLayout = () => {
  const customizer = useSelector((state) => state.customizer);
  const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    dispatch(setWindowInnerWidth(window.innerWidth));
  };

  return (
    <MainWrapper
      className={customizer.activeMode === 'dark' ? 'darkbg mainwrapper' : 'mainwrapper'}
      sx={{
        flexDirection: 'column',
      }}
    >
      {/* {
        isPreloader && <PreloaderCustom />
      } */}
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      {customizer.isHorizontal ? '' : <Sidebar />}
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}

      {customizer.isHorizontal ? <HorizontalHeader /> : <Header />}
      {customizer.isHorizontal ? <Navigation /> : ''}
      {/* ------------------------------------------- */}
      {/* {
        location.pathname !== '/buy' &&
          <Box
            component="img"
            src={shop?.banner}
            sx={{
              position: 'absolute',
              left: 0,
              top: { xs: '56px', md: '64px', lg: '70px' },
              width: '100%',
              height: location.pathname === '/' ? { xs: '500px', md: '600px' } : { xs: '300px', md: '350px' }, 
              objectFit: 'cover',
              borderRadius: '0px',
            }}
            alt="banner"
          />
      } */}
      <PageWrapper
        className="page-wrapper"
        sx={{
          margin: '0 auto',
          paddingBottom: '0px',
          // maxWidth: windowInnerWidth < 1200 ? '100%!important' : customizer.isCollapse ? 'calc(100% - 87px)!important' : 'calc(100% - 270px)!important',
          width: '100%',
          maxWidth: windowInnerWidth < 1680 ? '1200px' : '1440px',
          ...(customizer.isCollapse && {
            [theme.breakpoints.up('lg')]: { ml: `${customizer.MiniSidebarWidth}px` },
          }),
        }}
      >
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        {/* {customizer.isHorizontal ? <HorizontalHeader /> : <Header />} */}
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        {/* {customizer.isHorizontal ? <Navigation /> : ''} */}
        <Container
          sx={{
            maxWidth: customizer.isLayout === 'boxed' ? 'lg' : '100%!important',
            pl: customizer.isLayout === 'boxed' ? 6 : 3,
            pr: customizer.isLayout === 'boxed' ? 6 : 3,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* ------------------------------------------- */}
          {/* Page Route */}
          {/* ------------------------------------------- */}
          {/* <Box sx={{ minHeight: 'calc(100vh - 170px)' }}> */}
          {/* <Box sx={{ minHeight: 'calc(100vh - 295px)' }}> */}
          <Box display={'flex'} flexDirection={'column'} pt={'80px'} sx={{ flex: 1 }}>
            <Outlet />
          </Box>
          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}
        </Container>
      </PageWrapper>
      <Footer />
    </MainWrapper>
  );
};

export default FullLayout;
