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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LogStatusModal({
  children,
  detailOn,
  setDetailOn,
  detail,
}) {
  const { activeOrderDetail } = useContext(OrderContext);
  const orderStatus = activeOrderDetail?.OrderDetails;
  const [imgArr, setImgArr] = useState([]);
  console.log(imgArr);
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
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {detail?.comment}
          <Box>
            {imgArr.map((el) => (
              <img src={el.url} style={{ maxWidth: '300px' }} />
            ))}
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
