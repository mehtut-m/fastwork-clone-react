import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { AuthContext } from '../../contexts/AuthContext';
import { Box, Menu, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function UserMenu() {
  const { logOut } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const settings = [
    { menu: 'ข้อความและออเดอร์', onClick: () => {}, path: null },
    { menu: 'ฟรีแลนซ์ที่ถูกใจ', onClick: () => {}, path: null },
    { menu: 'ตั้งค่าโปรไฟล์', onClick: () => {}, path: null },
    { menu: 'ออกจากระบบ', onClick: logOut, path: null },
  ];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user.profileImage} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          onClick={handleCloseUserMenu}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'primary.main',
          }}
        >
          <Typography
            textAlign="center"
            color="white"
            sx={{ mb: '.5rem' }}
          >{`โปรไฟล์ของฉัน ${user.firstName}`}</Typography>
          <Typography textAlign="center" color="white">
            {user.email}
          </Typography>
        </MenuItem>
        {settings.map(({ menu, onClick }, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              if (onClick) {
                onClick();
              }
              handleCloseUserMenu();
            }}
          >
            <Typography textAlign="center">{menu}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default UserMenu;
