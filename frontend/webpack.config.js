module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:6900',
        changeOrigin: true
      }
    },
    allowedHosts: '',
    port: 3000,
    open: true
  }
}
