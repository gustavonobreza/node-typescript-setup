import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import route from './routes/route';

const app = express();

app.use(cors());
app.use(json());

app.use(route);

export { app };
