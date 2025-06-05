import React from 'react';
import { Dialog, IconButton, Typography, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function PhoneModal({ open, onCancel }) {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      PaperProps={{
        sx: {
          overflow: 'visible',
          width: 'calc(100vw - 96px)',
          maxWidth: '300px',
          position: 'relative',
          padding: '20px',
        }
      }}
    >
      <IconButton
        onClick={onCancel}
        sx={{
          position: 'absolute',
          top: -15,
          right: -15,
          padding: '0',
          backgroundColor: '#fff', 
          border: '1px solid #000', 
          boxShadow: '0 0 0 4px #fff',
          color: '#000',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          '&:hover': {
            backgroundColor: '#fff',
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <Typography 
        variant="h6" 
        gutterBottom
        sx={{
          fontSize: '20px',
          fontWeight: '500',
          textAlign: 'center',
          color: '#000'
        }}
      >
        Наш номер:
      </Typography>
      <Typography 
        variant="body1"
        sx={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#000'
        }}
      >
        +380-67-676-69-15
      </Typography>
    </Dialog>
  );
}
