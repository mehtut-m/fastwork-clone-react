import { getAllPost } from '../../apis/post';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import PostWrapper from './PostWrapper';

function Catalogue({ posts, categoryInfo }) {
  console.log('--------_>', categoryInfo.id);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to={`/category/`}>
      ประเภทงานทั้งหมด
    </Link>,
    <Link underline="hover" key="2" color="inherit" to={`/sub-category/`}>
      {categoryInfo?.Category?.name}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to={`/sub-category/${categoryInfo.id}`}
    >
      {categoryInfo.name}
    </Link>,
  ];
  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{ color: 'primary.main' }}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      {/* Header */}
      <Box>
        <Typography
          component={'h1'}
          sx={{ fontSize: '1.5rem', textAlign: 'start' }}
        >
          {categoryInfo.name}
        </Typography>
      </Box>
      {/* Filter Bar */}
      <Box sx={{ display: 'flex' }}>
        <Button
          variant="outlined"
          sx={{ borderColor: '#BBBBBB', color: '#BBB' }}
        >
          ระยะเวลา
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: '#BBBBBB', color: '#BBB' }}
        >
          ช่วงราคา
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: '#BBBBBB', color: '#BBB' }}
        >
          ทั้งหมด
        </Button>
      </Box>

      <Typography sx={{ textAlign: 'start' }}>
        งาน {posts.length} รายการ
      </Typography>

      <PostWrapper post={posts} />

      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        sx={{ m: '2.5rem auto', width: 'max-content' }}
      />
    </Container>
  );
}

export default Catalogue;
