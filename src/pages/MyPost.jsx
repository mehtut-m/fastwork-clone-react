import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AvailablePost from '../components/Post/AvailablePost';
import PostItem from '../components/Post/PostItem';

function MyPost() {
  return (
    <Container component="main">
      <Typography
        sx={{
          color: 'primary.main',
          fontSize: '1.5rem',
          fontWeight: '600',
          textAlign: 'start',
        }}
      >
        งานที่พร้อมแสดง (0)
      </Typography>

      <Box>
        <AvailablePost />
      </Box>

      <Typography
        sx={{
          color: 'primary.main',
          fontSize: '1.5rem',
          fontWeight: '600',
          textAlign: 'start',
        }}
      >
        ฉบับร่างที่ยังไม่ได้ส่งเพื่ออนุมัติ ( 4 )
      </Typography>

      {/*  */}

      <Typography
        sx={{
          color: 'primary.main',
          fontSize: '1.5rem',
          fontWeight: '600',
          textAlign: 'start',
        }}
      >
        งานทั้งหมด ( 2 )
      </Typography>
    </Container>
  );
}

export default MyPost;
