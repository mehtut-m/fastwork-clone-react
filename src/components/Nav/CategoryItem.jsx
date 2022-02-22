import { Box, Typography, Link } from '@mui/material';
// import { Link } from 'react-router-dom';
import consultant from '../../assets/consultant.svg';

function CategoryItem({ item }) {
  return (
    <Link
      href={`/category/${item.path}`}
      sx={{
        width: '9rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        textDecoration: 'none',
        py: '1rem',
      }}
    >
      <img
        src={consultant}
        alt={item.name}
        style={{ filter: 'grayscale(1)' }}
      />
      <Typography sx={{ marginTop: '.75rem' }}>{item.name}</Typography>
    </Link>
  );
}

export default CategoryItem;
