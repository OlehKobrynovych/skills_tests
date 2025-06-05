import { useMediaQuery, Box, Drawer, Container } from '@mui/material';
import NavListing from './NavListing/NavListing';
// import Logo from '../../shared/logo/Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import SidebarItems from '../../vertical/sidebar/SidebarItems';
import CloseIcon from '@mui/icons-material/Close';
// import { onHoverLeave } from 

const Navigation = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const customizer = useSelector((state) => state.customizer);
  const shop = useSelector(state => state.userSlice.shop);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleMobileSidebar());
  };

  return (
    <Drawer
      anchor="left"
      open={customizer.isMobileSidebar}
      onClose={() => dispatch(toggleMobileSidebar())}
      variant="temporary"
      PaperProps={{
        sx: {
          width: customizer.SidebarWidth,
          backgroundColor:
            customizer.activeMode === 'dark'
              ? customizer.darkBackground900
              : customizer.activeSidebarBg,
          color: customizer.activeSidebarBg === '#ffffff' ? '' : 'white',
          border: '0 !important',
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      <CloseIcon  
      onClick={handleClose}
      sx={{
        color:'#555',
        position:'absolute',
        right:'5px',
        top:'5px',
        cursor:'pointer',
        fontSize:'30px'
      }}
      />
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box px={2}>
        {/* <Logo /> */}
        <img src={shop?.logo} style={{ display: 'block', width: 'auto', maxHeight: '45px', height: 'auto', objectFit: 'cover', margin: '0 auto'  }} alt="logo" />
      </Box>
    </Drawer>
  );
};

export default Navigation;
