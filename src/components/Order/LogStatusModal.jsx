import { useState, useEffect, forwardRef, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { getOrderDetail } from '../../apis/order';
import { OrderContext } from '../../contexts/OrderContext';
import Typography from '@mui/material/Typography';
import OrderDetailGallery from './OrderDetailGallery';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LogStatusModal({
  children,
  detailOn,
  setDetailOn,
  orderItem,
  detail,
}) {
  const { activeOrderDetail } = useContext(OrderContext);
  const orderStatus = activeOrderDetail?.OrderDetails;
  const [imgArr, setImgArr] = useState([]);
  console.log(imgArr);
  console.log(orderItem);

  const handleClickOpen = () => {
    setDetailOn(true);
  };

  const handleClose = () => {
    setDetailOn(false);
  };
  useEffect(() => {
    getOrderDetail(detail?.id)
      .then((res) => {
        setImgArr(res.data.images);
      })
      .catch((err) => console.log(err));
  }, [detail]);

  return (
    <Dialog
      open={detailOn}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      fullWidth={'80%'}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle sx={{ background: 'black' }}>
        <Typography variant="body1" color="white" sx={{ fontSize: '1.5rem' }}>
          {orderItem.Post.name}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: '1.5rem', my: '1rem' }}
          >
            คำอธิบายเกี่ยวกับคำขอ :
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: '1.25rem', mb: '1.75rem' }}
          >
            {detail?.comment}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: '1.5rem', mb: '1rem' }}
          >
            ภาพประกอบ :
          </Typography>

          <Box>
            <OrderDetailGallery imgArr={imgArr} />
          </Box>
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
