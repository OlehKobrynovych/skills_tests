import * as React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Button,
  IconButton,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
// import { toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import logoImg from '../../../../assets/logoImg.svg';
import blackLogoImg from '../../../../assets/blackLogoImg.svg';
import menuImg from '../../../../assets/menuImg.svg';
import { setIsPhoneModalOpen, setIsMenuOpen } from '../../../../store/userSlice';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { scrollToSection } from '../../../../helpers/Utils';
import MenuDrawer from '../../../../components/shared/MenuDrawer';
import { PHONENUMBER } from '../../../../helpers/Config';

const menuItems = [
  { title: 'React' },
  { title: 'Vue' },
];

const Header = () => {
  const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);
  const isOpenMenu = useSelector((state) => state.userSlice.isOpenMenu);

  // drawer
  const customizer = useSelector((state) => state.customizer);
  const dispatch = useDispatch();

  
  
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    margin: '0 auto',
    width: '100%',
    color: `${theme.palette.text.secondary} !important`,
  }));
  

  return (
    <AppBarStyled 
      color="default" 
      elevation={8} 
      sx={{
        
        background: windowInnerWidth < 1100 ? '#fff' : 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {
        isOpenMenu && (
          <Box>
            <MenuDrawer isOpen={isOpenMenu} menuItems={menuItems} />
          </Box>
        )
            
      }
      <ToolbarStyled
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          maxWidth: windowInnerWidth < 1680 ? '1200px' : '1440px',
          width: '100% !important',
          minHeight: '80px !important',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <Box
            onClick={() => {scrollToSection('video');}}
            component={'img'}
            src={windowInnerWidth < 1100 ? blackLogoImg : logoImg}
            sx={{
              width: '70px',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
              cursor: 'pointer',
              borderRadius: 0
            }}
            alt="logo"
          />
        </Box>

        {windowInnerWidth < 1100 ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <IconButton
              onClick={() => window.location.href = PHONENUMBER }
              color="inherit"
              aria-label="phone"
            >
              <PhoneInTalkIcon
                sx={{
                  width: '34px',
                  height: 'auto',
                  color: '#000',
                }}
              />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={() => dispatch(setIsMenuOpen(true))}
            >
              <Box
                component={'img'}
                src={menuImg}
                alt="menu"
                sx={{ width: '40px', height: 'auto', cursor: 'pointer' }}
              />
            </IconButton>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.targetId}
                  onClick={() => scrollToSection(item.targetId)}
                  sx={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#fff',
                    textTransform: 'none',
                    background: 'transparent',
                    padding: 0,
                    minWidth: 'unset',
                    '&:hover': {
                      background: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}

            </Box>
          </>
        )}
        {windowInnerWidth > 1100 && (
          <Button
            variant="contained"
            onClick={() => dispatch(setIsPhoneModalOpen(true))}
            sx={{
              height: '50px',
              fontSize: '16px',
              fontWeight: 500,
              textTransform: 'uppercase',
              borderRadius: '5px',
              lineHeight: 'unset',
              color:'rgba(17, 16, 0, 1)',
              backgroundColor: 'rgba(255, 175, 2, 1)',
              gap: "10px",
              ':hover': {
                backgroundColor: 'rgba(255, 175, 2, 1)',
                color: 'rgba(17, 16, 0, 1)',
              },
            }}
          >
            <PhoneInTalkIcon />  Зателефонуйте нам
          </Button>
        )}
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  toggleSidebar: PropTypes.func,
};

export default Header;