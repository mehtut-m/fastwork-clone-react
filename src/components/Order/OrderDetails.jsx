import { Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { UserContext } from '../../contexts/UserContext';
import { OrderContext } from '../../contexts/OrderContext';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import TestOrderUserPage from '../../pages/Test/TestOrderUserPage';
import Typography from '@mui/material/Typography';

function OrderDetails() {
  const { orderItem } = useContext(OrderContext);
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

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.25);',
          borderLeft: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '61px',
        }}
      >
        <Typography color="initial">
          LOGO HOUSE บ้านหลังใหญ่ของโลโก้คุณภาพ
        </Typography>
        <Typography color="initial">ebony and ivory</Typography>
      </Box>
      {/* Body */}
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
  );
}

export default OrderDetails;
