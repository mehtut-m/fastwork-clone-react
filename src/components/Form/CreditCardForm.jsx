import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { OMISE_SCRIPT_URL, OMISE_PUBLIC_KEY } from '../../config/env';

let Omise;

function CreditCardForm({ pkg }) {
  const [paymentInfo, setPaymentInfo] = useState({
    number: '',
    name: '',
    expiration_year: '2025',
    expiration_month: '12',
    security_code: '',
  });
  console.log(paymentInfo);
  useEffect(() => {
    Omise = window.Omise;
    Omise.setPublicKey('pkey_test_5qx9dm3xhihw7x7cpj2');
    console.log(Omise);
  }, []);
  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Omise.createToken('card', paymentInfo, (statusCode, response) => {
      if (statusCode === 200) {
        // Success: send back the TOKEN_ID to your server. The TOKEN_ID can be
        // found in `response.id`.
        console.log(response.id);
        // checkoutForm.submit();
      } else {
        // Error: display an error message. Note that `response.message` contains
        // a preformatted error message. Also note that `response.code` will be
        // "invalid_card" in case of validation error on the card.
      }
    });
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="number"
            required
            fullWidth
            id="cardNumber"
            label="Card Number"
            value={paymentInfo.cardNo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="name"
            required
            fullWidth
            id="cardHolderName"
            label="Card Holder Name"
            value={paymentInfo.cardHolderName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="expireDate"
            required
            fullWidth
            id="expireDate"
            label="MM/YY"
            onChange={(e) => {
              // const date = e.target.value.split('/');
              // // setPaymentInfo;
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="security_code"
            required
            fullWidth
            id="cvc"
            label="CVC"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        type="submit"
        sx={{ py: '1rem', width: '100%' }}
      >
        ชำระจำนวนเงิน 250 บาท
      </Button>
    </Box>
  );
}

export default CreditCardForm;
