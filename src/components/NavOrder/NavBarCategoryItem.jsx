import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';

function NavBarCategoryItem({ handleClose, item }) {
  return (
    <Link to={`/sub-category/${item.id}`}>
      <MenuItem
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        onMouseOver={(e) => {
          e.target.style.background =
            'linear-gradient(90.3deg, #FF6A95 -0.98%, rgba(255, 106, 149, 0.63) -0.97%, #B67BFD 79.83%)';
          e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.background = 'white';
        }}
        onClick={handleClose}
      >
        {item.name}
      </MenuItem>
    </Link>
  );
}

export default NavBarCategoryItem;
