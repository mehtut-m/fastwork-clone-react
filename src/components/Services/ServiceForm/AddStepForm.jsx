import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addInstruction } from '../../../apis/post';

function AddStepForm({
  activeStep,
  handleBack,
  handleNext,
  setCategoryForm,
  categoryForm,
}) {
  const [instructions, setInstructions] = useState(['', '']);
  const { postId } = categoryForm;
  const addSteps = () => {
    if (instructions.length < 10) {
      setInstructions((prev) => [...prev, '']);
    }
  };
  const handleChange = (e) => {
    const newStep = [...instructions];
    const idx = Number(e.target.name);
    newStep[idx] = e.target.value;
    setInstructions(newStep);
  };

  const handleClickNext = async () => {
    const validInstruction = instructions.filter((item) => item.trim() !== '');
    if (validInstruction.length > 1) {
      const payload = { postId, instructions };
      const res = await addInstruction(payload);
      console.log(res);
      setCategoryForm((prev) => ({ ...prev, instructions: validInstruction }));
      handleNext();
    } else {
      // Error Validation Handling
    }
  };

  return (
    <>
      {instructions.map((item, index) => (
        <FormControl
          sx={{ m: 1, minWidth: 120, maxWidth: '28.75rem', width: '100%' }}
          key={index}
        >
          <Typography>ขั้นตอนที่ {index + 1}</Typography>
          <Input
            placeholder="เขียนประเภทของงานที่รับทำให้ครอบคลุม"
            value={instructions[index]}
            name={String(index)}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
      ))}
      <Box>
        <Button
          sx={{ display: 'flex', mx: 'auto', fontSize: '1.125rem' }}
          onClick={addSteps}
          disabled={instructions.length >= 10}
        >
          <AddCircleIcon sx={{ mr: '.5rem' }} />
          เพิ่มขั้นตอน
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          เพิ่มขั้นตอนการทำงานได้สูงสุด 10 ขั้นตอน
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: `flex-end` }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            กลับ
          </Button>
        )}

        <Button
          variant="contained"
          onClick={handleClickNext}
          sx={{ mt: 3, ml: 1 }}
        >
          บันทึกและไปต่อ
        </Button>
      </Box>
    </>
  );
}

export default AddStepForm;
