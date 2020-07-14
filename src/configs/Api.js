import axios from 'axios';

const ApiFactory = (baseURL = 'http://127.0.0.1:8400/api/v1', config = {}) =>
  axios.create({ baseURL, ...config });

const api = ApiFactory();

// Product
const fetchListProducts = () => api.get('/products');

// Stripe
const checkoutStripeProduct = (data) => api.post('/stripe/checkout-product', data);
const checkoutStripe = (data) => api.post('/stripe/checkout', data);

// PayPal
const createPayPalPayment = (data) => api.post('/paypal/create-payment', data);
const executePayPalPayment = (paymentId, data) =>
  api.post(`/paypal/checkout-payment/${paymentId}`, data);

export {
  fetchListProducts,
  checkoutStripeProduct,
  checkoutStripe,
  createPayPalPayment,
  executePayPalPayment,
};
