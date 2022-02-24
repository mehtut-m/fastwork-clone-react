import Box from '@mui/material/Box';
import OrderDetails from '../../components/Order/OrderDetails';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

import OrderListSideBar from '../../components/Order/OrderListSideBar';
import { OrderContext } from '../../contexts/OrderContext';
import { useContext } from 'react';

function OrderStatus() {
  const { order } = useContext(OrderContext);

  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        height: 'calc(100vh - 72px)',
      }}
    >
      <OrderListSideBar />
      <OrderDetails />
    </Container>
  );
}
export default OrderStatus;
