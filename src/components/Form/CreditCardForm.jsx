import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/material';
import { useState } from 'react';

function CreditCardForm() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardHolderName: '',
    expireDate: '',
    cvc: '',
  });
  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      // onSubmit={handleSubmitLoginEmail}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="cardNumber"
            required
            fullWidth
            id="cardNumber"
            label="Card Number"
            value={paymentInfo.cardNo}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="cardHolderName"
            required
            fullWidth
            id="cardHolderName"
            label="Card Holder Name"
            value={paymentInfo.cardHolderName}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="expireDate"
            required
            fullWidth
            id="expireDate"
            label="MM/YY"
            value={paymentInfo.expireDate}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="cvc"
            required
            fullWidth
            id="cvc"
            label="CVC"
            value={paymentInfo.cvc}
            // onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Button variant="contained" sx={{ py: '1rem', width: '100%' }}>
        ชำระจำนวนเงิน 250 บาท
      </Button>
    </Box>
  );
}

export default CreditCardForm;
