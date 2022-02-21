import { Box, Container } from '@mui/material';
import { useState } from 'react';
import LoginEmail from '../components/Login/LoginEmail';
import MainLogin from '../components/Login/MainLogin';
import validator from 'validator';

function Login() {
  //* ถ้า สถานะ มีการเปลี่ยนแปลง Component นั้นก็จะถูก render ใส่อัตโนมัติ
  const [email, setEmail] = useState('');

  const [emailError, setEmailError] = useState('');

  const validateEmail = e => {};

  //* ใช้สำหรับ คลิกไปหน้าถัดไป ในหน้า loginemail
  const [mainLogin, setMainLogin] = useState(false);

  const handleSubmitLogin = e => {
    e.preventDefault();
    setMainLogin(true);

    const email = e.target.value;

    if (validator.isEmail(email)) {
      console.log('password');
    } else {
      setEmailError('Enter valid Email Format!');
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: 'calc(100vh - 72px)',
      }}
    >
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
