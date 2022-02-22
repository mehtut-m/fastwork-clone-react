import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { Modal, TextField, Grid } from '@mui/material/';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

// web.cjs is required for IE11 support
import { useSpring, animated } from '@react-spring/web';

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CheckoutModal({
  open,
  handleClose,
  post,
  selectedPackageIdx,
}) {
  const pkg = post?.Packages && post.Packages[selectedPackageIdx];
  console.log(pkg);
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style} component="form">
          <Box>
            <Typography>
              <Typography
                color="primary"
                component="span"
                sx={{ fontWeight: 500, mb: '.5rem' }}
              >
                แพ็กเกจ
              </Typography>
              : {`${pkg?.name}`}
            </Typography>
            <Typography>
              {pkg?.description} ระยะเวลาในการทำงาน {pkg?.duration} วัน
            </Typography>
          </Box>

          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            // onSubmit={handleSubmitLoginEmail}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email address"
                  // onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="requirement"
                  fullWidth
                  id="requirement"
                  label="Requirement Specification"
                  // onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'end', mt: '1rem' }}>
              <Button variant="outlined" color="error" sx={{ mr: '1rem' }}>
                ยกเลิก
              </Button>
              <Button variant="contained">ยืนยัน</Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
