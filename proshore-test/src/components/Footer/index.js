import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Footer = ()=>{
    return(
        <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
           Technical Test
          </Typography>
          <Copyright />
        </Container>
      </Box>
    )
}

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" to="/">
         Spell Listing App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default Footer;