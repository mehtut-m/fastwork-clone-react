import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Input, Typography } from '@mui/material';

const FilterDurationMenu = ({
  item,
  setFilterMinMax,
  submitQuery,
  clearFilter,
  filter,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box>
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
        ช่วงราคา
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        sx={{ zIndex: 5 }}
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
            <Paper elevation={3} sx={{ position: 'absolute', zIndex: 5 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <Box
                  sx={{
                    minWidth: '300px',
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: '5',
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
                    ช่วงราคา
                  </Typography>
                  <Box
                    sx={{
                      p: '1rem 1.5rem .75rem',
                      display: 'grid',
                      gap: '1rem',
                      maxHeight: '10rem',
                      padding: '1rem',
                    }}
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      InputProps={{ inputProps: { min: 0 } }}
                      placeholder="0"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="min"
                      value={filter.min}
                      onChange={(e) => setFilterMinMax(e)}
                      sx={{ p: 0, width: '100%' }}
                    />

                    <TextField
                      id="outlined-number"
                      type="number"
                      placeholder="สูงสุด"
                      name="max"
                      value={filter.max}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => setFilterMinMax(e)}
                      sx={{ p: 0, width: '100%' }}
                    />
                  </Box>
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
                    <Button variant="contained" onClick={submitQuery}>
                      ยืนยัน
                    </Button>
                  </Box>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default FilterDurationMenu;
