import { Box, Container } from '@mui/material';
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
      }}
    >
      เรามีฟรีแลนซ์มืออาชีพด้าน...
      <Typewriter
        options={{
          strings: categories,
          autoStart: true,
          loop: true,
          pauseFor: 1250,
        }}
      />
      ที่พร้อมเปลี่ยนไอเดียของคุณให้เป็นความจริง
    </Container>
  );
}

export default HeroBanner;
