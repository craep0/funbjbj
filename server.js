const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Proxy endpoint
app.use('/proxy', createProxyMiddleware({
    target: '', // Target is dynamically set by user
    changeOrigin: true,
    router: (req) => {
        const url = new URL(req.query.url);
        return url.origin; // Extracts the base URL
    },
    pathRewrite: (path, req) => new URL(req.query.url).pathname + (req.query.url.split('?')[1] ? '?' + req.query.url.split('?')[1] : ''),
}));

app.listen(PORT, () => {
    console.log(`Proxy server is running at http://localhost:${PORT}`);
});
