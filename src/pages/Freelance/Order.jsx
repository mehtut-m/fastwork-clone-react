import Box from '@mui/material/Box';
import OrderDetails from '../../components/Order/OrderDetails';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
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
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        height: 'calc(100vh - 72px)',
      }}
    >
      <OrderListSideBar order={order} setActiveItem={setActiveItem} />
      <Box>
        <OrderDetails orderItem={order[activeItem]} />
      </Box>
    </Container>
  );
}
export default OrderStatus;
