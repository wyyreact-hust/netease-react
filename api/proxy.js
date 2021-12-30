const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = '';
  if (req.url.startsWith('/api')) {
      target = "http://www.uniquemo.cn"
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/api`
      // 例如 /api/user/login 将被转发到 http://target/user/login
      '^/api/': '/'
    }
  })(req, res)
}