import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Typewriter from 'typewriter-effect';

function HeroBanner() {
  const categories = [
    'Graphic & Design',
    'การตลาดและโฆษณา',
    'เขียนและแปลภาษา',
    'ภาพและเสียง',
    'Web & Programming',
    'ปรึกษาแนะนำ',
    'จัดการร้านค้าออนไลน์',
  ];
  return (
    <Container
      sx={{
        background:
          'linear-gradient(90.3deg, #FF6A95 -0.98%, rgba(255, 106, 149, 0.63) -0.97%, #B67BFD 79.83%)',
        color: '#fff',

        width: '100vw',
        maxWidth: 'unset',
      }}
      style={{ maxWidth: 'unset' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
          height: '400px',
        }}
      >
        <Typography component="h2" sx={{ fontSize: '1.5rem' }}>
          เรามีฟรีแลนซ์มืออาชีพด้าน...
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          sx={{ fontSize: '3rem', fontWeight: 500 }}
        >
          <Typewriter
            options={{
              strings: categories,
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        <Typography sx={{ fontSize: '1.125rem' }}>
          ที่พร้อมเปลี่ยนไอเดียของคุณให้เป็นความจริง
        </Typography>
      </Box>
    </Container>
  );
}

export default HeroBanner;
