// import { ThemeProvider } from '@emotion/react';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';

function ForgetPassword() {
  const handleForgetPassword = e => {
    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '3',
          borderRadius: 5,
          padding: 8,
        }}
      >
        <Typography component="h1" variant="h4">
          Fastwork
        </Typography>
        <br />
        <Typography>
          <Typography component="h1" variant="h5">
            ลืมรหัสผ่าน
          </Typography>

          <p>
            Fastwork จะทําการส่งรหัสยืนยันไปยังอีเมล / เบอร์โทรศัพท์ของคุณ
            เพื่อยืนยันความเป็นเจ้าของบัญชี
          </p>
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleForgetPassword}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="ํYour Email"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ส่งรหัสยืนยัน
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/login" variant="body2">
                เข้าสู่ระบบ
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgetPassword;
