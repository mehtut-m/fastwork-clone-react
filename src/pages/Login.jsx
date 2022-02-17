import { Box, Container } from '@mui/material';
import { useState } from 'react';
import LoginEmail from '../components/Login/LoginEmail';
import MainLogin from '../components/Login/MainLogin';

function Login() {
  //* ถ้า สถานะ มีการเปลี่ยนแปลง Component นั้นก็จะถูก render ใส่อัตโนมัติ
  const [email, setEmail] = useState('');

  //* ใช้สำหรับ คลิกไปหน้าถัดไป ในหน้า loginemail
  const [mainLogin, setMainLogin] = useState(false);

  // const [loading, setLoading] = useState(false);

  const handleSubmitLogin = e => {
    e.preventDefault();
    setMainLogin(true);
    console.log('email: ' + email);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          boxShadow: '4px 4px 18px 0px rgba(0,0,0,0.25);',
          borderRadius: '10px',
          marginTop: '5rem',
          padding: '1rem',
        }}
      >
        {!mainLogin ? (
          <MainLogin
            handleClickLogin={handleSubmitLogin}
            email={email}
            setEmail={setEmail}
          />
        ) : (
          <LoginEmail email={email} />
        )}
      </Box>
    </Container>
  );
}

export default Login;
