import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { UserContext } from '../../contexts/UserContext';
import LogStatusModal from './LogStatusModal';

export default function OrderLog({ orderDetails }) {
  const { user, order } = useContext(UserContext);
  const [activeStep, setActiveStep] = useState(orderDetails?.length);
  const [detailOn, setDetailOn] = useState(false);
  const [detail, setDetail] = useState(null);

  return (
    <>
      <Box sx={{ maxWidth: 400, ml: '.5rem' }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          sx={{ flexDirection: 'column-reverse' }}
        >
          {orderDetails &&
            orderDetails.map((step, index) => (
              <Step
                key={index}
                onClick={() => {
                  setActiveStep(index);
                }}
              >
                <StepLabel>
                  {step.userId === user.id
                    ? 'คุณ'
                    : `Freelance : ${step?.User?.firstName}`}
                </StepLabel>
                <StepContent>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{step.comment}</Typography>
                    <Button
                      sx={{ ml: '1rem' }}
                      variant="contained"
                      onClick={() => {
                        setDetailOn(true);
                        setDetail(step);
                      }}
                    >
                      รายละเอียด
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
        </Stepper>
      </Box>

      <LogStatusModal
        detailOn={detailOn}
        setDetailOn={setDetailOn}
        detail={detail}
      >
        {/*  */}
      </LogStatusModal>
    </>
  );
}
