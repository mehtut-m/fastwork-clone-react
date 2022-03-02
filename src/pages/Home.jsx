import { Box } from '@mui/material';
import HeroBanner from '../components/Hero/HeroBanner';
import Footer from '../components/Home/Footer';
import HomeTwo from '../components/Home/HomeTwo';
import UserReview from '../components/Home/UserReview';
import Navbar from '../components/Nav/Navbar';
import TrendingPost from '../components/Post/TrendingPost/TrendingPost';

function Home() {
  return (
    <Box sx={{}}>
      <HeroBanner />
      <Navbar />
      <HomeTwo />
      <TrendingPost categoryId={1} />
      <TrendingPost categoryId={7} />
      <UserReview />
      <Footer />
    </Box>
  );
}

export default Home;
