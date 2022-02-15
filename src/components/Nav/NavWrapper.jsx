import { Box } from '@mui/material';
import CategoryItem from './CategoryItem';

const categories = [
  { name: 'Graphic & Design', path: '/' },
  { name: 'การตลาดและโฆษณา', path: '/' },
  { name: 'เขียนและแปลภาษา', path: '/' },
  { name: 'ภาพและเสียง', path: '/' },
  { name: 'Web & Programming', path: '/' },
  { name: 'ปรึกษาแนะนำ', path: '/' },
  { name: 'จัดการร้านค้าออนไลน์', path: '/' },
];
function NavWrapper({ children }) {
  return (
    <Box
      component="nav"
      sx={{
        background: '#fff',
        borderRadius: '.5rem',
        boxShadow: '0 0 1.5rem 0 rgb(25 72 142 / 15%)',
        display: 'flex',
        margin: '0 auto',
        marginTop: '-4.5rem',
        minHeight: '9rem',
      }}
    >
      {categories.map((item, index) => (
        <CategoryItem key={index} item={item} />
      ))}
    </Box>
  );
}

export default NavWrapper;
