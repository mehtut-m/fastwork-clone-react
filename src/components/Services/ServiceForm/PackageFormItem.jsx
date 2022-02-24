import { Box, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

function PackageFormItem({ isMultiplePkg, number, setPackages, idx }) {
  // const [packageItem, setPackageItem] = useState({
  //   name: '',
  //   description: '',
  //   price: '',
  //   duration: '',
  // });
  // console.log(packageItem);

  const handleChange = (e) => {
    console.log(typeof e.target.value);
    setPackages((prev) => {
      const newState = [...prev];
      newState[idx] = { ...newState[idx], [e.target.name]: e.target.value };
      return newState;
    });
  };

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
            <TextField name="name" onChange={handleChange} />
          </FormControl>
        </>
      )}

      <Typography sx={{ fontSize: '1.125rem' }}>
        สิ่งที่ลูกค้าจะได้รับ
      </Typography>

      <FormControl sx={{ minWidth: 120, maxWidth: '28.75rem', width: '100%' }}>
        <TextField
          multiline
          rows={4}
          name="description"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl sx={{ minWidth: 120, maxWidth: '28.75rem', width: '100%' }}>
        <Typography sx={{ fontSize: '1.125rem' }}>ราคางานของคุณ</Typography>
        <TextField name="price" type="number" onChange={handleChange} />
      </FormControl>
      <Typography sx={{ fontSize: '1.125rem' }}>ใช้เวลาทำ</Typography>
      <TextField type="number" name="duration" onChange={handleChange} />

      <Typography sx={{ fontSize: '1.125rem' }}>
        จำนวนครั้งในการแก้ไข
      </Typography>
      <TextField type="number" name="revise" onChange={handleChange} />
    </Paper>
  );
}

export default PackageFormItem;
