module.exports = {
    debug: true,
    entry: {
        'main': './public/js/main.js'
    },
    output: {
        path: './public/js/dist/',
        publicPath: '/js/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [

    ],
    // Development server configuration
    devServer: {
        quiet: false,
        noinfo: false,
        lazy: true,
        host: process.env.USER_IP || 'localhost',
        port: 8090,
        publicPath: '/',            // Where webpack exposes bundles
                            //  on its own in-memory file system 
        hot: true,                  // Switch on Hot Module Replacement
        indexEntry: 'main',         // Entry to add HNR code to (EntryChunk or CommonsChunk)
        secure: false,              // use https or http
        stats: {
            colors: true,
            hash: false,
            timings: false,
            assets: true,
            chunks: true,
            chunkModules: true,
            modules: false,
            children: true,
            reasons: true
        }
    }
};