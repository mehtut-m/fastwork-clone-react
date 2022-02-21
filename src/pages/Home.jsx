import { Box } from '@mui/material';
import HeroBanner from '../components/Hero/HeroBanner';
import Navbar from '../components/Nav/Navbar';
import TrendingPost from '../components/Post/TrendingPost';

function Home() {
  return (
    <Box sx={{}}>
      <HeroBanner />
      <Navbar />
      <TrendingPost />
      <TrendingPost />
    </Box>
  );
}

export default Home;
