import { useMediaQuery, Box, Drawer, useTheme } from '@mui/material';
import SidebarItems from './SidebarItems';
import { useSelector, useDispatch } from 'react-redux';
import { hoverSidebar, toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';

const Sidebar = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const customizer = useSelector((state) => state.customizer);
  const shop = useSelector(state => state.userSlice.shop);
  const dispatch = useDispatch();
  const theme = useTheme();
  const toggleWidth =
    customizer.isCollapse && !customizer.isSidebarHover
      ? customizer.MiniSidebarWidth
      : customizer.SidebarWidth;

  const onHoverEnter = () => {
    if (customizer.isCollapse) {
      dispatch(hoverSidebar(true));
    }
  };

  const onHoverLeave = () => {
    dispatch(hoverSidebar(false));
  };

  if (lgUp) {
    return (
      <Box
        sx={{
          width: toggleWidth,
          flexShrink: 0,
          ...(customizer.isCollapse && {
            position: 'absolute',
          }),
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          variant="permanent"
          PaperProps={{
            sx: {
              transition: theme.transitions.create('width', {
                duration: theme.transitions.duration.shortest,
              }),
              width: toggleWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              backgroundColor:
                customizer.activeSidebarBg === '#ffffff' && customizer.activeMode === 'dark'
                  ? customizer.darkBackground900
                  : customizer.activeSidebarBg,
              color: customizer.activeSidebarBg === '#ffffff' ? '' : 'white',
              height: '100%',
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box px={2} pt={2} ml={'15px'}>
              {/* <Logo /> */}
              <img src={shop?.logo} style={{ width: 'auto', height: '40px', objectFit: 'cover' }} alt="logo" />
            </Box>
            {/* <Box ml={3} mt={3} width="40px" height="40px">
              <img src={logo} style={{ width: '100%', height: 'auto' }} alt="logo" />
            </Box> */}
            {/* <Scrollbar sx={{ height: 'calc(100% - 190px)' }}> */}
            <Scrollbar sx={{ height: 'calc(100% - 64px)' }}>
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
            </Scrollbar>
          </Box>
        </Drawer>
      </Box>
    );
  }

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
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box px={1} pt={2} ml={3}>
        {/* <Logo /> */}
        <img src={shop?.logo} style={{ width: 'auto', height: '40px', objectFit: 'cover' }} alt="logo" />
      </Box>
      {/* <Box ml={3} mt={3} width="40px" height="40px">
        <img src={logo} style={{ width: '100%', height: 'auto' }} alt="logo" />
      </Box> */}
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;
