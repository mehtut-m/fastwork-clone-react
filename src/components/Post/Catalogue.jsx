import { getAllPost } from '../../apis/post';
import { useState, useEffect } from 'react';
import FilterDurationMenu from '../Menu/FilterDurationMenu';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import PostWrapper from './PostWrapper';
import FilterPriceMenu from '../Menu/FilterPriceMenu';

function Catalogue({ posts, categoryInfo }) {
  // Paginations
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / 12);
  const productToShow = posts.slice(currentPage, currentPage + 12);
  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };
  console.log(productToShow);
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
        color="primary"
        sx={{ my: '2rem' }}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      {/* Header */}
      <Box>
        <Typography
          component={'h1'}
          sx={{ fontSize: '1.5rem', textAlign: 'start', mb: '1.75rem' }}
        >
          {categoryInfo.name}
        </Typography>
      </Box>
      {/* Filter Bar */}
      <Box sx={{ display: 'flex', gap: '.5rem', mb: '1.5rem' }}>
        <FilterDurationMenu />
        <FilterPriceMenu />
        <Button
          variant="outlined"
          sx={{ borderColor: '#BBBBBB', color: '#BBB' }}
        >
          ทั้งหมด
        </Button>
      </Box>

      <Typography sx={{ textAlign: 'start', mb: '12px' }}>
        งาน {posts.length} รายการ
      </Typography>

      <PostWrapper post={posts} />

      <Pagination
        count={totalPages}
        variant="outlined"
        color="primary"
        sx={{ m: '2.5rem auto', width: 'max-content' }}
        onChange={handlePaginationChange}
      />
    </Container>
  );
}

export default Catalogue;
