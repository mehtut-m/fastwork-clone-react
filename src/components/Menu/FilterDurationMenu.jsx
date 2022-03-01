import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import Box from '@mui/material/Box';

const FIlterDurationMenu = ({
  item,
  setFilterDuration,
  clearFilter,
  filter,
  submitQuery,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, value) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const onSelect = (e, value) => {
    setFilterDuration(value);
  };

  function handleListKeyDown(event) {
    // if (event.key === 'Tab') {
    //   event.preventDefault();
    //   setOpen(false);
    // } else if (event.key === 'Escape') {
    //   setOpen(false);
    // }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        variant="outlined"
        sx={{ borderColor: '#BBBBBB', color: '#BBB' }}
      >
        ระยะเวลา
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper sx={{ position: 'relative' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <Box
                  sx={{
                    minWidth: '300px',
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: '5',
                    borderRadius: '4px',
                  }}
                >
                  <Typography
                    textAlign="start"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      p: '1rem 1.5rem .75rem',
                      borderBottom: '1px solid hsl(216, 15%, 92%)',
                    }}
                  >
                    ระยะเวลาการทำงาน
                  </Typography>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{
                      zIndex: '99',
                      position: 'relative',
                      display: 'grid',
                      gridTemplateColumns: 'repeat( 2, 9.75rem)',
                      gap: '.5rem',
                      p: '1rem',
                    }}
                  >
                    <MenuItem
                      onClick={(e) => onSelect(e, 1)}
                      sx={{
                        py: '4px',
                        borderRadius: '4px',
                        border: '1px solid rgb(133, 133, 133)',
                        width: '100%',
                      }}
                    >
                      <span style={{ textAlign: 'center', width: '100%' }}>
                        ใน 24 ชั่วโมง
                      </span>
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => onSelect(e, 3)}
                      sx={{
                        py: '4px',
                        borderRadius: '4px',
                        border: '1px solid rgb(133, 133, 133)',
                        width: '100%',
                        borderColor: 'primary.main',
                      }}
                    >
                      <span style={{ textAlign: 'center', width: '100%' }}>
                        ใน 3 วัน
                      </span>
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => onSelect(e, 7)}
                      sx={{
                        py: '4px',
                        borderRadius: '4px',
                        border: '1px solid rgb(133, 133, 133)',
                        textAlign: 'center',
                        width: '100%',
                      }}
                    >
                      <span style={{ textAlign: 'center', width: '100%' }}>
                        ใน 7 วัน
                      </span>
                    </MenuItem>
                  </MenuList>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      px: '1rem',
                      pb: '.75rem',
                    }}
                  >
                    <Button onClick={clearFilter} sx={{}}>
                      ล้างตัวกรอง
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => {
                        submitQuery();
                        handleClose();
                      }}
                    >
                      ยืนยัน
                    </Button>
                  </Box>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default FIlterDurationMenu;
