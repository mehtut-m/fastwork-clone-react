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
          py: '1rem',
          border: '1px solid rgba(0, 0, 0, 0.25);',
        }}
      >
        <Typography sx={{ fontSize: '1.125rem', fontWeight: '600' }}>
          Active ออเดอร์
        </Typography>
      </Box>
      <Box
        className="sidebar-body"
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.25);',
          borderTop: 'none',
          maxHeight: 'calc(100vh - 4rem - 59px)',
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
