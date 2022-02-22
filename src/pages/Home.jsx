import { Box } from '@mui/material';
import HeroBanner from '../components/Hero/HeroBanner';
import Navbar from '../components/Nav/Navbar';
import TrendingPost from '../components/Post/TrendingPost';

function Home() {
  return (
    <Box sx={{}}>
      <HeroBanner />
      <Navbar />
      <TrendingPost categoryId={1} />
      <TrendingPost categoryId={6} />
    </Box>
  );
}

export default Home;
