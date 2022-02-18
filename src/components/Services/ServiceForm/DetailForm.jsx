import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

function DetailForm({ activeStep, handleBack, handleNext, setCategoryForm }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleClickNext = () => {
    setCategoryForm((prev) => ({ ...prev, name, description }));
    handleNext();
  };
  return (
    <>
      <FormControl
        sx={{ m: 1, minWidth: 120, maxWidth: '28.75rem', width: '100%' }}
      >
        <Typography>ชื่องาน</Typography>
        <Input
          placeholder="เขียนประเภทของงานที่รับทำให้ครอบคลุม"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl
        sx={{ m: 1, minWidth: 120, maxWidth: '28.75rem', width: '100%' }}
      >
        <Typography>อธิบายเพิ่มเติมเกี่ยวกับตัวงาน</Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>

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

export default DetailForm;
