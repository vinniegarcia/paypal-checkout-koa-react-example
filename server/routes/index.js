import paypalRoutes from './paypal/';

const routes = (router) => {

    // homepage
    router.get('/', async (ctx, next) => {
        ctx.render('index', {
            title: 'List',
            list: require('./list.json')
        });
    });

    // cancelurl
    router.get('/cancel', async (ctx, next) => {
        ctx.render('cancel', {
            title: 'Cancel URL'
        });
    });

    // returnurl
    router.get('/return', async (ctx, next) => {
        ctx.render('return', {
            title: 'Return URL'
        });
    });

    // incontext xo
    router.get('/incontext', async (ctx, next) => {
        ctx.render('incontext', {
            title: 'In Context List',
            list: require('./list.json'),
            incontext: true
        });
    });

    paypalRoutes(router);
};

export default routes;