import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use('/', routes);

app.listen(1245, () => {
  console.log('web server listening on http://localhost:1245');
});

export default app;
