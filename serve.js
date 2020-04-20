const http = require('http');
const express = require('express');
const compressMiddleware = require('express-static-gzip');

const app = express();

app.use('/', compressMiddleware('public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
}));

// app.listen(process.env.PORT, (err) => {
//   if (err) throw err;
// });

http.createServer(app).listen(process.env.PORT, (err) => {
  if (err) throw err;
});
