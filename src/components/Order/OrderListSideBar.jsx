import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';

import { OrderContext } from '../../contexts/OrderContext';
import OrderSummaryItem from './OrderSummaryItem';

function OrderListSideBar() {
  const { order, setActiveItem } = useContext(OrderContext);

  return (
    <Box
      sx={{
        width: '20rem',
      }}
    >
      <Box
        className="sidebar-header"
        sx={{
          backgroundColor: '#000',
          py: '34.25px',
        }}
      >
        <Typography
          sx={{ fontSize: '1.125rem', fontWeight: '600', color: '#fff' }}
        >
          Active ออเดอร์
        </Typography>
      </Box>
      <Box
        className="sidebar-body"
        sx={{
          borderRight: '1px solid rgba(0, 0, 0, 0.25);',
          minHeight: 'calc(100vh - 4rem - 59px)',
          overflow: 'scroll',
        }}
      >
        {order.map((item, index) => (
          <OrderSummaryItem item={item} index={index} />
        ))}
      </Box>
    </Box>
  );
}

export default OrderListSideBar;
