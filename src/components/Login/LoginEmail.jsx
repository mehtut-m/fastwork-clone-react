import React, { useState } from 'react';
import { login } from '../../apis/auth';

import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';

function LoginEmail({ email }) {
  const submitMainLogin = async () => {
    try {
      const res = await login({ email, password });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const avatarStyle = { backgroundColor: 'black' };

  //*เช็ค คลิกไปหน้า
  const [password, setPassword] = useState('');

  const handleSubmitLoginEmail = e => {
    e.preventDefault();
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        sx={{ mb: 3, fontWeight: 'bold', color: 'blue' }}
      >
        Fastwork
      </Typography>

      <Typography
        component="h1"
        variant="h5"
        sx={{ textAlign: 'start', fontWeight: 'bold' }}
      >
        เข้าสู่ระบบ
      </Typography>

      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        onSubmit={handleSubmitLoginEmail}
      >
        <Box sx={{ display: 'flex', mt: 3 }}>
          <Avatar style={avatarStyle} />
          <Typography sx={{ fontWeight: 'bold', mt: 1, mx: 1 }}>
            {email}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              id="password"
              label="Password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={submitMainLogin}
        >
          เข้าสู่ระบบ
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Link href="/forget-password" variant="body2">
              ลืมรหัสผ่าน
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LoginEmail;
