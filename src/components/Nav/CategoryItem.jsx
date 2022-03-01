import { Typography, Link, Box } from '@mui/material';
import './CategoryItem.css';

function CategoryItem({ item, setSubCatOn }) {
  return (
    <Box
      // href={`/category/${item.path}`}
      className="category-item"
      sx={{
        cursor: 'pointer',
        width: '9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem',
        flexDirection: 'column',
        textDecoration: 'none',
        py: '1rem',
      }}
      onClick={setSubCatOn}
    >
      <img src={item.icon} alt={item.name} className="category-icon" />

      <Typography
        color="primary"
        sx={{
          marginTop: '.75rem',
        }}
      >
        {item.name}
      </Typography>
    </Box>
  );
}

export default CategoryItem;
