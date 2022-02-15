import { Box, Button, Container, TextField, Typography } from '@mui/material';

function ResetPassword() {
  const handleResetPassword = e => {
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
        <Typography component="h1" variant="h5">
          ลืมรหัสผ่าน
        </Typography>

        <p>
          รหัสยืนยันได้ถูกส่งไปยังอีเมล / เบอร์โทรศัพท์ของคุณแล้ว
          เพื่อดำเนินการเปลี่ยนรหัสผ่าน
        </p>

        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleResetPassword}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your Email"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            เข้าสู่ระบบ
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ResetPassword;
