import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import PostWrapper from '../components/Post/PostWrapper';

function Post() {
  const handleClick = () => {};
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      to="/"
      onClick={handleClick}
    >
      ประเภทงานทั้งหมด
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to="/getting-started/installation/"
      onClick={handleClick}
    >
      Graphic & Design
    </Link>,
    <Typography key="3" color="text.primary">
      ออกแบบตกแต่งภายในและภายนอก
    </Typography>,
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
          ออกแบบตกแต่งภายในและภายนอก
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

      <Typography sx={{ textAlign: 'start' }}>งาน 293 รายการ</Typography>

      <PostWrapper />

      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        sx={{ m: '2.5rem auto', width: 'max-content' }}
      />
    </Container>
  );
}

export default Post;
