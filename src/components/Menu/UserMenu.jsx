import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Box, Menu, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function UserMenu() {
  const { user } = useContext(UserContext);
  const settings = [
    'ข้อความและออเดอร์',
    'ฟรีแลนซ์ที่ถูกใจ',
    'ตั้งค่าโปรไฟล์',
    'สมัครเป็นฟรีแลนซ์',
    'ออกจากระบบ',
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
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default UserMenu;
