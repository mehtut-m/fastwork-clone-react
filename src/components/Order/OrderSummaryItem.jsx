import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

function OrderSummaryItem() {
  return (
    <Box
      className="order-summary-list"
      sx={{ display: 'flex', alignItems: 'center', p: '1rem' }}
    >
      <Avatar sx={{ mr: '1rem' }} />
      <Box>
        <Typography textAlign="left" sx={{ fontSize: '1.125rem' }}>
          รับจ้างออกแบบโลโก้
        </Typography>
        <Typography textAlign="left">John Doe</Typography>
        <Typography textAlign="left">ที่ปรึกษา ทำ ตลาดจีน ส่งออก</Typography>
      </Box>
      <Box sx={{ height: '100%' }}>
        <Typography textAlign="left">11:39</Typography>
      </Box>
    </Box>
  );
}

export default OrderSummaryItem;
