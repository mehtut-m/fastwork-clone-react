import { Typography, Link } from '@mui/material';
import './CategoryItem.css';

function CategoryItem({ item }) {
  return (
    <Link
      href={`/category/${item.path}`}
      className="category-item"
      sx={{
        width: '9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem',
        flexDirection: 'column',
        textDecoration: 'none',
        py: '1rem',
      }}
    >
      <img src={item.icon} alt={item.name} className="category-icon" />

      <Typography
        sx={{
          marginTop: '.75rem',
        }}
      >
        {item.name}
      </Typography>
    </Link>
  );
}

export default CategoryItem;
