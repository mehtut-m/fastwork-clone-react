import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
function HomeTwo() {
  return (
    <Container
      sx={{
        width: '70vw',
        maxWidth: 'unset',
      }}
      style={{ maxWidth: 'unset' }}
    >
      <Box
        sx={{
          mt: 5,
          boxShadow: '4px 4px 18px 0px rgba(0,0,0,0.25);',
          borderRadius: '0.5rem',
        }}
      >
        <Typography
          component="h2"
          sx={{ textAlign: 'start', fontSize: '1.5rem' }}
        >
          ทำไมถึงต้องใช้ Fastwork?
        </Typography>
        <Typography
          component="h2"
          sx={{
            textAlign: 'start',
            fontSize: '2rem',
            color: 'rgba(121, 0, 255, 1)',
          }}
        >
          เพราะเราเปลี่ยนไอเดียของคุณให้เป็นความจริง ด้วยฟรีแลนซ์มืออาชีพ
        </Typography>
        <Box
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '1rem',
            height: '200px',
          }}
        >
          <Typography component="h2" sx={{ fontSize: '1.25rem' }}>
            ฟรีแลนซ์คุณภาพอันดับ 1 <span>test</span>
          </Typography>
          <Typography component="h2" sx={{ fontSize: '1.25rem' }}>
            รับประกันการจ้างงาน
          </Typography>
          <Typography component="h2" sx={{ fontSize: '1.25rem' }}>
            มีบริการที่หลากหลายให้เลือก
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography component="h2" sx={{ fontSize: '1.5rem' }}></Typography>
        <Typography
          component="h1"
          variant="h1"
          sx={{ fontSize: '3rem', fontWeight: 500 }}
        ></Typography>
        <Typography sx={{ fontSize: '1.125rem' }}></Typography>
      </Box>
    </Container>
  );
}

export default HomeTwo;
