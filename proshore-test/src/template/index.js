import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
const Template = (props)=>{
return(
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <CssBaseline />
    <Nav/>
    {props.children}
   
   <Footer/>
  </Box>
)
}



export default Template;
