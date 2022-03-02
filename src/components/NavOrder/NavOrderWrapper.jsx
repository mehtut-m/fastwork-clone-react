import { Button, Container, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { getAllCategories, getSubCategoryById } from '../../apis/category';
import NavBarCategory from './NavBarCategory';

function NavOrderWrapper() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [scrollLocation, setScrollLocation] = useState(0);
  const open = Boolean(anchorEl);

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      sx={{
        boxShadow:
          '0 10px 40px -4px rgb(19 55 109 / 8%), 0 8px 22px -6px rgb(19 55 109 / 10%)',
        position: 'sticky',
        top: '4rem',
        background: '#fff',
      }}
    >
      <Container
        component="nav"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '3.5rem',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {categories &&
            categories.map((item) => (
              <>
                <NavBarCategory item={item} />
              </>
            ))}
        </Box>
      </Container>
    </Box>
  );
}

export default NavOrderWrapper;
