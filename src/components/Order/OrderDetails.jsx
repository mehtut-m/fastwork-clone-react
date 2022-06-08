import { Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { OrderContext } from '../../contexts/OrderContext';
import { useContext } from 'react';
import TestOrderUserPage from '../../pages/Test/TestOrderUserPage';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

function OrderDetails() {
  const { orderItem, order } = useContext(OrderContext);
  const isFreelance = useLocation().pathname.includes('freelance');
  const steps = [
    {
      label: 'กำลังทำงาน',
      name: 'WORKING',
      step: 0,
    },
    {
      label: 'รอการตรวจงาน',
      name: 'REVIEW',
      step: 1,
    },
    {
      label: 'ออเดอร์สำเร็จ',
      name: 'COMPLETE',
      step: 2,
    },
  ];
  const activeStep = steps.find((el) => el.name === orderItem?.status);
  const bgColor = !isFreelance
    ? '#000'
    : 'linear-gradient(90deg,#8200d6, #bc4cee);';
  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          background: bgColor,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: '3rem',
          height: '59px',
        }}
      >
        <Typography
          color="#fff"
          sx={{ fontSize: '1.25rem', fontWeight: '500' }}
        >
          {orderItem?.Post.name}
        </Typography>
        <Typography color="#fff">
          {!isFreelance
            ? `${orderItem?.seller?.firstName} ${orderItem?.seller?.lastName}`
            : `${orderItem?.buyer?.firstName} ${orderItem?.buyer?.lastName}`}
        </Typography>
      </Box>
      {/* Body */}
      <Box sx={{ padding: '2rem' }}>
        <Stepper
          activeStep={activeStep?.step}
          orientation="horizontal"
          sx={{ my: '2.5rem' }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <TestOrderUserPage orderItem={orderItem} />
      </Box>
    </Box>
  );
}

export default OrderDetails;
