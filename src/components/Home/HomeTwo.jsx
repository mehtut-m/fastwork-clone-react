import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import logoPeople from '../../assets/group-people.svg';
import logoShield from '../../assets/shield.svg';
import logoPaper from '../../assets/paper.svg';

function HomeTwo() {
  return (
    <Container
      sx={{
        width: '70vw',
        maxWidth: 'unset',
      }}
    >
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          sx={{ textAlign: 'start', fontSize: '1.5rem' }}
        >
          ทำไมถึงต้องใช้ Fastwork?
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          sx={{
            textAlign: 'start',
            mt: 3,
            fontSize: '2rem',
            color: 'rgba(121, 0, 255, 1)',
          }}
        >
          เพราะเราเปลี่ยนไอเดียของคุณให้เป็นความจริง ด้วยฟรีแลนซ์มืออาชีพ
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 8,
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '1rem',
          fontSize: '1rem',
        }}
      >
        <Box>
          <Typography component="h2" variant="h5">
            <img src={logoPeople} alt="logo" width={120} />
          </Typography>

          <Typography sx={{ fontSize: '1.25rem', mt: 2, mb: 2 }}>
            ฟรีแลนซ์คุณภาพอันดับ 1
          </Typography>
          <p>
            ฟรีแลนซ์ผ่านการคัดเลือก และยืนยันตัวตน กับ Fastwork สามารถตรวจสอบได้
          </p>
        </Box>
        <Box>
          <Typography component="h2" variant="h5">
            <img src={logoShield} alt="logo" width={120} />
          </Typography>
          <Typography sx={{ fontSize: '1.25rem', mt: 2, mb: 2 }}>
            รับประกันการจ้างงาน
          </Typography>
          <p>
            เงินของคุณจะได้รับความคุ้มครองตั้งแต่ฟรีแลนซ์เริ่มทํางานไปจนถึงได้รับงานที่พอใจ
          </p>
        </Box>

        <Box>
          <Typography component="h2" variant="h5">
            <img src={logoPaper} alt="logo" width={120} height={120} />
          </Typography>

          <Typography sx={{ fontSize: '1.25rem', mt: 2, mb: 2 }}>
            มีบริการที่หลากหลายให้เลือก
          </Typography>
          <p>
            มีฟรีแลนซ์หลากหลายที่พร้อมให้บริการกว่า 150,000 คน จากกว่า 70
            หมวดหมู่
          </p>
        </Box>
      </Box>
    </Container>
  );
}

export default HomeTwo;
