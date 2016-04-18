import paypal from 'paypal-rest-sdk';

import config from '../config';

const {client_id, secret, environment} = config.paypal;

paypal.configure({
    'mode': environment, //sandbox or live
    'client_id': client_id,
    'client_secret': secret
});

const paymentCallback = (resolve, reject) => (err, pmt) => {
    if (err) {
        return reject(err);
    }
    return resolve(pmt);
};

const callPaypal = (method, ...args) => new Promise((resolve, reject) => {
    console.log('callPaypal args', method, args);
    args.push(paymentCallback(resolve, reject));
    paypal.payment[method](...args);
})

export const createPayment = (payRequest) => callPaypal('create', payRequest);

export const processPayment = ({paymentId, payerID}) => callPaypal('execute', paymentId, {payerID});
