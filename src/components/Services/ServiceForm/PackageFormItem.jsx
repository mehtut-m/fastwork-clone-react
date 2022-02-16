import { Box, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import React from 'react';

function PackageFormItem({ isMultiplePkg, number }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: '1.5rem',
        mb: '1.75rem',
      }}
    >
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: '500', mb: '1.125rem' }}
      >
        {isMultiplePkg ? `แพ็กเกจที่ ${number}` : 'ราคาเริ่มต้น'}
      </Typography>

      {isMultiplePkg && (
        <>
          <Typography sx={{ fontSize: '1.125rem' }}>ชื่อแพ็กเกจ</Typography>
          <FormControl
            sx={{ minWidth: 120, maxWidth: '28.75rem', width: '100%' }}
          >
            <TextField />
          </FormControl>
        </>
      )}

      <Typography sx={{ fontSize: '1.125rem' }}>
        สิ่งที่ลูกค้าจะได้รับ
      </Typography>
      <FormControl sx={{ minWidth: 120, maxWidth: '28.75rem', width: '100%' }}>
        <TextField multiline rows={4} />
      </FormControl>

      <FormControl sx={{ minWidth: 120, maxWidth: '28.75rem', width: '100%' }}>
        <Typography sx={{ fontSize: '1.125rem' }}>ราคางานของคุณ</Typography>
        <TextField />
      </FormControl>
      <Typography sx={{ fontSize: '1.125rem' }}>ใช้เวลาทำ</Typography>
      <TextField />
    </Paper>
  );
}

export default PackageFormItem;
