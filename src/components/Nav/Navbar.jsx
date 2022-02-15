import { Box, Container } from '@mui/material';
import React from 'react';
import NavWrapper from './NavWrapper';

const categories = [];

function Navbar({ children }) {
  return (
    <Container component="section" sx={{ position: 'relative' }}>
      <NavWrapper />
    </Container>
  );
}

export default Navbar;
