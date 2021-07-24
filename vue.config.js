const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/posts_interface_api/' : '/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@$': resolve('src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/__variables.sass";'
      }
    }
  }
}
