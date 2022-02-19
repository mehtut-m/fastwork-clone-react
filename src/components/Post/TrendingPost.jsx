import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import PostItem from './PostItem';

function TrendingPost() {
  return (
    <Container>
      {/* Header */}
      <Typography
        component="h3"
        sx={{ fontSize: '2rem', textAlign: 'start', my: '2rem' }}
      >
        ยอดนิยมในหมวด
        <Link to="/">
          <Typography
            component="span"
            sx={{ color: 'primary.main', fontSize: 'inherit', ml: '.5rem' }}
          >
            ออกแบบ Logo
          </Typography>
        </Link>
      </Typography>

      <Box sx={{ display: 'flex', gap: '.5rem' }}>
        <PostItem sx={{ width: '321px' }} />
        <PostItem sx={{ width: '321px' }} />
        <PostItem sx={{ width: '321px' }} />
        <PostItem sx={{ width: '321px' }} />
      </Box>
    </Container>
  );
}

export default TrendingPost;
