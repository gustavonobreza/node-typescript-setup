import { app } from './app';
import { createServer } from 'http';

createServer(app).listen(3000).on('error', (err) => {
  console.error(err);
});
