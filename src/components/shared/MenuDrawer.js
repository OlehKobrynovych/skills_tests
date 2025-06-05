import React from 'react';
import { Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMenuOpen } from '../../store/userSlice';
import { scrollToSection } from '../../helpers/Utils';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'; 
import { PHONENUMBER } from '../../helpers/Config';

const MenuDrawer = ({ isOpen, menuItems }) => {

	const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setIsMenuOpen(false));
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: isOpen ? 0 : '-100%',
        width: '100%',
        maxWidth: '400px',
        height: '100vh',
        backgroundColor: '#fff',
        zIndex: 1300,
        transition: 'right 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 20px',
				borderRadius: 0,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={handleClose}>
          <CloseIcon sx={{ fontSize: '42px', color: '#000' }} />
        </IconButton>
      </Box>

			<Box sx={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
				{menuItems.map((item) => (
					<Button
						key={item.targetId}
						onClick={() => {
							scrollToSection(item.targetId);
							handleClose();
						}}
						sx={{
							justifyContent: 'flex-start',
							color: '#000',
							fontSize: '32px',
							fontWeight: 600,
							textTransform: 'none',
							padding: 0,
							background: 'transparent',
							'&:hover': {
								textDecoration: 'underline',
								backgroundColor: '#fff',
								color: '#000',
							},
						}}
					>
						{item.title}
					</Button>
				))}
			</Box>
			<Button
				variant="contained"
				onClick={() => {
					if (windowInnerWidth < 640) {
					window.location.href = PHONENUMBER;
					} else {
					dispatch(setIsPhoneModalOpen(true));
					}
				}}
				sx={{
					position: 'absolute',
					height: '50px',
					bottom: '20px',
					left: '20px',
					right: '20px',
					fontSize: '16px',
					fontWeight: 500,
					textTransform: 'uppercase',
					borderRadius: 0,
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
    </Box>
  );
};

export default MenuDrawer;
