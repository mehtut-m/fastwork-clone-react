import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { OMISE_SCRIPT_URL, OMISE_PUBLIC_KEY } from '../../config/env';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext } from '../../contexts/CheckoutContext';
import { LoadingContext } from '../../contexts/LoadingContext';

const MySwal = withReactContent(Swal);
let Omise;

function CreditCardForm({ pkg, order }) {
  const navigate = useNavigate();
  const { checkoutPayment, clearOrder } = useContext(CheckoutContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [paymentInfo, setPaymentInfo] = useState({
    number: '4242424242424242',
    name: 'wewew',
    expiration_year: '2025',
    expiration_month: '12',
    security_code: '123',
  });

  useEffect(() => {
    Omise = window.Omise;
    Omise.setPublicKey('pkey_test_5qx9dm3xhihw7x7cpj2');
  }, []);

  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    Omise.createToken('card', paymentInfo, async (statusCode, response) => {
      if (statusCode === 200) {
        // Success: send back the TOKEN_ID to server.
        try {
          const paymentResult = await checkoutPayment({
            token: response.id,
            packageId: pkg?.id,
            requirement: order.requirement,
            image: order.requirementImage,
          });
          if (paymentResult.status === 201) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Your order has been placed',
              showConfirmButton: false,
              timer: 1750,
            });
            clearOrder();
            setTimeout(() => navigate('/'), 2000);
          } else {
            Swal.fire({
              position: 'top-center',
              icon: 'error',
              title: 'Oops...',
              text: 'Payment failed, Try Again!',
              showConfirmButton: false,
              timer: 1750,
            });
          }
        } catch (err) {
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Oops...',
            text: 'Payment failed, Try Again!',
            showConfirmButton: false,
            timer: 1750,
          });
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Transaction Failed',
          text: 'Your payment info is Invalid!',
          showConfirmButton: false,
          timer: 1750,
        });
        // Error: display an error message. Note that `response.message` contains
        // a preformatted error message. Also note that `response.code` will be
        // "invalid_card" in case of validation error on the card.
      }
    });
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1, p: '2rem' }}
      onSubmit={handleSubmit}
    >
      <Typography
        component="h1"
        color="primary"
        textAlign="start"
        sx={{ fontSize: '1.75rem', mb: '1rem' }}
      >
        ชำระเงินผ่านบัตรเครดิต/เดบิต
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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

      <LoadingButton
        loading={isLoading}
        variant="contained"
        type="submit"
        sx={{ py: '1rem', width: '100%', mt: '1.25rem' }}
      >
        ชำระจำนวนเงิน {pkg?.price} บาท
      </LoadingButton>
    </Box>
  );
}

export default CreditCardForm;
