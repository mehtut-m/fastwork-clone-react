// import second from '../../assets/'
import { Box, Button, FormControl, Typography, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import WorkReviewForm from '../../components/Form/WorkReviewForm';
import WorkSubmitForm from '../../components/Form/WorkSubmitForm';
import OrderLog from '../../components/Order/OrderLog';

function TestOrderUserPage({ orderItem }) {
  const { order, fetchOrderById, activeOrderDetail } = useContext(OrderContext);

  const [dayLeft, setDayLeft] = useState('');
  const [hoursLeft, setHoursLeft] = useState('');
  const [minutesLeft, setMinutesLeft] = useState('');
  const [secondsLeft, setSecondsLeft] = useState('');

  const orderId = orderItem?.id;
  const isFreelancePath = useLocation().pathname.includes('freelance');

  useEffect(() => {
    fetchOrderById(orderId);
  }, [orderId]);

  const countDownDate =
    new Date(activeOrderDetail.deadlineDate).getTime() || new Date().getTime();
  const timeToDay = new Date().getTime();

  const timeleft = countDownDate - timeToDay;
  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDayLeft(days);
      setHoursLeft(hours);
      setMinutesLeft(minutes);
      setSecondsLeft(seconds);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          mb: '1.5rem',
        }}
      >
        {activeOrderDetail.status === 'REVIEW' && !isFreelancePath && (
          <WorkReviewForm orderItem={orderItem} />
        )}
        {activeOrderDetail.status === 'REVIEW' && isFreelancePath && (
          <Typography>--- Reviewing ---</Typography>
        )}
        {activeOrderDetail.status === 'WORKING' && isFreelancePath && (
          <WorkSubmitForm orderItem={orderItem} />
        )}
        {activeOrderDetail.status === 'WORKING' && !isFreelancePath && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              color="primary"
              component="h2"
              sx={{ fontSize: '1.5rem', fontWeight: '500' }}
            >
              Freelance ของเรากำลังทำงานให้กับคุณ
            </Typography>
            <img
              src="https://media4.giphy.com/media/QX15lZJbifeQPzcNDt/giphy.gif?cid=ecf05e47xf60gl77zlhazecdo62q4wn4ljzdk6nk5m45nhl1&rid=giphy.gif&ct=g"
              alt="working"
              style={{ display: 'block', width: 200 }}
            />
          </Box>
        )}
        {activeOrderDetail.status === 'COMPLETE' && (
          <Box>
            <Typography>ส่งมอบงานสำเร็จ</Typography>
            <img
              style={{ width: '200px' }}
              src="https://media.giphy.com/media/CaS9NNso512WJ4po0t/giphy.gif"
              alt="complete"
            />
          </Box>
        )}
        <Typography>
          วันที่คำสั่งซื้อ{' '}
          {activeOrderDetail?.createdAt &&
            new Date(activeOrderDetail?.createdAt).toLocaleString('en-US', {
              timeZone: 'GMT',
            })}
        </Typography>
        <Typography textAlign="left">
          คำสั่งซื้อหมายเลข : {activeOrderDetail?.id}
        </Typography>
        <Typography textAlign="left">
          จำนวนการแก้ไขงานคงเหลือ : {activeOrderDetail?.reviseCount}
        </Typography>

        <Typography textAlign="left">
          ระยะเวลาสิ้นสุดงาน : {dayLeft} วัน {hoursLeft} ชั่วโมง {minutesLeft}{' '}
          นาที {secondsLeft} วินาที
        </Typography>
      </Box>
      <OrderLog orderDetails={activeOrderDetail?.OrderDetails} />
    </>
  );
}

export default TestOrderUserPage;
