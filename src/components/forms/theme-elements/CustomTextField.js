import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    fontSize: '14px', 

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[300], 
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[300],
    },
  },

  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
    fontSize: '14px',
    padding: 0,
  },

  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },

  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));

export default CustomTextField;
