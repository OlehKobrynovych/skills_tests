import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorImg from 'src/assets/error-404.svg';

const Error = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
  >
    <Container maxWidth="md">
      <img src={ErrorImg} alt="404" style={{ width: '100%', maxWidth: '100px', marginBottom: '32px' }} />
      <Typography align="center" variant="h1" mb={4}>
        Упс!!!
      </Typography>
      <Typography align="center" variant="h4" mb={4}>
        Сторінку, яку ви шукаєте, не вдалося знайти.
      </Typography>
      <Button 
        component={Link} 
        to="/"
        sx={{
          width: '100%',
          maxWidth: '306px',
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
          }
        }}
      >
        Повернутися на головну сторінку
      </Button>
    </Container>
  </Box>
);

export default Error;
