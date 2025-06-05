import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { t } from '../../data/data';

const CustomMainButton = ({text='', isStories=false, link='', onClick=() => {}}) => {
  const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);
  const lang = useSelector((state) => state.userSlice.lang);
  return (
    <Button
      variant="outlined"
      component={link ? Link : null}
      to={link}
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '30px',
        width: isStories ? (windowInnerWidth < 768 ? 'calc(100% + 2px)' : 'auto') : (windowInnerWidth < 768 ? '100%' : 'auto'),
        fontSize: isStories ? (windowInnerWidth < 768 ? '21px' : '14px') : '14px',
        height: isStories ? (windowInnerWidth < 768 ? '40px' : '33px') : (windowInnerWidth < 768 ? '40px' : 'auto'),
        fontWeight: 'bold',
        color: 'rgba(2, 2, 2, 1)',
        padding: '1px 20px',
        textTransform: 'uppercase',
        borderRadius: isStories ? (windowInnerWidth < 768 ? '10px' : '30px') : '30px',
        border: isStories ? (windowInnerWidth < 768 ? '1px solid rgba(2, 2, 2, 1)' : '1.4px solid rgba(2, 2, 2, 1)') : (windowInnerWidth < 768 ? '1px solid rgba(2, 2, 2, 1)' : '2.89px solid rgba(2, 2, 2, 1)'),
        transform: isStories ? (windowInnerWidth < 768 ? 'translateY(1px)' : 'translateY(0)') : 'translateY(0)',
        marginRight: isStories ? (windowInnerWidth < 768 ? '-1px' : '0') : '0',
        '&:hover': {
          backgroundColor: 'rgba(2, 2, 2, 1)',
          color: 'white',
          border: isStories ? (windowInnerWidth < 768 ? '1px solid rgba(2, 2, 2, 1)' : '1.4px solid rgba(2, 2, 2, 1)') : (windowInnerWidth < 768 ? '1px solid rgba(2, 2, 2, 1)' : '2.89px solid rgba(2, 2, 2, 1)'),
        },
      }}
    >
      <Typography
        sx={{
          fontSize: isStories ? '21px' : (windowInnerWidth < 768 ? '24px' : '40px'),
          fontWeight: '600',
          textTransform: 'uppercase',
          lineHeight: 'normal',
          transform: 'translateY(-3px)',
        }}
      >
        {!!text?.length ? text : t.watchMore[lang]}
      </Typography>
      <Box
        sx={{
          width: isStories ? '20px' : (windowInnerWidth < 768 ? '20px' : '41px'),
          height: isStories ? '20px' : (windowInnerWidth < 768 ? '20px' : '41px'),
          borderRadius: '50% !important',
          backgroundColor: 'rgba(2, 2, 2, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '.MuiButton-root:hover &': {
            backgroundColor: 'white',
          },
        }}
      >
        <ArrowRightOutlinedIcon
          sx={{
            fill: 'white',
            width: isStories ? '21px' : (windowInnerWidth < 768 ? '21px' : '35px'),
            height: 'auto',
            transition: 'all 0.6s ease',
            transform: 'rotate(0)',
            '.MuiButton-root:hover &': {
              transform: 'rotate(90deg)',
              fill: 'rgba(2, 2, 2, 1)', 
            },
          }}
        />
      </Box>
    </Button>
  );
};

export default CustomMainButton;
