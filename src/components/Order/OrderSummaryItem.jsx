import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import { UserContext } from '../../contexts/UserContext';
import { useLocation } from 'react-router-dom';

function OrderSummaryItem({ item, index }) {
  const { user } = useContext(UserContext);
  const { activeItem, setActiveItem, order } = useContext(OrderContext);

  const { pathname } = useLocation();
  const isFreelance = pathname.includes('freelance');
  return (
    <Box
      className="order-summary-list"
      sx={{
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        p: '1rem',
        width: '100%',
        maxWidth: '19.95rem',
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
      <Box sx={{ width: '15.5rem' }}>
        <Typography
          textAlign="left"
          sx={{
            fontSize: '1.125rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {item?.requirement}
        </Typography>
        <Typography
          textAlign="left"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {item?.Post?.name}
        </Typography>
        <Typography textAlign="left">
          คุณ{' '}
          {isFreelance ? item?.buyer?.firstName + ' ' : item?.seller?.firstName}
        </Typography>
      </Box>
    </Box>
  );
}

export default OrderSummaryItem;
