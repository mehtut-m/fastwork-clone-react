import { Box } from '@mui/material';
import CategoryItem from './CategoryItem';
import WritingIcon from '../../assets/writing.svg';
import MarketingIcon from '../../assets/marketing.svg';
import GraphicIcon from '../../assets/graphic.svg';
import ProgrammingIcon from '../../assets/programming.svg';
import ConsultantIcon from '../../assets/consultant.svg';
import VideoIcon from '../../assets/video.svg';
import EcommerceIcon from '../../assets/ecommerce.svg';
import TrendingIcon from '../../assets/trending.svg';
import SubCategoryMenu from './SubCategoryMenu';

const categories = [
  { name: 'เทรนด์มาแรง', path: '0', icon: TrendingIcon },
  { name: 'Graphic & Design', path: '1', icon: GraphicIcon },
  { name: 'การตลาดและโฆษณา', path: '2', icon: MarketingIcon },
  { name: 'เขียนและแปลภาษา', path: '3', icon: WritingIcon },
  { name: 'ภาพและเสียง', path: '4', icon: VideoIcon },
  { name: 'Web & Programming', path: '5', icon: ProgrammingIcon },
  { name: 'ปรึกษาแนะนำ', path: '6', icon: ConsultantIcon },
  { name: 'จัดการร้านค้าออนไลน์', path: '7', icon: EcommerceIcon },
];
function NavWrapper({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        boxShadow: '0 0 1.5rem 0 rgb(25 72 142 / 15%)',
        borderBottomLeftRadius: '.5rem',
        borderBottomRightRadius: '.5rem',
        pb: '1rem',
      }}
    >
      <Box
        component="nav"
        sx={{
          backgroundColor: '#fff',
          borderTopLeftRadius: '.5rem',
          borderTopRightRadius: '.5rem',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          marginTop: '-4.5rem',
          minHeight: 'max-content',
          width: '100%',
          maxWidth: '1216px',
          px: '2rem',
        }}
      >
        {categories.map((item, index) => (
          <CategoryItem key={index} item={item} />
        ))}
      </Box>
      <SubCategoryMenu />
    </Box>
  );
}

export default NavWrapper;
