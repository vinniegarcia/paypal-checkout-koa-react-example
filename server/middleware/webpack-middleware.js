import http from 'http';
import util from 'util';
import socketio from 'socket.io';
import { PassThrough } from 'stream';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';

const webpackDevMiddleware = (compiler, opts) => {
    const expressMiddleware = devMiddleware(compiler, opts)
    return async (ctx, next) => { // eslint-disable-line
        await expressMiddleware(ctx.req, {
            end: (content) => {
                ctx.body = content
            },
            setHeader: ctx.set.bind(ctx)
        }, next)
    }
};

const webpackHotMiddleware = (compiler, opts) => {
    const expressMiddleware = hotMiddleware(compiler, opts)
    return async (ctx, next) => { // eslint-disable-line
        let stream = new PassThrough()
        ctx.body = stream
        await expressMiddleware(ctx.req, {
            write: stream.write.bind(stream),
            writeHead: (state, headers) => {
                ctx.state = state
                ctx.set(headers)
            }
        }, next)
    }
};

const webpackMiddleware = (app, settings) => {
    const compiled = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiled, {}));
    app.use(webpackHotMiddleware(compiled, {}));
};

export default webpackMiddleware;