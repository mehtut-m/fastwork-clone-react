import { Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

function OrderDetails() {
  const [order, setOrder] = useState([]);
  const [activeItem, setActiveItem] = useState(0);
  const steps = [
    {
      label: 'ทำงาน',
      step: 0,
    },
    {
      label: 'รอการตรวจงาน',
      step: 1,
    },
    {
      label: 'อยู่ระหว่างปรับปรุงแก้ไขงาน',
      step: 2,
    },
    {
      label: 'ปรับปรุงแก้ไขงาน',
      step: 3,
    },
    {
      label: 'ออเดอร์สำเร็จ',
      step: 4,
    },
  ];
  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          bgcolor: 'red',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '59px',
        }}
      >
        <Typography color="initial">
          LOGO HOUSE บ้านหลังใหญ่ของโลโก้คุณภาพ
        </Typography>
        <Typography color="initial">ebony and ivory</Typography>
      </Box>
      {/* Body */}
      <Stepper activeStep={0} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}></Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <Box>Body</Box>
    </Box>
  );
}

export default OrderDetails;
