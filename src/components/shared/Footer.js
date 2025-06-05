import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Footer = () => {
  
  const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);
  const dispatch = useDispatch();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        borderRadius: 0,
      }}
    >
      
    </Box>
  );
};
export default Footer;
