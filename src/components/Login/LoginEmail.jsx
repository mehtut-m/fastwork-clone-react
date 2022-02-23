import React, { useContext, useState } from 'react';
import { requestlogIn } from '../../apis/auth';
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';

function LoginEmail({ email }) {
  const { logIn } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordValid(false);
      setPasswordError('');
      return;
    }
  };

  const submitMainLogin = async () => {
    try {
      // const res = await logIn({ email, password });
      const res = await requestlogIn({ email, password });
      if (res.status === 200) {
        //
        logIn(res.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const avatarStyle = { backgroundColor: 'salmon' };

  //*เช็ค คลิกไปหน้า

  const handleSubmitLoginEmail = (e) => {
    e.preventDefault();

    //*  Check password

    //password not empty
    if (password.length === 0) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password length must be atleast 6 characters');
    } else if (password.indexOf(' ') >= 0) {
      setPasswordError('Password cannot contain spaces');
    } else {
      setPasswordError('');
      setPasswordValid(true);
      submitMainLogin();
    }
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        // sx={{ mb: 3, fontWeight: 'bold', color: 'blue' }}
      >
        fastwork
      </Typography>

      <Typography
        component="h1"
        variant="h5"
        sx={{
          textAlign: 'start',
          width: '100%',
          fontWeight: 600,
          fontSize: '1.5rem',
          my: '1rem',
        }}
      >
        เข้าสู่ระบบ
      </Typography>

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmitLoginEmail}
        // sx={{ mt: 3 }}
      >
        <Box sx={{ display: 'flex', mt: 3 }}>
          <Avatar style={avatarStyle} />
          <Typography sx={{ fontWeight: 'bold', mt: 1, mx: 1 }}>
            {email}
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          // sx={{ mt: 1 }}
        >
          <Grid item xs={12}>
            <TextField
              error={passwordValid}
              margin="normal"
              required
              fullWidth
              type="password"
              id="password"
              label="Password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={handleOnchangePassword}
            />
            {passwordError.length > 0 && (
              <Typography
                sx={{
                  // fontWeight: 'bold',
                  textAlign: 'start',
                  fontSize: '12px',
                  color: 'red',
                }}
              >
                {passwordError}
              </Typography>
            )}
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={!password}
          sx={{ mt: 3, mb: 2 }}
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
