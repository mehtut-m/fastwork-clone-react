import * as React from 'react';
import Box from '@mui/material/Box';
import OrderDetails from '../components/Order/OrderDetails';
import { Container } from '@mui/material';
import OrderListSideBar from '../components/Order/OrderListSideBar';

function OrderStatus() {
  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        height: 'calc(100vh - 72px)',
      }}
    >
      <OrderListSideBar />
      <Box>
        <OrderDetails />
      </Box>
    </Container>
  );
}
export default OrderStatus;
