import { Box, Container } from '@mui/material';
import React from 'react';
import NavWrapper from './NavWrapper';

function Navbar({ children }) {
  return (
    <Container
      component="section"
      sx={{ position: 'relative', margin: 'auto' }}
    >
      <NavWrapper />
    </Container>
  );
}

export default Navbar;
