import Box from '@mui/material/Box';
import OrderDetails from '../../components/Order/OrderDetails';
import { useEffect, useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { getFreelanceOrderByStatus } from '../../apis/order';
import OrderListSideBar from '../../components/Order/OrderListSideBar';

function OrderStatus() {
  const [order, setOrder] = useState([]);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    getFreelanceOrderByStatus(['WORKING', 'REVIEW', 'REVISE', 'COMPLETE'])
      .then((res) => {
        setOrder([...res.data.order]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Typography
        component="h1"
        color="primary"
        textAlign="start"
        sx={{ fontSize: '1.5rem', my: '1.125rem' }}
      >
        จัดการงานและคำขอแก้ไขงานของคุณ
      </Typography>
      <Paper
        sx={{
          border: '1px solid',
          borderColor: '#7900FF',
          borderRadius: '5px',
          display: 'grid',
          gridTemplateColumns: '1fr 3fr',
          minHeight: 'calc(100vh - 72px)',
          padding: '0 !important',
          my: '1rem',
          width: 'max-content',
        }}
      >
        <OrderListSideBar order={order} setActiveItem={setActiveItem} />
        <Box>
          <OrderDetails orderItem={order[activeItem]} />
        </Box>
      </Paper>
    </Container>
  );
}
export default OrderStatus;
