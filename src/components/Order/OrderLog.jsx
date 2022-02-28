import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { UserContext } from '../../contexts/UserContext';
import { OrderContext } from '../../contexts/OrderContext';
import LogStatusModal from './LogStatusModal';

export default function OrderLog({ orderDetails }) {
  const { user } = useContext(UserContext);
  const { order, orderItem, activeOrderDetail } = useContext(OrderContext);
  const [activeStep, setActiveStep] = useState(orderDetails?.length);
  const [detailOn, setDetailOn] = useState(false);
  const [detail, setDetail] = useState(null);
  console.log(activeOrderDetail);
  console.log(user.id);
  console.log(activeOrderDetail.sellerId);
  useEffect(() => {
    setActiveStep(orderDetails?.length);
  }, [activeOrderDetail]);
  return (
    <>
      <Box sx={{ maxWidth: 400, ml: '.5rem' }}>
        <Typography
          textAlign="left"
          color="primary"
          sx={{ fontSize: '1.25rem', fontWeight: '500' }}
        >
          ประวัติของการทำงาน
        </Typography>
        <Stepper
          activeStep={activeStep || orderDetails?.length || 0}
          orientation="vertical"
          sx={{ flexDirection: 'column-reverse' }}
        >
          {
            <Step key={0}>
              <StepLabel>
                {`Start : ผู้จ้างได้ทำการจ้างทำงานเมื่อ
              ${new Date(activeOrderDetail?.createdAt)}`}
              </StepLabel>
            </Step>
          }
          {orderDetails &&
            orderDetails.map((step, index) => (
              <Step
                key={index + 1}
                onClick={() => {
                  setActiveStep(index + 1);
                }}
              >
                <StepLabel>
                  {step.userId === activeOrderDetail.buyerId
                    ? `${
                        user.id === activeOrderDetail.sellerId
                          ? `Freelance ${step?.User?.firstName} ได้ทำการส่งงานเมื่อ`
                          : `ผู้ว่าจ้าง ${step?.User?.firstName} ได้ทำการขอแก้ใขงานเมื่อ`
                      } :  ${new Date(step?.createdAt)}`
                    : `${
                        user.id === activeOrderDetail.sellerId
                          ? `ผู้ว่าจ้าง ${step?.User?.firstName} ได้ทำการขอแก้ใขงานเมื่อ`
                          : `Freelance  ${step?.User?.firstName}  ได้ทำการส่งงานเมื่อ`
                      } : ${new Date(step?.createdAt)}`}
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
          {/* Default Order Log */}

          {activeOrderDetail.status === 'COMPLETE' && (
            <Step
              key={orderDetails.length}
              onClick={() => {
                setActiveStep(orderDetails.length);
              }}
            >
              <StepLabel>
                {`ออร์เดอร์สำเร็จ
              ${new Date(activeOrderDetail?.createdAt)}`}
              </StepLabel>
            </Step>
          )}
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
