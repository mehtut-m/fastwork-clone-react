import { Box, Typography } from '@mui/material';
import React from 'react';
import PostItem from './PostItem';

function TrendingPost() {
  return (
    <Box>
      {/* Header */}
      <Typography
        component="h3"
        sx={{ fontSize: '2rem', textAlign: 'start', my: '2rem' }}
      >
        ยอดนิยมในหมวด
        <Typography
          component="span"
          sx={{ color: 'primary.main', fontSize: 'inherit' }}
        >
          ออกแบบ Logo
        </Typography>
      </Typography>
      <Box sx={{}}>
        <PostItem sx={{ width: '321px' }} />
        <PostItem sx={{ width: '321px' }} />
        <PostItem sx={{ width: '321px' }} />
        <PostItem sx={{ width: '321px' }} />
      </Box>
    </Box>
  );
}

export default TrendingPost;
