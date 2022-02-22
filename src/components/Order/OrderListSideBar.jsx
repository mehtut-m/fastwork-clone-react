import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import OrderSummaryItem from './OrderSummaryItem';

function OrderListSideBar() {
  return (
    <Box
      sx={{
        width: '20rem',
      }}
    >
      <Box className="sidebar-header" sx={{ background: 'red', py: '1rem' }}>
        <Typography sx={{ fontSize: '1.125rem', fontWeight: '600' }}>
          Active ออเดอร์
        </Typography>
      </Box>
      <Box
        className="sidebar-body"
        sx={{
          overflow: 'scroll',
          maxHeight: 'calc(100vh - 4rem - 59px)',
        }}
      >
        <OrderSummaryItem />
        <OrderSummaryItem />
        <OrderSummaryItem />
        <OrderSummaryItem />
        <OrderSummaryItem />
        <OrderSummaryItem />
        <OrderSummaryItem />
        <OrderSummaryItem />
        <OrderSummaryItem />
        <OrderSummaryItem />
      </Box>
    </Box>
  );
}

export default OrderListSideBar;
