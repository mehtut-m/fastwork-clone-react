import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/material';

function CreditCardForm() {
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
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="CVC"
            required
            fullWidth
            id="cvc"
            label="CVC"
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
