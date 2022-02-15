import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import consultant from '../../assets/consultant.svg';

function CategoryItem({ item }) {
  return (
    <Box
      sx={{
        height: '9rem',
        width: '9rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Link to={item.path}>
        <img
          src={consultant}
          alt={item.name}
          style={{ filter: 'grayscale(1)' }}
        />
        <Typography sx={{ marginTop: '.75rem' }}>{item.name}</Typography>
      </Link>
    </Box>
  );
}

export default CategoryItem;
