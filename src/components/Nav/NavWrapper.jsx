import { Box } from '@mui/material';
import CategoryItem from './CategoryItem';

const categories = [
  { name: 'Graphic & Design', path: '1' },
  { name: 'การตลาดและโฆษณา', path: '2' },
  { name: 'เขียนและแปลภาษา', path: '3' },
  { name: 'ภาพและเสียง', path: '4' },
  { name: 'Web & Programming', path: '5' },
  { name: 'ปรึกษาแนะนำ', path: '6' },
  { name: 'จัดการร้านค้าออนไลน์', path: '7' },
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
        justifyContent: 'center',
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
