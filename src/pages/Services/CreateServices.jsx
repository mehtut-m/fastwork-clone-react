import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CategoryForm from '../../components/Services/ServiceForm/CategoryForm';
import DetailForm from '../../components/Services/ServiceForm/DetailForm';
import ThumbnailForm from '../../components/Services/ServiceForm/ThumbnailForm';
import AddStepFrom from '../../components/Services/ServiceForm/AddStepForm';
import PackageFormWrapper from '../../components/Services/ServiceForm/PackageFormWrapper';

function CreateServices() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    'เลือกหมวดหมู่ผลงาน',
    'ชื่องานและคำอธิบาย',
    'อัพโหลดรูปผลงาน',
    'ระบุขั้นตอนการทำงาน',
    'กำหนดราคา',
  ];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <CategoryForm />;
      case 1:
        return <DetailForm />;
      case 2:
        return <ThumbnailForm />;
      case 3:
        return <AddStepFrom />;
      case 4:
        return <PackageFormWrapper />;
      default:
        throw new Error('Unknown step');
    }
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Container component="main" sx={{ width: '100%' }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, textAlign: 'start' }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* Form Body */}
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  component="h1"
                  sx={{
                    color: 'primary.main',
                    fontSize: '2rem',
                    fontWeight: '600',
                  }}
                >
                  ขั้นตอนที่ {activeStep + 1}
                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: '500',
                  }}
                >
                  {steps[activeStep]}
                </Typography>

                <Box
                  sx={{ minWidth: 120, maxWidth: '28.75rem', width: '100%' }}
                >
                  {getStepContent(activeStep)}

                  <Box sx={{ display: 'flex', justifyContent: `flex-end` }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        กลับ
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      บันทึกและไปต่อ
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </div>
  );
}

export default CreateServices;
