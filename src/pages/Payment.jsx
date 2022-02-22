import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { formatThaiCurrency } from '../services/currencyService';
import { useContext, useEffect } from 'react';
import { CheckoutContext } from '../contexts/CheckoutContext';
import PaymentForm from '../components/Form/CreditCardForm';

function Payment() {
  const { order, post, packageId } = useContext(CheckoutContext);
  const pkg = post?.Packages?.find((element) => element.id === packageId);

  return (
    <Container sx={{ display: 'flex', height: 'calc(100vh - 4.5rem)' }}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          pt: '150px',
          px: '20px',
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontSize: '1.5rem',
            textAlign: 'start',
            mb: '1.25rem',
          }}
        >
          รายการที่ต้องชำระ
        </Typography>
        <Box
          sx={{
            background: '#fff',
            borderRadius: '.5rem',
            px: '.75rem',
            textAlign: 'start',
          }}
        >
          ที่ปรึกษา ทำ ตลาดจีน ส่งออกจีน โดยนักธรุกิจ จีน ประสบการณ์ตั้งแต่ปี
          2545
          <Box
            sx={{
              background: 'rgba(196, 196, 196, 0.25)',
              p: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>ราคางาน</Box>
            <Box>{pkg?.price && formatThaiCurrency(pkg?.price)} บาท</Box>
          </Box>
          <Box
            sx={{
              background: 'rgba(196, 196, 196, 0.25)',
              p: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>ยอดชำระค่าจ้างงาน</Box>
            <Box>{pkg?.price && formatThaiCurrency(pkg?.price)} บาท</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: '10px',
            }}
          >
            <Box>จำนวนที่ต้องชำระ</Box>
            <Box>{pkg?.price && formatThaiCurrency(pkg?.price)} บาท</Box>
          </Box>
        </Box>
        {/*  */}
        <Typography variant="body1" color="#00FF38" sx={{ mt: '1rem' }}>
          100% Secure Checkout
        </Typography>
        <Button sx={{ color: '#fff', textDecoration: 'underline' }}>
          ยกเลิกรายการ
        </Button>
      </Box>

      <Box sx={{ width: '100%' }}>
        <PaymentForm pkg={pkg} order={order} />
      </Box>
    </Container>
  );
}

export default Payment;
