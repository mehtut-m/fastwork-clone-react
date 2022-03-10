import axios from '../../config/axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const initialFilter = {
  min: 0,
  max: '',
  duration: '',
};

function Catalogue({ posts, categoryInfo, setPosts }) {
  const { id } = useParams();
  // Paginations
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(initialFilter);
  const setFilterDuration = (value) => {
    setFilter({ ...filter, duration: value });
  };
  const setFilterMinMax = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  const clearFilter = (e) => {
    setFilter({
      min: 0,
      max: '',
      duration: '',
    });
  };
  const postPage = 12;
  const totalPages = Math.ceil(posts.length / postPage);
  const productToShow = posts.slice(
    (currentPage - 1) * postPage,
    (currentPage - 1) * postPage + postPage
  );

  const submitQuery = async () => {
    let query = '?';
    for (const item in filter) {
      if (filter[item] !== '') {
        query = `${query}${item}=${filter[item]}&`;
      }
    }
    const res = await axios
      .get(`/post/filter/${id}${query}`)
      .catch((err) => console.log(err));
    setPosts(res.data.post);
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    submitQuery()
      .then((res) => setPosts(res.data.post))
      .catch((err) => console.log(err));
  }, [filter]);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to={`/category/`}>
      ประเภทงานทั้งหมด
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to={`/sub-category/${categoryInfo?.id}`}
    >
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
        <FilterDurationMenu
          filter={filter}
          setFilterDuration={setFilterDuration}
          submitQuery={submitQuery}
          clearFilter={clearFilter}
        />
        <FilterPriceMenu
          filter={filter}
          setFilterMinMax={setFilterMinMax}
          submitQuery={submitQuery}
          clearFilter={clearFilter}
        />
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

      <PostWrapper post={productToShow} />

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
