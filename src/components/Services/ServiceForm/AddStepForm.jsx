import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddStepForm() {
  const [steps, setSteps] = useState(['', '']);

  const addSteps = () => {
    if (steps.length < 10) {
      setSteps((prev) => [...prev, '']);
    }
  };
  return (
    <>
      {steps.map((item, index) => (
        <FormControl
          sx={{ m: 1, minWidth: 120, maxWidth: '28.75rem', width: '100%' }}
          key={index}
        >
          <Typography>ขั้นตอนที่ {index + 1}</Typography>
          <Input placeholder="เขียนประเภทของงานที่รับทำให้ครอบคลุม" />
        </FormControl>
      ))}
      <Box>
        <Button
          sx={{ display: 'flex', mx: 'auto', fontSize: '1.125rem' }}
          onClick={addSteps}
          disabled={steps.length >= 10}
        >
          <AddCircleIcon sx={{ mr: '.5rem' }} />
          เพิ่มขั้นตอน
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          เพิ่มขั้นตอนการทำงานได้สูงสุด 10 ขั้นตอน
        </Typography>
      </Box>
    </>
  );
}

export default AddStepForm;
