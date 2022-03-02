import { Button, Fade, Menu, MenuItem, Typography } from '@mui/material';
import NavBarCategoryItem from './NavBarCategoryItem';
import { useState } from 'react';

const NavBarCategory = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMouseLever = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        className="category-bar category-item"
        onMouseOver={handleMouseOver}
        value={item.id}
        sx={{
          width: '100%',
          '&:hover': {},
        }}
      >
        {item.name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleMouseLever,
        }}
        TransitionComponent={Fade}
      >
        {item.SubCategories.map((item) => (
          <NavBarCategoryItem handleClose={handleClose} item={item} />
        ))}
      </Menu>
    </>
  );
};

export default NavBarCategory;
