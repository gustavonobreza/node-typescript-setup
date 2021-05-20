import { Response, Router } from 'express';

import userData from '../data/users-in-memory';
import { HttpErrors } from '../errors/httpError';

const route = Router({ caseSensitive: false });

route
  .get('/', (req, res, next) => {
    res.status(200).json({
      message: 'Hello World!'
    });
    finishConnection(res);
  })
  .get('/users', (req, res, next) => {
    res.status(200).json({ data: userData });
    finishConnection(res);
  })
  .get('/error', (req, res, next) => {
    const err = new HttpErrors({ name: 'Error', message: 'Just throw an error', statusCode: 500 });
    finishConnection(res, err);
  });

const finishConnection = (res: Response, err ?: HttpErrors) => {
  if (err) res.status(err.statusCode).json({ statusCode: err.statusCode, error: err.name, message: err.message });
  res.end();
};

export default route;
