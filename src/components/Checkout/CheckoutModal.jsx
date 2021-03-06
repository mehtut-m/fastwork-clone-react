import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { Modal, TextField, Grid } from '@mui/material/';
import { CheckoutContext } from '../../contexts/CheckoutContext';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CheckoutGallery from './CheckoutGallery';

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
const Input = styled('input')({
  display: 'none',
});

export default function CheckoutModal({
  open,
  handleClose,
  post,
  selectedPackageIdx,
}) {
  const {
    order,
    clearOrder,
    updateOrderImage,
    updateOrderOnChange,
    proceedToPayment,
  } = React.useContext(CheckoutContext);

  const pkg = post?.Packages && post.Packages[selectedPackageIdx];

  const handleChange = async (e) => {
    updateOrderOnChange(e);
  };
  const handleSelectImage = async (e) => {
    updateOrderImage(e);
  };
  const handleProceed = () => {
    proceedToPayment();
  };

  const imgArr = [];

  for (let i = 0; i < order.requirementImage.length; i++) {
    imgArr.push(order.requirementImage[i]);
  }

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
        <Box sx={{ ...style, width: '500px' }} component="form">
          <Box>
            <Typography>
              <Typography
                color="primary"
                component="span"
                sx={{ fontWeight: 500, mb: '.5rem' }}
              >
                ?????????????????????
              </Typography>
              : {`${pkg?.name}`}
            </Typography>
            <Typography>
              {pkg?.description} ?????????????????????????????????????????????????????? {pkg?.duration} ?????????
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
                  name="requirement"
                  fullWidth
                  require="true"
                  id="requirement"
                  label="Requirement Specification"
                  multiline
                  minRows={4}
                  value={order?.requirement}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ mb: '.5rem' }}>
                  ????????????????????????????????????????????????????????? Scope ????????? ???????????? Reference ????????????????????????????? 3 ?????????
                </Typography>

                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    sx={{ display: 'none' }}
                    onChange={(e) => {
                      updateOrderImage(e);
                    }}
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Box>
              <CheckoutGallery
                items={imgArr.map((item) => URL.createObjectURL(item))}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', mt: '1rem' }}>
              <Button
                variant="outlined"
                color="error"
                sx={{ mr: '1rem' }}
                onClick={() => {
                  clearOrder();
                  handleClose();
                }}
              >
                ??????????????????
              </Button>
              <Button variant="contained" onClick={proceedToPayment}>
                ??????????????????
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
