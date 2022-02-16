import React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import { Box, Typography } from '@mui/material';

function DetailForm() {
  return (
    <>
      <FormControl
        sx={{ m: 1, minWidth: 120, maxWidth: '28.75rem', width: '100%' }}
      >
        <Typography>ชื่องาน</Typography>
        <Input placeholder="เขียนประเภทของงานที่รับทำให้ครอบคลุม" />
      </FormControl>

      <FormControl
        sx={{ m: 1, minWidth: 120, maxWidth: '28.75rem', width: '100%' }}
      >
        <Typography>อธิบายเพิ่มเติมเกี่ยวกับตัวงาน</Typography>
        <TextField id="outlined-multiline-static" multiline rows={4} />
      </FormControl>
    </>
  );
}

export default DetailForm;
