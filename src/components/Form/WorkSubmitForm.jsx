import {
  Box,
  Button,
  FormControl,
  Input,
  Typography,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import axios from '../../config/axios';

function WorkSubmitForm({ orderItem }) {
  const [commentUser, setCommentUser] = useState('');
  const [imageUser, setImageUser] = useState('');

  const submitReject = async (commentUser, imageUser, orderId, revise) => {
    const formData = new FormData();
    formData.append('orderId', orderId);
    formData.append('comment', commentUser);
    formData.append('image', imageUser);
    try {
      // const res = await axios.patch('/orders/update-status-review', formData);
      // const res = await axios.patch('/orders/review/approve', formData);
      const res = await axios.patch('/orders/review/reject', formData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const submitApproval = async (orderId) => {
    try {
      const res = await axios.patch(`/orders/review/approve/${orderId}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickApproval = async (e) => {
    e.preventDefault();
    try {
      const res = await submitApproval(orderItem.id);
      if (res.status === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickReject = async (e) => {
    e.preventDefault();
    await submitReject(commentUser, imageUser, orderItem.id);
  };

  return (
    <>
      <Box>
        <Typography
          component="h1"
          textAlign="left"
          color="primary"
          sx={{ m: 1, fontSize: '2rem', width: '100%' }}
        >
          ส่งงานของคุณที่นี่
        </Typography>
      </Box>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          maxWidth: '28.75rem',
          width: '100%',
          gap: '2rem',
        }}
      >
        {/* // TODO: commentUser */}
        <TextField
          placeholder="เพิ่มคอมเมนต์เกี่ยวกับงานของคุณ"
          multiline
          minRows={4}
          variant="outlined"
          onChange={(e) => setCommentUser(e.target.value)}
        />
      </FormControl>

      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          maxWidth: '28.75rem',
          width: '100%',
          gap: '2rem',
        }}
      >
        {/* // TODO: add image  */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              color="primary"
              textAlign="left"
              sx={{ fontWeight: '500', mb: '.5rem', width: '100%' }}
            >
              อัพโหลดภาพประกอบ
            </Typography>
            <Typography textAlign="left">
              สามารถอัพโหลดภาพประกอบการขอแก้ไขผลงาน
            </Typography>
          </Box>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              sx={{ display: 'none' }}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Box>
      </FormControl>

      {/* // TODO: button submit */}
      <Box
        component="div"
        sx={{ marginTop: '2rem', display: 'flex', gap: '5rem' }}
      >
        <Button value={false} variant="contained" onClick={handleClickApproval}>
          ยืนยันรับผลงาน
        </Button>
      </Box>
    </>
  );
}

export default WorkSubmitForm;
