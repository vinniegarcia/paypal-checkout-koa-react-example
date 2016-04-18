import {inspect} from 'util';
import {createPayment, processPayment} from '../../models/paypal';
import {linkTransform} from '../../models/response-links';

const paypalRoutes = (router) => {

    router.post('/payment', async (ctx, next) => {
        try {
            const payment = await createPayment(require('../../models/payment.json'));
            console.log(payment);
            const links = linkTransform(payment.links);

            //if redirect url present, redirect user
            if (links.approval_url && links.approval_url.href) {
                ctx.response.redirect(links.approval_url.href);
            } else {
                console.warn('no redirect URI present');
                ctx.response.redirect('/');
            }
        } catch (e) {
            console.error(inspect(e, {depth: null}));
            next(e);
        }
    });

    router.post('/payment/incontext', async (ctx, next) => {
        try {
            const payment = await createPayment(require('../../models/payment.json'));
            console.log(payment);
            const links = linkTransform(payment.links);
            //if redirect url present, redirect user
            if (links.approval_url && links.approval_url.href) {
                var token = links.approval_url.href.split('token=')[1];
                ctx.response.body = { token };
            } else {
                console.warn('no token!');
                ctx.response.status = payment.httpStatusCode;
                ctx.response.body = { error: 'Missing token' }
            }
        } catch (e) {
            console.error('createPayment error', e);
            ctx.status = 500;
            ctx.response.body = { error: e };
        }
    });

    router.get('/process', async (ctx, next) => {
        try {
            const payment = await processPayment(ctx.request.query);
            if (payment.state == 'approved') {
                ctx.response.redirect('/?approved');
                console.log('payment completed successfully');
            } else {
                ctx.response.redirect('/?denied');
                console.warn('payment not successful');
            }
        } catch (e) {
            console.error(e);
            next(e);
        }
    });
}

export default paypalRoutes;