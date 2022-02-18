import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function ForgetPassword() {
  const handleForgetPassword = e => {
    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          boxShadow: '4px 4px 18px 0px rgba(0,0,0,0.25);',
          marginTop: '5rem',
          borderRadius: '10px',
          padding: '1rem',
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ mb: 3, fontWeight: 'bold', color: 'blue' }}
        >
          Fastwork
        </Typography>
        <Box>
          {/* <Typography> */}
          <Typography
            component="h1"
            variant="h5"
            sx={{ textAlign: 'start', fontWeight: 'bold' }}
          >
            ลืมรหัสผ่าน
          </Typography>

          <Box>
            <Typography sx={{ textAlign: 'start' }}>
              Fastwork จะทําการส่งรหัสยืนยันไปยังอีเมล / เบอร์โทรศัพท์ของคุณ
              เพื่อยืนยันความเป็นเจ้าของบัญชี
            </Typography>
          </Box>
          {/* </Typography> */}
        </Box>

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
