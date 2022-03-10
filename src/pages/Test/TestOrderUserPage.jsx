import SwipeableTextMobileStepper, {
  images,
} from '../../components/ImagesList/Carousel';
import { Box, Button, FormControl, Typography, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import WorkReviewForm from '../../components/Form/WorkReviewForm';
import WorkSubmitForm from '../../components/Form/WorkSubmitForm';
import OrderLog from '../../components/Order/OrderLog';
import RequirementCarousel from '../../components/Order/RequirementCarousel';

function TestOrderUserPage({ orderItem }) {
  const { order, fetchOrderById, activeOrderDetail } = useContext(OrderContext);

  const [dayLeft, setDayLeft] = useState('');
  const [hoursLeft, setHoursLeft] = useState('');
  const [minutesLeft, setMinutesLeft] = useState('');
  const [secondsLeft, setSecondsLeft] = useState('');

  const orderId = orderItem?.id;
  const isFreelancePath = useLocation().pathname.includes('freelance');
  console.log(orderId);
  useEffect(() => {
    fetchOrderById(orderId);
  }, [orderId, order]);

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

  console.log('------->', activeOrderDetail);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDayLeft(days);
      setHoursLeft(hours);
      setMinutesLeft(minutes);
      setSecondsLeft(seconds);
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds]);
  console.log('------------__>', activeOrderDetail);
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
        {activeOrderDetail.status === 'REVIEW' && isFreelancePath && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              component="h2"
              color="primary"
              sx={{ fontSize: '1.5rem', fontWeight: '500' }}
            >
              อยู่ระหว่างการตรวจสอบงาน
            </Typography>
            <img
              src="https://media.giphy.com/media/1pUvx2WHilZYxZ60e1/giphy.gif"
              alt="working"
              style={{ display: 'block', width: '175px' }}
            />
          </Box>
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
              component="h2"
              color="primary"
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
            <Typography
              color="primary"
              sx={{ fontSize: '1.5rem', fontWeight: '500', mb: '1.5rem' }}
            >
              ส่งมอบงานสำเร็จ
            </Typography>
            <img
              style={{
                width: '200px',
                filter: 'brightness(50%)',
                marginBottom: '2rem',
              }}
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

        {activeOrderDetail.status !== 'COMPLETE' && (
          <Typography textAlign="left">
            ระยะเวลาสิ้นสุดงาน : {dayLeft} วัน {hoursLeft} ชั่วโมง {minutesLeft}{' '}
            นาที {secondsLeft} วินาที
          </Typography>
        )}

        <Box sx={{ mb: '1.25rem', width: '100%' }}>
          <Typography
            component="h2"
            textAlign="start"
            color="primary"
            sx={{ fontSize: '1.25rem', mb: '.5rem' }}
          >
            รายละเอียดการจ้างงาน
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '350px',
              }}
            >
              <Typography
                variant="p"
                color="initial"
                textAlign="start"
                sx={{ width: '100%' }}
              >
                ความต้องการของผู้จ้าง : {activeOrderDetail?.requirement}
              </Typography>
              <Typography
                variant="p"
                color="initial"
                textAlign="start"
                sx={{ width: '100%' }}
              >
                เบอร์โทรศัพท์ติดต่อ : {orderItem?.seller.telephoneNo}
              </Typography>
              <Typography
                variant="p"
                color="initial"
                textAlign="start"
                sx={{ width: '100%' }}
              >
                อีเมล : {orderItem?.seller.email}
              </Typography>
            </Box>
            <Box className="requirement-carousel">
              <RequirementCarousel img={activeOrderDetail?.OrderImages} />
            </Box>
          </Box>
        </Box>
        {activeOrderDetail.status === 'REVIEW' && !isFreelancePath && (
          <WorkReviewForm orderItem={orderItem} />
        )}
        {activeOrderDetail.status === 'WORKING' && isFreelancePath && (
          <WorkSubmitForm orderItem={orderItem} />
        )}
      </Box>
      <OrderLog orderDetails={activeOrderDetail?.OrderDetails} />
    </>
  );
}

export default TestOrderUserPage;
