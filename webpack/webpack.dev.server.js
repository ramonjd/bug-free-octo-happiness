/* eslint no-console: 0 */

import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import config from './webpack.dev.babel'

const host = process.env.HOST || 'localhost'
const port = (process.env.PORT + 1) || 8888

const options = {
    contentBase: `http://${host}:${port}`,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}

export default function() {

    const compiler = webpack(config)
    const webpackDevServer = new WebpackDevServer(compiler, options)

    return webpackDevServer.listen(port, host, function() {
        console.log('Webpack development server listening on %s:%s', host, port)
    })
}
