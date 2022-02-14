import { AppBar, Container, Menu, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './Header.css';

const pages = ['Products', 'Pricing', 'Blog'];

function Header() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      maxWidth: '360px',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      borderRadius: '1rem',
    },
  }));

  return (
    <AppBar
      className={'header-bar'}
      sx={{ padding: '.75rem 0', position: 'sticky' }}
    >
      <Container maxWidth="xl" sx={{ display: 'flex' }}>
        <Link to="/">
          <Typography
            noWrap
            component="h1"
            className="fastwork-logo"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontSize: '2rem',
              fontWeight: '500',
            }}
          >
            fastwork
          </Typography>
        </Link>
        <Search sx={{ borderRadius: '15px' }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="จ้างฟรีแลนซ์ทำ ..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              width: '100%',
            }}
          />
        </Search>
      </Container>
      <Container>{/*  */}</Container>
    </AppBar>
  );
}

export default Header;
