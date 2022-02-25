import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { UserContext } from '../../contexts/UserContext';

export default function OrderLog({ orderDetails }) {
  const { user } = useContext(UserContext);
  const [activeStep, setActiveStep] = useState(orderDetails?.length);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{ flexDirection: 'column-reverse' }}
      >
        {orderDetails &&
          orderDetails.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepLabel>
                {console.log(step)}
                {step.userId === user.id
                  ? 'คุณ'
                  : `Freelance : ${step?.User?.firstName}`}
              </StepLabel>
              <StepContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>{step.comment}</Typography>
                  <Button sx={{ ml: '1rem' }} variant="contained">
                    รายละเอียด
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
      </Stepper>
    </Box>
  );
}
