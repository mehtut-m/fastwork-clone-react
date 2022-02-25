import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';

function OrderSummaryItem({ item, index }) {
  const { activeItem, setActiveItem } = useContext(OrderContext);

  return (
    <Box
      className="order-summary-list"
      sx={{
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        p: '1rem',
      }}
      style={
        activeItem === index
          ? {
              transition: 'background 0.2s linear',
              color: 'white',
              background:
                'linear-gradient(93.32deg, #212121 22.81%, #373232 88.28%)',
            }
          : {}
      }
      onClick={() => {
        setActiveItem(index);
      }}
    >
      <Avatar sx={{ mr: '1rem' }} />
      <Box>
        <Typography
          textAlign="left"
          sx={{
            fontSize: '1.125rem',
            textOverflow: 'ellipsis',
            '--webkit-line-clamp': '2',
          }}
        >
          {item.requirement}
        </Typography>
        <Typography textAlign="left">{item?.seller.firstName}</Typography>
        <Typography textAlign="left">ที่ปรึกษา ทำ ตลาดจีน ส่งออก</Typography>
      </Box>
    </Box>
  );
}

export default OrderSummaryItem;
