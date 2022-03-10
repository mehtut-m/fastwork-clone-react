import Box from '@mui/material/Box';
import OrderDetails from '../../components/Order/OrderDetails';
import { useEffect, useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';

import OrderListSideBar from '../../components/Order/OrderListSideBar';
import { OrderContext } from '../../contexts/OrderContext';
import { useContext } from 'react';

function OrderStatus() {
  const { order, refreshOrder } = useContext(OrderContext);
  useEffect(() => {
    refreshOrder();
  }, []);

  return (
    <Container>
      <Typography
        component="h1"
        color="primary"
        textAlign="start"
        sx={{ fontSize: '1.5rem', my: '1.125rem' }}
      >
        ติดตามสถานะการจ้างงานของคุณ
      </Typography>
      <Paper
        sx={{
          border: '1px solid',
          borderRadius: '5px',
          display: 'grid',
          gridTemplateColumns: '1fr 3fr',
          minHeight: 'calc(100vh - 72px)',
          padding: '0 !important',
          my: '1rem',
          width: 'max-content',
        }}
      >
        <OrderListSideBar />
        <OrderDetails />
      </Paper>
    </Container>
  );
}
export default OrderStatus;
