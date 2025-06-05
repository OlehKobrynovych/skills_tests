import * as React from 'react';
import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 40,
  height: 40,
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 175, 2, 1)',

  '.Mui-focusVisible &': {
    outline: `0px auto ${theme.palette.grey[300]}`,
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: 'transparent',
  },
  'input:disabled ~ &': {
    background: theme.palette.grey[100],
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  '&:before': {
    display: 'block',
    width: 40,
    height: 40,
    content: '""',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8," +
      "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E" +
      "%3Cpath fill='rgba(255, 175, 2, 1)' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3" +
      "a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5" +
      "A1.003 1.003 0 0012 5z'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '90%',
  },
});

function CustomCheckbox(props) {
  return (
    <Checkbox
      disableRipple
      icon={<BpIcon />}
      checkedIcon={<BpCheckedIcon />}
      inputProps={{ 'aria-label': 'custom checkbox' }}
      {...props}
    />
  );
}

export default CustomCheckbox;
