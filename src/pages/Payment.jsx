import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Payment() {
  return (
    <Container sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          pt: '150px',
          px: '20px',
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontSize: '1.5rem',
            textAlign: 'start',
            mb: '1.25rem',
          }}
        >
          รายการที่ต้องชำระ
        </Typography>

        <Box
          sx={{
            background: '#fff',
            borderRadius: '.5rem',
            px: '.75rem',
            textAlign: 'start',
          }}
        >
          ที่ปรึกษา ทำ ตลาดจีน ส่งออกจีน โดยนักธรุกิจ จีน ประสบการณ์ตั้งแต่ปี
          2545
          <Box
            sx={{
              background: 'rgba(196, 196, 196, 0.25)',
              p: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>ราคางาน</Box>
            <Box>250 บาท</Box>
          </Box>
          <Box
            sx={{
              background: 'rgba(196, 196, 196, 0.25)',
              p: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>ยอดชำระค่าจ้างงาน</Box>
            <Box>250 บาท</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: '10px',
            }}
          >
            <Box>จำนวนที่ต้องชำระ</Box>
            <Box>250 บาท</Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: '100%' }}></Box>
    </Container>
  );
}

export default Payment;
