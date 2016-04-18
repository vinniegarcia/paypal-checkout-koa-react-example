import Router from 'koa-router';
import routes from '../routes/index';

const addRoutes = (app) => {
    console.log('route time');
    // routes 
    const router = Router();
    routes(router);

    app.use(router.routes());
    app.use(router.allowedMethods());
};

export default addRoutes;


