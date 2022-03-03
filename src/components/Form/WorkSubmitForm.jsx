import { Box, Button, FormControl, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useState } from 'react';
import axios from '../../config/axios';
import { OrderContext } from '../../contexts/OrderContext';

function WorkSubmitForm({ orderItem }) {
  const { submitWork } = useContext(OrderContext);
  const [commentUser, setCommentUser] = useState('');
  const [imageArr, setImageArr] = useState([]);
  const Input = styled('input')({
    display: 'none',
  });
  const submitReject = async (commentUser, imageArr, orderId) => {
    const formData = new FormData();
    formData.append('orderId', orderId);
    formData.append('comment', commentUser);
    console.log(imageArr);
    formData.append('image', imageArr);
    try {
      const res = await axios.patch('/orders/update-status-review', formData);
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

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(orderItem);
      await submitWork(commentUser, imageArr, orderItem.id);
      // if (res.status === 200) {
      // }
    } catch (error) {
      console.log(error);
    }
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
              onChange={(e) => setImageArr(e.target.files)}
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
        <Button value={false} variant="contained" onClick={handleClickSubmit}>
           ส่งมอบผลงาน
        </Button>
      </Box>
    </>
  );
}

export default WorkSubmitForm;
